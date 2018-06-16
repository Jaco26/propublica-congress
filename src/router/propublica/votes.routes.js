// Votes componenets
import Votes from '@/components/Votes/Votes';
import Explanations from '@/components/Votes/Explanations';
import SpecificVote from '@/components/Votes/SpecificVote';
import RecentVotes from '@/components/Votes/RecentVotes'

export default {
  path: '/votes',
  name: 'votes',
  component: Votes,
  redirect: '/votes/recent',
  children: [
    // {
    //   path: 'explanations',
    //   name: 'explanations',
    //   component: Explanations,
    // },
    {
      path: 'recent',
      name: 'recentVotes',
      component: RecentVotes,
    },
    {
      path: 'vote/:rollCall/:sessionNumber/:chamber/:congress',
      name: 'specificVote',
      component: SpecificVote
    },
  ]
}
