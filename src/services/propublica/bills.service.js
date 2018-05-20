import axios from 'axios';

export default {
  searchBills: (searchPhrase, offset) => {
    return axios.get(`/api/congress/bills/subjects/bills/search?searchPhrase=${searchPhrase}&offset=${offset}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },
  getRecent: ({congress, chamber, type, offset}) => {
    return axios.get(`/api/congress/bills/recent/${type}/${congress}/${chamber}?offset=${offset}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },


}