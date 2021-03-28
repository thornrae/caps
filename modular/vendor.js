'use strict';

//equivalent to inclass demo brain.js
//bringing in driver.js
//bring in events.js
//setInterval function to create new orders (new orders have payload info like ID, storeName. use faker.js module to create fake orders)
//events.emit('order', payload)

const events = require('./events.js');
const faker = require('faker');
require('dotenv').config();

let storeName = process.env.STORE_NAME;

events.on('delivered', thankYou);

//create a new customer order ever 5 seconds (using setInterval() new orders should include: storeName, orderId, customerName, address)
setInterval( () => {
  let address = (faker.fake("{{address.streetAddress}} {{address.city}}, {{address.state}}  {{address.zipCode}}"));
  let customerName = (faker.fake("{{name.lastName}}, {{name.firstName}}"));
  let orderId = faker.datatype.number();

  let payload = {
    storeName: storeName,
    address: address, 
    customerName: customerName,
    orderId: orderId
  }
  console.log(payload);
  //emit 'pick up' event and attach fake order as payload
  events.emit('pickup', payload);
}, 5000)


function thankYou() {
  console.log(`VENDOR: thank you for delivery ${payload.orderId}`)
}


//whenever 'delivered' event occurs, log "thank you" to the console



