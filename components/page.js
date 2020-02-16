import Head from 'next/head'

export default ({ children, title = 'Great Egg Trail', description = '' }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href="/manifest.json" />
      <title>{title + ' | Great Egg Trail'}</title>
    </Head>
    <div>{children}</div>
  </>
)
