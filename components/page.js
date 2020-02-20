import Head from 'next/head'

export default ({ children, title = 'Great Egg Trail', description = '' }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" type="image/png" href="/images/icons/icon-128x128.png" />
      <link
        rel="apple-touch-icon"
        href="/images/icons/apple-touch-icon.png"
      ></link>
      <title>{title + ' | Great Egg Trail'}</title>
    </Head>
    <div>{children}</div>
  </>
)
