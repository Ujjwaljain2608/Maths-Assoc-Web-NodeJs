// const fs = require("fs");
const path = require("path");

const rootdir = require("../util/path");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  mail: {
    type: String,
    require: true,
  },
  mobile: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Contact", ContactSchema);
// p = path.join(rootdir, "data", "ContactDetails.json");

// module.exports = class Contact {
//   constructor(name, mail, mobile, message) {
//     this.name = name;
//     this.mail = mail;
//     this.mobile = mobile;
//     this.message = message;
//   }

//   save() {
//     const db = getdb();
//     return db
//       .collection("contacts")
//       .insertmany(this)
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   // Not called on a single instance of the contact
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
