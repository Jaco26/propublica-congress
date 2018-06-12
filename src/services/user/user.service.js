import axios from 'axios'

export default {
  submitComment: (body) => {
    return axios.post('/api/user/submit/comment', body)
      .then(response => response.data)
      .catch(err => console.log(err));
  }
}