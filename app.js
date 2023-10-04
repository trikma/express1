const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const basicAuth = require("express-basic-auth");
const helmet = require("helmet");
const controller = require("./controller/mahasiswa");
const cors = require("cors");

app.use(cors());

// app.use("/mahasiswa", controller.post);

app.use(express.json());

app.use(helmet());

// app.use(
//   basicAuth({
//     users: { admin: "supersecret" },
//     unauthorizedResponse: basicAuthResponse,
//   })
// );

function basicAuthResponse(req) {
  return req.auth
    ? ("Credentials", +req.auth.user + ":" + req.auth.password + "rejected")
    : "Unauthorized";
}

const mahasiswaRoutes = require("./routes/mahasiswa");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/mahasiswa", mahasiswaRoutes);

app.use((req, res, next) => {
  const error = new Error("Tidak ditemukan");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message,
  });
});

module.exports = app;
