const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AXpNUn9HPiEOCQ6KcsVC_7zpHOG_fBjdr5iDtM_O7Od5uD0m8lGYp7f-UA6HoInCxg8CzMIqAMNfSelO",
  client_secret:
    "EJNVe5Mow5pzmzxnenCPAiniCGhirgzo5nubv52vQUvPL5iocbZvl0i6oPbtkjnXH7-yvc-Od22xClHn",
});

module.exports = paypal;
