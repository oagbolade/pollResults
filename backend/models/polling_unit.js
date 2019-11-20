const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let pollingUnitSchema = new Schema(
  {
    uniqueid: {
      type: String
    },
    polling_unit_id: {
      type: String
    },
    ward_id: {
      type: String
    },
    lga_id: {
      type: String
    },
    uniquewardid: {
      type: String
    },
    polling_unit_number: {
      type: String
    },
    polling_unit_name: {
      type: String
    },
    polling_unit_description: {
      type: String
    },
    lat: {
      type: String
    },
    long: {
      type: String
    },
    entered_by_user: {
      type: String
    },
    date_entered: {
      type: String
    },
    dateuser_ip_address_entered: {
      type: String
    }
  },
  {
    collection: "polling_unit"
  }
);

module.exports = mongoose.model("polling_unit", pollingUnitSchema);