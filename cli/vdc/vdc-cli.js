const vdc = require("cli-vdc-bestdodger")
vdc.loginServer({
  name: "sampleServer",
  development: true,
  api_key: "123456"
})
vdc.startServer({
  portNum: 3000,
  type: "localText",
  localPageText: "Hello Server! This is amazing! just with 11 lines! :) Super good!"
})
