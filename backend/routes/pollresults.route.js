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
        //return getEachPollResult(res, next, poll.polling_unit_id);
        pollresults.find(
          { polling_unit_uniqueid: poll.polling_unit_id },
          (error, data) => {
            if (error) {
              return next(error);
            } else {
              res.json(data);
            }
          }
        );
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
    result_id: Math.ceil(Math.random() * 10000),
    party_abbreviation: req.body.partyNameWithID,
    polling_unit_uniqueid: req.body.pollingUnitID,
    party_score: req.body.partyScore,
    entered_by_user: req.body.enteredBy,
    date_entered: "2011-04-26 15:44:03",
    user_ip_address: "192.168.1.101"
  });
  newPoll
    .save()
    .then(poll => res.json(poll))
    .catch(err => console.log(err));
});

module.exports = router;
