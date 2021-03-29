'use strict'

//equivalent to in class demo to arms/eyes

const events = require('./events.js');


events.on('pickup', inTransit)
events.on('pickup', delivered)

function inTransit(payload){
    setTimeout(() => {
    console.log(`DRIVER: picked up ${payload.orderId}`)
    events.emit('in-transit', payload)
  }, 1000)

}

function delivered(payload){
  setTimeout( () => {
    console.log(`DRIVER: delivered ${payload.orderId}`);
    events.emit('delivered', payload);
  }, 3000) 
}

//separate these^^^ 


// events.on('in-transit', delivered);

// function delivered(payload){
//    setInterval( () => {
//     console.log(`DRIVER: delivered ${payload.orderId}`);
//     events.emit('delivered', payload);
//   }, 3000) 
// }
  




//emit an 'in transit' event with the payload received

//wait 3 seconds, log: delivered to the console

//emit a 'delivered' event with the same payload 

