import Home from "./page.js"


export const metadata = {
  title: 'Animal Gallery'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Home/>
      </body>
    </html>
  )
}
