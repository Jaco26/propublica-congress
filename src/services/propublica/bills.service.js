import axios from 'axios';

export default {
  searchBills: ({query, offset = 0}) => {
    return axios.get(`/api/congress/bills/subjects/bills/search?searchPhrase=${query}&offset=${offset}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },
  getRecent: ({congress, chamber, type, offset}) => {
    return axios.get(`/api/congress/bills/recent/${type}/${congress}/${chamber}?offset=${offset}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },
  getUpcoming: ({chamber, offset}) => {
    return axios.get(`/api/congress/bills/upcoming/${chamber}?offset=${offset}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },
  getSpecificBill: ({billId}) => {
    return axios.get(`/api/congress/bills/specific/${billId}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  }



}