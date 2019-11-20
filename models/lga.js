const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let lgaSchema = new Schema(
  {
    uniqueid: {
      type: String
    },
    lga_id: {
      type: String
    },
    lga_name: {
      type: String
    },
    state_id: {
      type: String
    },
    lga_description: {
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
    collection: "lga"
  }
);

module.exports = mongoose.model("lga", lgaSchema);