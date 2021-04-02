'use strict'; 

// const { internet, fake } = require('faker');
let pickup = require('../caps.js');

describe('**** CAPS *****', () => {
  //picked up
  it('should log picked up message to console', () => {
    
    let fakeorder = 'fake order'; 
    let testFunction = inTransit();
    let test = testFunction(fakeorder)

    expect(test).toBe(`DRIVER: picked up ${fakeorder}`)
    
  })
  //in transit
  it('should log driver picked up message to console', () => {

  })
  //delivered 
  it('should log thank you for delivery message', () => {

  })

})