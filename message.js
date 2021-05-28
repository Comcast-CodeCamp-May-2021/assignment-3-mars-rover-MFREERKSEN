class Message {
   constructor(name,commands){
     this.name = name;
     if (!name) {
      throw Error ("Message name required.");
      }
      this.commands = commands;
    }
}
module.exports = Message;


// Failure: Expected undefined to equal [ Command({ commandType: 'STATUS_CHECK', value: undefined }), Command({ commandType: 'MOVE', value: 20 }) ].
// Error: Expected undefined to equal [ Command({ commandType: 'STATUS_CHECK', value: undefined }), Command({ commandType: 'MOVE', value: 20 }) ].