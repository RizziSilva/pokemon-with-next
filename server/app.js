const express = require('express')
const next = require('next')

const port = 3000 // Vindo do process.env
const dev = process.env.NODE_ENV !== 'production'
const server = express()
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err

    console.log(`Server listening on port ${port}`)
  })
})
