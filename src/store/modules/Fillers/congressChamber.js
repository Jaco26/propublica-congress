export default {
  namespaced: true,
  state: {
    explanationCategories: [
      { title: 'voted-incorrectly', description: 'Voted yes or no by mistake' },
      { title: 'official-business', description: 'Away on official congressional business' },
      { title: 'ambiguous', description: 'No reason given' },
      { title: 'travel-difficulties', description: 'Travel delays and issues' },
      { title: 'personal	', description: 'Personal or family reason' },
      { title: 'claims-voted', description: 'Vote made but not recorded' },
      { title: 'medical', description: 'Medical issue for lawmaker (not family)' },
      { title: 'weather', description: 'Inclement weather' },
      { title: 'memorial', description: 'Attending memorial service' },
      { title: 'misunderstanding', description: 'Not informed of vote' },
      { title: 'leave-of-absence	', description: 'Granted leave of absence' },
      { title: 'prior-commitment', description: 'Attending to prior commitment' },
      { title: 'election-related', description: 'Participating in an election' },
      { title: 'military-service', description: 'Military service' },
      { title: 'other', description: 'Other' },
    ],
    billTypes: [
      { title: 'introduced', description: 'Get bills ordered by the date they were introduced' },
      { title: 'updated', description: 'Get bills ordered by the latest date they were updated' },
      { title: 'active', description: 'Get bills that have seen action beyond indtroduction and committee referral. Order them by the latest major action date.' },
      { title: 'passed', description: 'Get bills ordered by the date they were passed' },
      { title: 'enacted', description: 'Get bills ordered by the date they were enacted' },
      { title: 'vetoed', description: 'Get bills ordered by date they were vetoed' },
    ],
  },
  getters: {
    explanationCategories: state => state.explanationCategories,
    billTypes: state => state.billTypes,
    congressFunc: () => (earliestCongress) => {
      let currentCongress = 115
      let year1 = 2017;
      let year2 = 2018
      let resultArray = [];
      let offset = 1
      for (let i = currentCongress; i >= earliestCongress; i--) {
        let congressObj = {
          title: i.toString(),
          description: `In session from ${year1}-${year2}`
        };
        resultArray.push(congressObj);
        year1 -= 2;
        year2 -= 2;
      }
      return resultArray;
    },
  }
}