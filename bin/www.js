import app from '../app/server'
import { serverConfig } from '../config/'

app.listen(serverConfig.port, (err) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`server is listening on ${serverConfig.port}`)
})