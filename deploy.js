var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

// config extracting
const {env: {
  host = null,
  user = null,
  password = null,
  port = 21,
  localRoot = __dirname + "/dist/NgxMasterclass",
  remoteRoot = '/',
  deleteRemote = true,
  forcePasv = true
} = {}} = process||{};
// build config object data
var config = {
  user,
  // Password optional, prompted if none given
  password,
  host,
  port,
  localRoot,
  remoteRoot,
  // include: ["*", "**/*"],      // this would upload everything except dot files
  include: ["*", "**/*", ".*"],
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  exclude: [
    "dist/**/*.map",
    "node_modules/**",
    "node_modules/**/.*",
    ".git/**",
  ],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote,
  forcePasv
};
console.log('>>>>', process.env);
// run lib to deploy
ftpDeploy
  .deploy(config)
  .then((res) => console.log("finished:", res))
  .catch((err) => console.log(err));