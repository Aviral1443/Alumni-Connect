import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const firebaseConfig = {
  apiKey: "AIzaSyApIj5vsg7mHvlFsXFQRSAbKwjX_sLFnFA",
  authDomain: "bit-wizards.firebaseapp.com",
  projectId: "bit-wizards",
  storageBucket: "bit-wizards.appspot.com",
  messagingSenderId: "851573876220",
  appId: "1:851573876220:web:d7c398f50bc45456f4be79",
  measurementId: "G-0Z5G3EXV79"
};
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/check-login", (req, res) => {
  console.log(req.body);
})

app.get("/register", (req, res) => {
  res.render("register.ejs");
});
var year;

app.post("/search", (req, res) => {
  console.log(req.body);
  const data = {
    yr: req.body.year
  };
  res.render("search.ejs", { yr: req.body.year});
});

app.get("/year-info", (req, res) => {
  res.render("register.ejs");
});

app.post("/check-register", (req, res) => {
  console.log(req.body);
})

app.get("/home", (req, res) => {
  res.render("homepage.ejs");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
