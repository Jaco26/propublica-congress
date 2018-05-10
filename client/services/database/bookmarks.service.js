import axios from 'axios';

export default {
  bookmarkMember: (member) => {
    return axios.post(`/api/database/members`, member)
      .then(response => response)
      .catch(err => console.log(err));
  },

  getBookmarkedMembers: () => {
    return axios.get(`/api/database/members`)
      .then(response => response.data)
      .catch(err => console.log(err));
  }

}