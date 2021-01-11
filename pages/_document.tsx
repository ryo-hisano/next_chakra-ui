// _document.jsはサーバーサイドレンダリング時のみ呼び出される。
// そのため、onClickなどのイベントハンドラを定義することはできない。
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from 'next/document'

type Props = {
  initialProps: DocumentInitialProps
}

class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {/* Global site tag (gtag.js) - Google Analytics */}
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=X-XXXXXXXXXX`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'X-XXXXXXXXXX', {
                    page_path: window.location.pathname,
                  });`,
              }}
            />
          </>
          <title>青空文庫読むくん</title>
          <meta name="description" content="青空文庫読むくん" />
          <meta property="og:title" content="青空文庫読むくん" />
          <meta property="og:description" content="青空文庫読むくん" />
          <meta property="og:url" content="https://nontan-next-chakra.vercel.app/" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="theme-color" content="#1a202c" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="青空文庫読むくん" />
          <meta property="og:locale" content="ja_JP" />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
