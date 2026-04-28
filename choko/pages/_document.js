import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Livvic:wght@100;200;300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="css/devicon.min.css" />
        <link rel="stylesheet" href="css/all.min.css" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="css/animate.min.css" />
        <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css" />
        <link rel="stylesheet" href="css/style.css" />
        <style dangerouslySetInnerHTML={{__html: `
          .wow { visibility: visible !important; opacity: 1 !important; clip-path: none !important; }
          .animated { visibility: visible !important; opacity: 1 !important; clip-path: none !important; }
          .wow * { visibility: visible !important; opacity: 1 !important; clip-path: none !important; }
          .animated-layer { visibility: visible !important; opacity: 1 !important; clip-path: none !important; }
          .fadeInUp { visibility: visible !important; opacity: 1 !important; clip-path: none !important; }
          .fadeIn { visibility: visible !important; opacity: 1 !important; clip-path: none !important; }
          .fadeInLeft { visibility: visible !important; opacity: 1 !important; clip-path: none !important; }
          .fadeInRight { visibility: visible !important; opacity: 1 !important; clip-path: none !important; }
          .fadeInDown { visibility: visible !important; opacity: 1 !important; clip-path: none !important; }
          .home h1 span, .home h1 span span { overflow: visible !important; clip-path: none !important; }
          .intro { border-radius: 0 !important; overflow: visible !important; }
        `}} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
