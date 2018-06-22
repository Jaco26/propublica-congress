// Votes componenets
import Votes from '@/components/Votes/Votes';
import Explanations from '@/components/Votes/Explanations';
import SpecificVote from '@/components/Votes/SpecificVote';
import RecentVotes from '@/components/Votes/Recent/RecentVotes'
import House from '@/components/Votes/Recent/House'
import Senate from '@/components/Votes/Recent/Senate'
import Both from '@/components/Votes/Recent/Both'

export default {
  path: '/votes',
  name: 'votes',
  component: Votes,
  redirect: '/votes/recent',
  children: [
    {
      path: 'explanations',
      name: 'explanations',
      component: Explanations,
    },
    {
      path: 'recent',
      name: 'recentVotes',
      component: RecentVotes,
      redirect: '/votes/recent/house',
      children: [
        {
          path: 'house',
          name: 'recentHouseVotes',
          component: House,
        },
        {
          path: 'senate',
          name: 'recentSenateVotes',
          component: Senate,
        },
        {
          path: 'both-chambers',
          name: 'recentVotesBothChambers',
          component: Both,
        },
      ]
    },
    {
      path: 'vote/:rollCall/:sessionNumber/:chamber/:congress',
      name: 'specificVote',
      component: SpecificVote
    },
  ]
}

