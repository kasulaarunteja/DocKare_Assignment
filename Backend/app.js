
const fs = require('fs')
const express = require('express');

const app = express();
const path = require('path');


let cors = require('cors');
let bodyParser = require('body-parser');
const { json } = require('body-parser');
app.use(bodyParser.json())
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get('/', (req, res) => {
    res.send('hello world')
  })


  app.post(`/add_question/:doc_id`, (req,res) => {
    let docs_data  = req.body;
    let name = req.params.doc_id
    console.log(docs_data);
    let data = JSON.stringify(docs_data);
    fs.writeFileSync(`files/${name}.json`, data)
  })


app.get('/data/:doc_id', (req,res) => {
    let docId = req.params.doc_id;
    fs.readFile(`files/${docId}.json`, (err,data) => {
        if(err) throw err;
        let ques_data = JSON.parse(data);
        console.log(req.params.doc_id);
        res.send(ques_data);
    });
})



app.get("/get_all_filename", (req,res) => {
  const directoryPath = path.join(__dirname, '/files');
  fs.readdir(directoryPath, function(err, files) {
    if(err){
      return console.log("unable to get directory" + err);
    }
    res.send(files);
  })
})



  

app.listen(8080, ()=>{
    console.log('listen in port no 8080')
})