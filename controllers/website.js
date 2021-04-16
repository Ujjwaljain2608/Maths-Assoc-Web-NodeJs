const fs = require("fs");

const path = require("path");

const nodemailer = require("nodemailer");
const sendgridtransporter = require("nodemailer-sendgrid-transport");

const rootdir = require("../util/path");
const Contact = require("../models/contact");
const Join = require("../models/join");

const transporter = nodemailer.createTransport(
  sendgridtransporter({
    auth: {
      api_key: process.env.SENDGRID_API_KEY,
    },
  })
);

exports.postcontact = (req, res, next) => {
  const name = req.body.name;
  const mail = req.body.mail;
  const mobile = req.body.mobile;
  const message = req.body.message;
  const contact = new Contact({
    name: name,
    mail: mail,
    mobile: mobile,
    message: message,
  });
  contact
    .save()
    .then((result) => {
      transporter.sendMail({
        to: "f20190647@pilani.bits-pilani.ac.in",
        from: "mathsfirstperson@gmail.com",
        subject: "Contact Details, MABP Website",
        text: `
        Name : ${name}
        Mail : ${mail}
        Contact No : ${mobile}
        Message : ${message}
        `,
      });
      console.log(result);
      res.redirect("/contact");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postjoin = (req, res, next) => {
  const name = req.body.name;
  const bitsid = req.body.bitsid;
  const mobile = req.body.mobile;
  const mail = req.body.mail;
  join = new Join({
    name: name,
    bitsid: bitsid,
    mobile: mobile,
    mail: mail,
  });
  join
    .save()
    .then((result) => {
      transporter.sendMail({
        to: "f20190647@pilani.bits-pilani.ac.in",
        from: "mathsfirstperson@gmail.com",
        subject: "Regarding Maths Assoc Recruitment - Sem 2 20/21",
        text: `
        Name : ${name}
        Mail : ${bitsid}
        Contact No : ${mobile}
        Message : ${mail}
        `,
      });
      console.log(result);
      res.redirect("/join");
    })
    .catch((err) => {
      console.log(err);
    });
};

/* Contact.fetchall((contacts) => {

}) lecture 102 is very important */
