from io import BytesIO
import json
import pyqrcode
import svgwrite
from cairosvg import svg2png

with open("easter-data.json") as f:
    json_data = json.load(f)

templates = json_data["templates"]
eggs = json_data["eggs"]

for egg in range(len(eggs)):
    print("Creating QR code for egg " + str(egg))
    template = templates[eggs[egg]["template"]]

    dwg = svgwrite.Drawing(size=(template["bg_w"], template["bg_h"]))
    bg_img = dwg.image(template["bg_url"], insert=(0, 0), size=(template["bg_w"], template["bg_h"]))
    dwg.add(bg_img)

    qr_url = "http://www.crossroad.org.uk/easter/?egg=" + f'{egg:02}'
    fname = "./output/easter_" + f'{egg:02}' + ".png"

    qr_code = pyqrcode.create(qr_url)
    buffer = BytesIO()
    qr_code.svg(buffer, xmldecl=False, svgns=False, omithw=True)
    svg_str = buffer.getvalue().decode('utf-8')
    path_idx = svg_str.index(" d=\"")
    path_d = svg_str[path_idx+4:-10]
    path = dwg.path(d=path_d, fill='black', stroke='black')
    path.translate(template["qr_x"], template["qr_y"])
    path.scale(template["qr_size"]/45)
    dwg.add(path)
    font_style = "font-family:" + template["text_font"] + "; font-size:" + \
        str(template["text_size"]) + "pt; fill:" + template["text_color"]
    three_words = dwg.text("Code: " + eggs[egg]["three_words"], \
        insert=(template["text_x"], template["text_y"]), style=font_style)
    dwg.add(three_words)

    svg2png(bytestring=dwg.tostring(), write_to=fname)
