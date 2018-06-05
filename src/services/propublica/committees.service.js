import axios from 'axios';

export default {
  getCommitteeList: ({congress, chamber}) => {
    return axios.get(`/api/congress/committees/list/${congress}/${chamber}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },
  getSpecificCommittee: ({congress, chamber, committeeId}) => {
    return axios.get(`/api/congress/committees/${congress}/${chamber}/${committeeId}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },
  getSpecificCommitteeHearings: ({congress, chamber, committeeId}) => {
    return axios.get(`/api/congress/committees/hearings/${congress}/${chamber}/${committeeId}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  }
}

