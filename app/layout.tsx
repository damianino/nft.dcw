import { Metadata } from 'next'
import './styles/global.css'

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
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
        </head>
        <body>
          <div id="loader" className="loader-bg">
            <div className="loader-wrapper">
              <img className="loader-spinner" src="/loader.png"/>
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