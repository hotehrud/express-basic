import express from 'express'
import path from 'path'

class Server {
  
    constructor () {
      this._express = express()
      this.middleware()
      this.routes()
    }
  
    // Configure Express middleware.
    middleware () {
      // this.express.use(bodyParser.json())
      // this.express.use(bodyParser.urlencoded({ extended: true }))
      // this.express.use(express.static('public'))
    }
  
    // Configure API endpoints
    routes () {
      const router = express.Router()

      router.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../index.html'))
      })

      this.express.use('/', router)
    }

    get express () {
      return this._express
    }
  }

  export default new Server().express