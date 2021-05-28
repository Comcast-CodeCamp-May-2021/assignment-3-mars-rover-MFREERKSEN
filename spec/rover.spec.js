const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  it("constructor sets position and default values for mode and generatorWatts.",function() {
  let position = 0;
  let mode = 'NORMAL';
  let generatorWatts = 110;
  let rover = new Rover(position)
  expect(rover.position).toEqual(0);
  expect(rover.mode).toEqual(mode);
  expect(rover.generatorWatts).toEqual(generatorWatts);
  })
  //test 8 
  it("response returned by receiveMessage contains name of message",function(){
    let rover = new Rover();
    let response = new Message("name",[]);
    let newVar = rover.receiveMessage(response)
    // console.log(newVar);
    expect(rover.receiveMessage(response).message).toEqual(response.name);
  })
  //test 9
  it("response returned by receiveMessage includes two results if two commands are sent in the message",function(){
    // let rover = new Rover();
    let testCommandOne = new Command ("MOVE",20);
    let testCommandTwo = new Command ('MODE_CHANGE', 'LOW_POWER');
    let testCommandThree = new Command ('STATUS_CHECK');
    let testMessage = new Message ("Message with two commands in an Array",[testCommandOne,testCommandTwo]);
    let testRover = new Rover(1234);
    let response = new Message("name",[testCommandOne,testCommandTwo]);
    // console.log (testRover.receiveMessage(testMessage).results.length);
    expect(testRover.receiveMessage(testMessage).results.length).toEqual(2);
  })
  //test 10
  it("responds correctly to status check command",function(){
  // let testCommandOne = new Command ("move",20);
    // let testCommandTwo = new Command ('MODE_CHANGE', 'LOW_POWER');
     let testCommandOne = new Command('STATUS_CHECK');
     let testCommandTwo = new Command('MOVE', 20);
     let testMessage = new Message ("Message with two commands in an Array", [testCommandOne, testCommandTwo]);
    let testRover = new Rover(88);
    let objectResponse = testRover.receiveMessage(testMessage);

  expect(objectResponse.results[0].roverStatus.mode).toEqual("NORMAL");
  expect(objectResponse.results[0].roverStatus.position).toEqual(88);
  expect(objectResponse.results[0].roverStatus.generatorWatts).toEqual(110);
  })
  //test 11
  it("responds correctly to mode change command",function(){
    let testCommandOne = new Command ("MOVE",20);
    let testCommandTwo = new Command ('MODE_CHANGE', 'LOW_POWER');
    let testCommandThree = new Command ('STATUS_CHECK');
    let testMessage = new Message ("Message with two commands in an Array",[testCommandOne,testCommandTwo]);
    let testRover = new Rover(1234);
    let response = new Message("name",[testCommandOne,testCommandTwo]);
    let objectResponse = testRover.receiveMessage(testMessage);
  expect(testRover.mode).toEqual("LOW_POWER");
  })
//test 12
// it("responds with false completed value when attempting to move in LOW_POWER mode",function(){
//     let testCommandOne = new Command ("MOVE",20);
//     let testCommandTwo = new Command ('MODE_CHANGE', 'LOW_POWER');
//     let testCommandThree = new Command ('STATUS_CHECK');
//     let testMessage = new Message ("Message with two commands in an Array",[testCommandOne,testCommandTwo]);
//     let testRover = new Rover(1234);
//     let response = new Message("name",[testCommandOne,testCommandTwo]);
//     let objectResponse = testRover.receiveMessage(testMessage);
//   expect(testRover.status)  
// })
//test 13
  /*objectResponse = { 
    message: 'Message with two commands in an Array', 
    results: [ Object({ completed: true, 
                        roverStatus:. Object({ mode: 'NORMAL', 
                                              generatorWatts: 110, 
                                              position: 88 })
    ] 
    }*/
 

  

});
