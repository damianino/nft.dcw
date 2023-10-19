import { Metadata } from 'next'
import '@/src/styles/global.css'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <head>
        <link
          rel="preload"
          href="/loader.png"
          as="image"
        />
        <link
          rel="stylesheet"
          href="/styles/loader.css"
          />
        <link
          rel="stylesheet"
          href="/fonts/NeueMachina-Regular/style.css"
          />
        </head>
        <body>
          
          <div id="loader" className="shelby-loader-bg ">
            <div className="loader-wrapper">
              <img id="loaderImage" className="shelby-loader-spinner" src="/shelbyContract/loader.png"/>
            </div>
          </div>
          {children}
        </body>
      </html>
    )
  }
 
export const metadata: Metadata = {
  title: 'DCW.NFT - TotTranslator',
  description: 'Welcome to Totverse',
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: "/favicon.ico",
}