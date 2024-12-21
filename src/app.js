const { envs } = require('./config/env')
const { startServer } = require('./server/server')

const main = () => {
  startServer({
    port: envs.PORT,
    publicPath: envs.PUBLIC_PATH,
  })
}

// Funcion agnostica autoinvocada
// Agnostica porque no tiene nombre
// Autoinvocada porque la ejecutamos con los parentesis
(async () => {
  main()
})()