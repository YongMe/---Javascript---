const eventEmitter = require('events')

class Logger extends eventEmitter{
     log(message){
        console.log('message')
        eventEmitter.emit('message Logged', {id:1, url:'https://'}
     }
     
}

  
module.exports = Logger 

