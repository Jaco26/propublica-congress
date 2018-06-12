import axios from 'axios';

export default {
  getRecentVotes: ({chamber}) => {
    return axios.get(`/api/congress/votes/${chamber}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },
  getSpecificVote: ({ congress, chamber, rollCall, sessionNumber }) => {
    return axios.get(`/api/congress/votes/specific/${rollCall}/${sessionNumber}/${congress}/${chamber}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },
  /* You can get vote information in four categories: missed votes, party votes, 
   * lone no votes and perfect votes. Missed votes provides information about the 
   * voting attendance of each member of a specific chamber and congress. Party votes 
   * provides information about how often each member of a specific chamber and congress 
   * votes with a majority of his or her party. Lone no votes provides information lists 
   * members in a specific chamber and congress who were the only members to vote No on 
   * a roll call vote, and how often that happened. Perfect votes lists members in a specific
   * chamber and congress who voted Yes or No on every vote for which he or she was eligible. */
  getVotesByType: (voteType, congress, chamber) => {
    return axios.get(`/api/congress/votes/${voteType}/${congress}/${chamber}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },
  /*
   * You can get all votes for one or both chambers in a particular month, 
   * or all votes in a particular date range (fewer than 30 days). This 
   * request type has two URI structures. Either use a year and month combination 
   * or a range of two dates, which cannot exceed 30 days.
   */
  getVotesByDate: (chamber, year, month, stateDate, endDate) => {
    let url;
    if (startDate && endDate) {
      url = `/api/congress/votes/${stateDate}/${endDate}/${chamber}`;
    } else {
      url = `/api/congress/votes/${year}/${month}/${chamber}`;
    }
    return axios.get(url)
      .then(response => response.data)
      .catch(err => console.log(err));
  },
  // To get Senate votes on presidential nominations, use the following URI structure:
  getSenateNominationVotes: (congress) => {
    return axios.get(`/api/congress/votes/nominations/${congress}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },
  /**
   * Lawmakers, mostly in the House but also in the Senate, can make personal 
   * explanations for missed or mistaken votes in the Congressional Record. Unlike
   * the “Recent Personal Explanations” response, this response contains explanations
   * parsed to individual votes and have an additional category attribute describing
   * the general reason for the absence or incorrect vote. To get lists of recent 
   * personal explanation votes, use the following URI structure. This request returns
   * the 20 most recent results in the specified Congress, and supports paginated 
   * requests using an offset query string parameter based on multiples of 20.
   */
  getRecentPersonalVotesExplanations: ({congress}) => {    
    return axios.get(`/api/congress/votes/explanations/${congress}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },  
  getRecentPersonalExplanationsByCategory: (category, congress) => {
    return axios.get(`/api/congress/votes/${category}/explanations/${congress}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },
  


}