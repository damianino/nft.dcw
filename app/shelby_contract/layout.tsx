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
  title: 's̵̛̱͚͠ḫ̴̤͙̈ẹ̸̡̊l̶͉̊̀b̶̪̏͐y̷̯͛̋ ̶̡̯̣͆c̷̠̺̞̃̕͝o̴͖͐̐ņ̴̨̺͌t̵̨̘̱́̚͝r̷̡̘͖̂͘ä̶̖́c̶̨͓̅̀t̶̪̒̿',
  description: '̸͙̘̬͑̾s̸̡̲̔̃̂a̷͕̾̆̕y̷̭̠̓̈ ̸̛̭̎g̶̨̫̝͛̿ò̵͔́ố̶͕̖d̴͉͓̭͛̑̓ḅ̵͌̂ỳ̷̤ȇ̴̱̉ ̷̛͖̲̈̉t̶͚̀͑o̷̙̺̽̀̊ ̴͚̎y̶͕̩͆̾͜o̴͕̒͑u̴͓̔͑̍r̷̩̀͌͋ ̷̳̦̊̐͠s̸͍͕͌o̶̭͑͝u̷̲̇͗̚l̷̛͉̇',
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: "/shelbyContract/favicon.ico",
}