import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Meta Tags */}
        <meta name="description" content="Cheker Hassan - Mobile-First Product Engineer & AI Systems Builder. Full-stack ecosystems from concept to working system." />
        <meta name="keywords" content="software engineer, mobile development, AI integration, full-stack, product engineer" />
        <meta name="author" content="Cheker Hassan" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Cheker Hassan - Product Engineer & Systems Builder" />
        <meta property="og:description" content="Mobile-first. AI-native. Product-obsessed." />
        <meta property="og:type" content="website" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
