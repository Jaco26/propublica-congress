import axios from 'axios';

export default {
  getMemberList: (congress, chamber) => {
    return axios.get(`/api/congress/members/list/${congress}/${chamber}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },

  bookmarkMember: (member) => {
    return axios.post(`/api/database/bookmark`, member)
      .then()
      .catch(err => console.log(err));
  },

  getBookmarkedMembers: () => {
    return axios.get(`/api/database/bookmark`)
      .then(response => response.data)
      .catch(err => console.log(err));
  }

}

