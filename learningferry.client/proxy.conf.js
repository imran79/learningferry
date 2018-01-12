const PROXY_CONFIG = [{
  context: [
    "/login",
    "/many",
    "/endpoints",
    "/i",
    "/need",
    "/to",
    "/proxy"
  ],
  target: "http://localhost:5000",
  secure: false
}]

module.exports = PROXY_CONFIG;
