let config;

if (process.env.NODE_ENV === "production") {
  config = require("./config/production.json");
} else {
  config = require("./config/development.json");
}

export default config;
