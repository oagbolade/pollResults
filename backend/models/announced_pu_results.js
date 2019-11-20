const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let pollSchema = new Schema(
  {
    polling_unit_uniqueid: {
      type: String
    },
    result_id: {
      type: String
    },
    party_abbreviation: {
      type: String
    },
    party_score: {
      type: String
    },
    entered_by_user: {
      type: String
    },
    date_entered: {
      type: String
    },
    user_ip_address: {
      type: String
    }
  },
  {
    collection: "announced_pu_results"
  }
);

module.exports = mongoose.model("announced_pu_results", pollSchema);