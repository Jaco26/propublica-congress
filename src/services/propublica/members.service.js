import axios from 'axios';

export default {
  getMemberList: (congress, chamber) => {
    return axios.get(`/api/congress/members/list/${congress}/${chamber}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },
  getSpecificMember: (memberId) => {
    return axios.get(`/api/congress/members/${memberId}`)
      .then(response => response.data)
      .catch(err => conosle.log(err));
  },
  getBillsCosponsoredBySpecificMember: (memberId) => {
    const type = 'cosponsored'
    return axios.get(`/api/congress/members/bills/${memberId}/${type}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },
  getSpecificMembersVotePositions: (memberId) => {
    return axios.get(`/api/congress/members/${memberId}/votes`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },
}

