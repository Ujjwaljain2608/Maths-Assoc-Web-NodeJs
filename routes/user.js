const express = require("express");

const router = express.Router();

const path = require("path");

const rootdir = require("../util/path");

const webcontroller = require(path.join(rootdir, "controllers", "website.js"));

router.get("/", (req, res, next) => {
  res.render("user/index", {
    pagetitle: "Mathematics Association, BITS Pilani",
    path: "/",
  });
});

router.get("/members", (req, res, next) => {
  res.render("user/web-members", {
    pagetitle: "Members",
    path: "/members",
  });
});

router.get("/events", (req, res, next) => {
  res.render("user/web-events", {
    pagetitle: "Events",
    path: "/events",
  });
});

// router.get("/event/:eventid", (req, res, next) => {
//   res.sendFile(path.join(rootdir, "views", "user", "amo.html"));
// });

router.get("/contact", (req, res, next) => {
  res.render("user/web-contactus", {
    pagetitle: "Contact Us",
    path: "/contact",
  });
});

router.post("/contact", webcontroller.postcontact);

router.get("/join", (req, res, next) => {
  res.render("user/web-joinus", {
    pagetitle: "Join Us!",
    path: "/join",
  });
});

router.post("/join", webcontroller.postjoin);

module.exports = router;
