require("dotenv").config();
const express = require("express");
const port = process.env.DEV_PORT || 4000;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>hit /bfhl endpoint with a post request</h1>");
});

app.post("/bfhl", (req, res) => {
  const array = req.body.data;
  const returnObj = {
    is_success: true,
    user_id: "avijit_rana_13122002",
    email: "avijit@gmail.com",
    roll_number: 2011981126,
    odd_numbers: [],
    even_numbers:[],
    alphabets: [],
  };
  array.forEach((item) => {
    let num = parseInt(item);
    if (num) 
    {
      if(num%2 == 0)
      {
        returnObj.even_numbers.push(num);
      }
      else
      {
        returnObj.odd_numbers.push(num);
      }
    }
    else returnObj.alphabets.push(item.toUpperCase());
  });
  res.json(returnObj);
});

app.listen(port, (err) => {
  console.log(`Server is started in ${port}`);
});
