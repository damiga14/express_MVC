var { app } = require('./api')
var { config } = require('./config')


app.listen(config.port, ()=>{
    console.log(`Server listening on port ${config.port}`)
})