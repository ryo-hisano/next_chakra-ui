// カスタム共通処理
// ページ間で共通のレイアウトを作成など
// サーバーサイド側とクライアント側、両方で実行される
// https://nextjs.org/docs/#custom-app

import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default App
