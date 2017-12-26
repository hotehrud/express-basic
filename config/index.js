import server from './server-config'

class Config {

  constructor() {
    this._serverConfig = server
  }

  get serverConfig () {
    return this._serverConfig
  }

}

const config = new Config()
export const serverConfig = config._serverConfig
