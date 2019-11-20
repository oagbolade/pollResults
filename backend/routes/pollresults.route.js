let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Model
let pollresults = require("../models/announced_pu_results");
let lgaResults = require("../models/lga");
let pollingUnitResults = require("../models/polling_unit");

// Get Single Poll, Question One
router.route("/get-individual-polls/:id").get((req, res, next) => {
  pollresults.find({ polling_unit_uniqueid: req.params.id }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// Functions
let getEachPollResult = (res, next, polling_unit_uniqueid) => {
  pollresults.find({ polling_unit_uniqueid }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// Get Single LGA, Question Two
router.route("/lga/:id").get((req, res, next) => {
  pollingUnitResults.find({ lga_id: req.params.id }, (error, data) => {
    if (error) {
      return error;
    } else {
      data.forEach(poll => {
        return getEachPollResult(res, next, poll.polling_unit_id);
      });
    }
  });
});

// Get all lgas, Question Two
router.route("/lgas").get((req, res, next) => {
  lgaResults.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Create a poll, Question three
router.route("/create-poll").post((req, res, next) => {
  const newPoll = new pollresults({
    result_id: "1001",
    party_abbreviation: "D.A.Y.O",
    polling_unit_uniqueid: "1001",
    party_score: "1001",
    entered_by_user: "Oladayo",
    date_entered: "2011-04-26 15:44:03",
    user_ip_address: "192.168.1.101"
  });
  newPoll.save()
    .then(poll => res.json(poll))
    .catch(err => console.log(err))
});

module.exports = router;
