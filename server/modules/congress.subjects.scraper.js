// !!!!!!!!!!!!!!!!!!!!!!!!!!! *********************** ################### /////
///////// ONLY RUN ONCE TO GET BILL SUBJECT JSON FROM congress.gov ////////////
///////// SET UP CRON JOB LATER TO KEEP CURRENT //////////////////////////////
// !!!!!!!!!!!!!!!!!!!!!!!!!!! *********************** ################### // 
const cheerio = require('cheerio'); 
const axios = require('axios');
const pool = require('./pool');

const bigOlScraperDatabaseInserterMessyFunctionGoodtime = () => {

  axios.get('https://www.congress.gov/browse/legislative-subject-terms/115th-congress')
    .then(response => {
      let billSubjects = [];
      let $ = cheerio.load(response.data);
      const subjectsLis = $('.margin7').children();
      subjectsLis.each((i, el) => {
        billSubjects.push({
          subject: $(el).text()
        });
      });

      let parsedSubjects = billSubjects.reduce((a, b) => {
        let name = b.subject.slice(0, b.subject.indexOf('[')).trim();
        let urlName = name.split(' ').map(word => word.toLowerCase().match(/\w/g).join('')).join('-');        
        let numberOfBills = Number(b.subject.match(/\d/g).join(''));
        let subjectObj = {
          name,
          urlName,
          numberOfBills,
        }
        a.push(subjectObj);
        return a;
      }, []);

      parsedSubjects.forEach(subject => {
        const { name, urlName, numberOfBills } = subject;
        const sqlText = `INSERT INTO bill_subjects (name, url_name, number_of_bills)
        VALUES($1, $2, $3);`;
        pool.query(sqlText, [name, urlName, numberOfBills])
          .then(result => {
            console.log('**** SUCCESS ****');
          })
          .catch(err => {
            console.log('#### ERROR ####', err);
          });
      });
    }).catch(err => {
      throw err
    });
}

module.exports = bigOlScraperDatabaseInserterMessyFunctionGoodtime;

