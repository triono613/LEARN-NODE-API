
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const mysql = require("mysql");
const axios = require('axios');
require("es6-promise").polyfill();
require("isomorphic-fetch");


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

const getBreeds = async () =>{
    try {
        // var bb = await axios.get('https://dog.ceo/api/breeds/list/all')
        
        const bb = await axios.get('https://api.github.com/repositories')

        bb.data.forEach( (val,idx )=> {  

            // console.log('idx= ', idx)
            
        }); 

        
    } catch (error) {
        // console.log(error)
    }
}

// getBreeds()




// const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
// fetchPromise.then(response => {

// console.log(response.json());

//     return response.json();
// }).then(people => {
//     console.log(people);
// });



// const getApi1 =  () =>{

  function getApi1(){
    try {
          // const getApi1() =>{
          const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
          fetchPromise
            .then(response => {
              return response.json();
            })
            // .then(dt => {
            //   var jtn = [{}];
            //   dt.forEach((val, i) => {
            //     jtn.push({ val: val });
            //   });
            // })
            .then( function(dt){
              // console.log('dt= ', dt);
              // const cc = JSON.stringify(dt);
              // console.log(cc);
              // return cc;
              
                // app.get("/api/v1/todos", (req, res) => {
                //   res.status(200).send({
                //     success: "true",
                //     message: "todos retrieved successfully",
                //     todos: dt
                //   });
                // });


            });
        } catch (error) {
    
    }




}

// console.log(getApi1()) ;

const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
fetchPromise
  .then(response => {
    return response.json();
  })
  .then( dt => {
// console.log("dt= ", dt[25]);
    dt.forEach((val,i) => {
        if( i == 25){
            //  console.log("val= ", val.name);
            //  console.log("i= ", i);
        } else {
            // console.log("x-x= ", val.name);
            //  console.log("x= ", i);
        }
    }); 
  });












app.get("/api/v1/todos", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "todos retrieved successfully",
    todos: getApi1()
  });
});