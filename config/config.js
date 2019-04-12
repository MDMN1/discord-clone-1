const config = {};

config.port = process.env.PORT || 5000;
  config.dbURL = "mongodb://localhost/minicord";


module.exports = config;
