var express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

function loggerMiddleware(req, res, next) {
  console.log(`Request received at: ${new Date()}`);
  next();
}

app.use(loggerMiddleware);

app.get("/api/customers", (req, res) => {
  const { keyword, category, limit } = req.query;
  res.status(200).json({
    message: "Data berhasil diambil",
    data: [
      {
        name: "whilli",
        email: "a@s.com",
        role: "sdd",
      },
      {
        name: "whilli",
        email: "a@s.com",
        role: "sdd",
      },
    ],
    pagination: {
      total_record: 100,
      current_page: 1,
      total_pages: limit,
    },
    search: {
      keyword: keyword,
      category: category,
    },
  });
});

app.get("/api/customers/:id", (req, res) => {
  const customersID = req.params.id;
  res.status(200).json({
    message: "Data berhasil diambil",
    data: {
      customersID: customersID,
      name: "whilli",
      email: "a@s.com",
      role: "sdd",
    },
  });
});

app.post("/api/customers", (req, res) => {
  console.log(req.body);
  const { name, email, role } = req.body;

  // res.send(
  //   `thank you, ${name} with email: ${email} and role: ${role} we have received your submission`
  // );
  res.status(201).json({
    message: "create data berhasil",
    data: {
      name: name,
      email: email,
      role: role,
    },
  });
});

const port = 3000;
app.listen(3000, () => {
  console.log(`App berjalan di port ${port}`);
});
