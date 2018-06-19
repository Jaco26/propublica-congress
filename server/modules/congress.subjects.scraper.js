// !!!!!!!!!!!!!!!!!!!!!!!!!!! *********************** ################### ////
///////// ONLY RUN ONCE TO GET BILL SUBJECT JSON FROM congress.gov ///////////
// !!!!!!!!!!!!!!!!!!!!!!!!!!! *********************** ################### // 
const cheerio = require('cheerio'); 
const axios = require('axios');
const fs = require('fs');

let billSubjects = [];

axios.get('https://www.congress.gov/browse/legislative-subject-terms/115th-congress')
  .then(response => {
    let $ = cheerio.load(response.data);
    const subjectsLis = $('.margin7').children();
    subjectsLis.each( (i, el) => {
      billSubjects.push({
        subject: $(el).text()
      });
    }); 
    fs.writeFile('congress115-subjects.json', JSON.stringify(billSubjects, null, 4), (err) => {
      if(err){
        console.log(err);
      } else {
        console.log('File successfully written');
      }
    })
  }).catch(err => {
    throw err
});



