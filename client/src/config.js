let config;

if (process.env.REACT_APP_NODE_ENV === "production") {
  config = require("./config/production.json");
} else {
  config = require("./config/development.json");
}

console.log(config);
export default config;
