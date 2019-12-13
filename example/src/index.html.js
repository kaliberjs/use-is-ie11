import App from '/domain/App?universal'
import javascript from '@kaliber/build/lib/javascript'

export default (
  <html lang='nl'>
    <head>
      <meta charSet='utf-8' />
      <title>useIsIe11</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      {javascript}
    </head>
    <body>
      <App />
    </body>
  </html>
)