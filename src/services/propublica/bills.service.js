import axios from 'axios';

export default {
  searchBills: (searchPhrase, offset) => {
    return axios.get(`/api/congress/bills/subjects/bills/search?searchPhrase=${searchPhrase}&offset=${offset}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },
  getRecent: ({congress, chamber, type}) => {
    return axios.get(`/api/congress/bills/recent/${type}/${congress}/${chamber}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },


}