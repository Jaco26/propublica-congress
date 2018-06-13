<template>
  <div>
    <blockquote class="blockquote">
      Please send feedback on what you like or dislike about <i>KnowThyCongress</i>.
      I will work to address any concerns and I'd love to hear any ideas about what could make
      this site better!
    </blockquote>
    <v-form @submit.prevent="submitComment">
      <v-text-field 
        class="grey lighten-3"
        v-model="email"
        :rules="emailRules"
        label="Email"
        required  
      ></v-text-field>
      <v-text-field
        class="grey lighten-3 my-2"
        multi-line
        v-model="message"
      ></v-text-field>
      <v-btn type="submit">Submit</v-btn>
    </v-form>

    <!-- TODO: make snackbar implementation better (use the code) -->

    <v-snackbar
      :timeout="5000"
      color="error"
      multi-line
      v-model="snackbar"
      top
    > 
      Please enter a valid email!
      <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-snackbar
      :timeout="5000"
      color="success"
      multi-line
      v-model="successSnackbar"
      top
    > 
      Your message has been sent!
      <v-btn dark flat @click.native="successSnackbar = false">Close</v-btn>
    </v-snackbar>



  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import { SUBMIT_COMMENT, RESET_SUBMISSION_STATUS } from '@/store/modules/User/user-types'
export default {
  data () {
    return {
      snackbar: false,
      valid: false,
      email: '',
      message: '',
      emailRules: [
        val => !!val || 'Email is required',
        val => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val) || 'Must be valid Email',
      ]
    }
  },
  computed: {
    ...mapState('user', {
      submissionStatus: state => state.comment.submissionStatus,
      loading: state => state.comment.loading,
    }),
    successSnackbar () {
      return this.submissionStatus == 'OK' && !this.loading ? true : false;
    },
  },
  methods: {
    ...mapActions('user', {
      submit: SUBMIT_COMMENT,
    }),
    ...mapMutations('user', {
      resetStatus: RESET_SUBMISSION_STATUS,
    }),
    submitComment () {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email) && this.message) {
        const body = {
          email: this.email,
          message: this.message
        }
        this.submit(body);
      } else {
        this.valid = false;
        this.snackbar = true
      }
    }
  },
  beforeRouteLeave (to, from, next) {
    this.resetStatus();
    next();
  }
}
</script>

<style>

</style>
