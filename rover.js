const Command = require('./command.js');
const Message = require('./message.js');


class Rover {
  constructor(position) {
    this.position = position;
    this.mode = "NORMAL"
    this.generatorWatts = 110;
  }
  receiveMessage(messageObject) {
    let results = []
    let response = {
      message: messageObject.name,
      results: results
    };
    let numberOfCommandsArray = messageObject.commands.length;
    for (let i = 0; i < numberOfCommandsArray; i++) {
      if (messageObject.commands[i].commandType === 'STATUS_CHECK') {
        let roverStatus = { mode: this.mode, generatorWatts: this.generatorWatts, position: this.position }
        let status = {
          completed: true,
          roverStatus: roverStatus

        }
        results.push(status)
      } else if (messageObject.commands[i].commandType === 'MODE_CHANGE') {
        this.mode = messageObject.commands[i].value
        let status = {
          completed: true
        }
        results.push(status)
      } else if (messageObject.commands[i].commandType === 'MOVE' && this.mode === 'LOW POWER') {
        // this.mode === 'LOW POWER'
        let status = {
          completed: false
          
        }
        results.push(status)
      }
      else if (messageObject.commands[i].commandType === 'MOVE' && this.mode === 'NORMAL') {
        let status = {
          completed: true

      
        }
        results.push(status)
    }
    }
    return response;
  }

}


module.exports = Rover;



  //  let rover = new Rover();
  //   let testMessage = new Message ( "Message with two commands in an Array"[testCommandOne,testCommandTwo]);
  //   let testRover = new Rover(1234);
  //   let response = new Message("messageObject",[testCommandOne,testCommandTwo]);
  //   let newObject = {
  //    message: message.messageObject,
  //    results: [testCommandOne,testCommandTwo]