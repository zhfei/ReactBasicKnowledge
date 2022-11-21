const mongoose = require("mongoose")
const config = require("./DBIndex")

mongoose.connect(config.DB_RUL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on("connected", () => {
  console.log("mongoose connection open to: "+config.DB_RUL)
})

mongoose.connection.on("error", (err) => {
  console.log("mongoose connection error:  "+err)
})

mongoose.connection.on("disconnected", () => {
  console.log("mongoose disconnected ")
})


exports.mongoose = mongoose
