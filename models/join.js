const path = require("path");

const rootdir = require("../util/path");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const JoinSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  bitsid: {
    type: String,
    require: true,
  },
  mobile: {
    type: String,
    require: true,
  },
  mail: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Join", JoinSchema);
// const fs = require("fs");
// const path = require("path");

// const rootdir = require("../util/path");

// p = path.join(rootdir, "data", "JoinDetails.json");

// module.exports = class Join {
//   constructor(name, bitsid, mobile, mail) {
//     this.name = name;
//     this.bitsid = bitsid;
//     this.mobile = mobile;
//     this.mail = mail;
//   }

//   save() {
//     fs.readFile(p, (err, content) => {
//       let join = [];
//       if (!err) {
//         join = JSON.parse(content);
//       }
//       join.push(this);
//       fs.writeFile(p, JSON.stringify(join), (err) => {});
//     });
//   }
//   // Not called on a single instance of the join
//   static fetchall(callback) {
//     fs.readFile(p, (err, content) => {
//       //asynchronous code fetchall returns undefinied
//       if (err) {
//         return callback([]);
//       }
//       callback(JSON.parse(content));
//     });
//   }
// };
