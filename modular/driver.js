'use strict'

//equivalent to in class demo to arms/eyes

const events = require('./events.js');


events.on('pickup', inTransit)
events.on('in-transit', delivered);

function inTransit(payload){
    setInterval(() => {
    console.log(`DRIVER: picked up ${payload.orderId}`)
    events.emit('in-transit', payload)
  }, 1000)
}


function delivered(payload){
   setInterval( () => {
    console.log(`DRIVER: delivered ${payload.oderId}`);
    events.emit('delivered', payload);
  }, 3000) 
}
  




//emit an 'in transit' event with the payload received

//wait 3 seconds, log: delivered to the console

//emit a 'delivered' event with the same payload 

