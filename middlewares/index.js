const express = require("express");
const app = express();
const port = 3000;

// Built-in middleware to parse JSON
app.use(express.json());

// ✅ Logging middleware
const logging = function (req, res, next) {
  console.log("Logging krr hu");
  next();
};
app.use(logging); // ✅ Correct usage

// ✅ Auth middleware
const auth = function (req, res, next) {
  console.log("Auth krr hu");
  next();
};
app.use(auth);

// ✅ Validation middleware
const validation = function (req, res, next) {
  console.log("Validation krr hu");
  next();
};
app.use(validation);

// ✅ Route handler
app.get("/", (req, res) => {
  console.log("Main route handler hu");
  console.log(req.body);
  res.send("Middleware working!");
});

// ✅ Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});



// const express = require("express");
// const app = express();
// const port = 3000;

// app.use(express.json());

// const logging = function (req, res, next) {
//   console.log("Logging krr hu ");
//   next();
// };
// app.use = logging;
// const auth = function (req, res, next) {
//   console.log("Auth krr hu ");
//   next();
// };
// app.use(auth);
// const validation = function (req, res, next) {
//   console.log("validation krr hu");
//   next();
// };
// app.use(validation);

// app.get("/", (req, res) => {
//   console.log("Main route handler hu ");
//   console.log(req.body);
//   res.send("Middleware");
// });

// app.listen(port, () => {
//   console.log(`Middleware ${port}`);
// });
