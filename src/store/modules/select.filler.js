export default {
  namespaced: true,
  state: {
    congress: [
      { title: '115', hint: 'In session from 2017-2018' },
      { title: '114', hint: 'In session from 2015-2016' },
      { title: '113', hint: 'In session from 2013-2014' },
      { title: '112', hint: 'In session from 2011-2012' },
      { title: '111', hint: 'In session from 2009-2010' },
      { title: '110', hint: 'In session from 2007-2008' },
      { title: '109', hint: 'In session from 2005-2006' },
      { title: '108', hint: 'In session from 2003-2004' },
      { title: '107', hint: 'In session from 2001-2002' },
      { title: '106', hint: 'In session from 1999-2000' },
      { title: '105', hint: 'In session from 1997-1998' },
    ],
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
    
  }
}