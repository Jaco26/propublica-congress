import Vue from 'vue';
import Router from 'vue-router';

// User routes
import userRoutes from '@/router/user/user.routes'
// Propublica routes
import membersRoutes from '@/router/propublica/members.routes';
import billsRoutes from '@/router/propublica/bills.routes';
import votesRoutes from '@/router/propublica/votes.routes'
import committeesRoutes from '@/router/propublica/committees.routes'
import statementsRoutes from '@/router/propublica/statements.routes'

Vue.use(Router);

const router = new Router({
  routes: [
    userRoutes,
    membersRoutes,
    billsRoutes,
    statementsRoutes,
    committeesRoutes,
    votesRoutes,
  ],
});



export default router;