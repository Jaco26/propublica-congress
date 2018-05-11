import axios from 'axios';

export default {
  getMemberList: (congress, chamber) => {
    return axios.get(`/api/congress/members/list/${congress}/${chamber}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },
}

