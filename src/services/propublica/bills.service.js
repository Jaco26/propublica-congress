import axios from 'axios';

export default {
  searchBills: ({phrase, offset}) => {
    return axios.get(`/api/congress/bills/subjects/bills/search?searchPhrase=${phrase}&offset=${offset}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },
  getRecent: ({congress, chamber, type, offset}) => {
    return axios.get(`/api/congress/bills/recent/${type}/${congress}/${chamber}?offset=${offset}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },
  getSpecificBill: ({billId, congress}) => {
    return axios.get(`/api/congress/bills/specific/${billId}/${congress}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  }



}