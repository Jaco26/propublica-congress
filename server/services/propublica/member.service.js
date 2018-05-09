const Propublica = require('./Propublica');

module.exports = {
  getListOfMembers: (congress, chamber) => {
    return Propublica().get(`/${congress}/${chamber}/members.json`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },

  getSpecificMember: (memberId) => {
    return Propublica().get(`/members/${memberId}.json`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },

  getNewMembers: () => {
    console.log('IN GET NEW MEMBERS');

    return Propublica().get(`/members/new.json`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },

  getCurrentMembersByStateOrDistrict: (chamber, state, district) => {
    let url;
    switch (chamber) {
      case 'house':
        url = `/members/${chamber}/${state}/${dstrict}/current.json`;
        break;
      case 'senate':
        url = `/members/${chamber}/${state}/current.json`;
        break;
      default:
        console.error('ERROR in getCurrentMembersByStateOrDistrict');
    }
    return Propublica().get(url)
      .then(response => response.data)
      .catch(err => console.log(err));
  },

  getMembersLeavingOffice: (congress, chamber) => {
    return Propublica().get(`/${congress}/${chamber}/members/leaving.json`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },

  getSpecificMembersVotePositions: (memberId) => {
    return Propublica().get(`/members/${memberId}/votes.json`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },

  compareTwoMembersVotePositions: (firstMemberId, secondMemberId, congress, chamber) => {
    return Propublica().get(`/members/${firstMemberId}/votes/${secondMemberId}/${congress}/${chamber}.json`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },

  compareTwoMembersBillSponsorships: (firstMemberId, secondMemberId, congress, chamber) => {
    return Propublica().get(`/members/${firstMemberId}/bills/${secondMemberId}/${congress}/${chamber}.json`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },

  getBillsSponsoredBySpecificMember: (memberId, type) => {
    return Propublica().get(`/members/${memberId}/bills/${type}.json`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },

  getQuarterlyOfficeExpensesForSpecificHouseMember: (memberId, year, quarter) => {
    return Propublica().get(`/members/${memberId}/office_expenses/${year}/${quarter}.json`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },

  getQuarterlyOfficeExpensesByCategoryForSpecificHouseMember: (memberId, category) => {
    return Propublica().get(`/members/${memberId}/office_expenses/category/${category}.json`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },

  getQuarterlyOfficeExprensesForSpecifiedCategory: (category, year, quarter) => {
    return Propublica().get(`/office_expenses/category/${category}/${year}/${quarter}.json`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },

}

