import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import ProgressBar from "@badrap/bar-of-progress";
import Router from 'next/router';
import { RecoilRoot } from 'recoil';
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const progress = new ProgressBar({
    size: 2,
    color: '#f09433',
    className: 'z-50',
    delay: 100,
  })
  Router.events.on('routeChangeStart', progress.start);
  Router.events.on('routeChangeComplete', progress.finish);
  Router.events.on('routeChangeError', progress.finish);
  return (
    <SessionProvider session={session} >
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  )
}

export default MyApp
