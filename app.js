const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const request = require("request-promise");  
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("es6-promise").polyfill();
require("isomorphic-fetch");






app.post("/api/v1/add2", (req, res) => {
        const access_token = "jix9nh0zvOQRSpPZj_83iW8B6SaU8Fj9m-J-";
        const options = {
              simple: false,
              method: "POST",
              responseType: "buffer",
              uri: "https://gorest.co.in/public-api/users",
              body: req.body ,
              json: true,
              dataType: "json",
              headers: {
                Authorization: "Bearer " + access_token // token
              }
        };

          request(options).then(function (response){    
                res.status(200).send({
                  success: "true",
                  message:
                    "method post new user to retrievedhttps://gorest.co.in/public-api/users ",
                  data: response.result
                });
      
      })
  .catch(function (err) { 
      console.log(err);
  })
});

  

app.get("/api/v1/todos", (req, res) => {
  
    let arr_dt = [];
    const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
    fetchPromise
      .then(response => {
        return response.json();
      })
      .then(function (dt) {

      dt.forEach((val, i) => {
            arr_dt.push(val);
         });
        
          res.status(200).send({
            success: "true",
            message:
              "get data from https://ghibliapi.herokuapp.com/people successfully",
            data: arr_dt
          });
      })
      .catch(error => console.log(error.message));
 
  
});


app.listen(8000, () => {
  console.log("Server is running at port 8000");
});
