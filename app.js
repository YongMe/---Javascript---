const Logger = require('./app')

Logger logger = new Logger()

logger.addListener('messageLogged', function(arg){

        console.log('Listener added', arg)

})

logger.log('message')
