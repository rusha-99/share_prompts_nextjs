import '@styles/globals.css';
import { Children } from 'react';

export const metadata = {
    title:"Chat GTP-LITE",
    description:"Discover prompts"
}

const Rootlayout = ( {children}) => {
  return (
    <>
      <html lang="en">
        <body>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">{children}</main>
        </body>
      </html>
   
    </>
  )
}

export default Rootlayout;