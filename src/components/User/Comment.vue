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

    <v-snackbar
      :timeout="5000"
      :color="color"
      multi-line
      v-model="snackbar"
      top
    > 
      Please enter a valid email
      <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { SUBMIT_COMMENT } from '@/store/modules/User/user-types'
export default {
  data () {
    return {
      snackbar: false,
      valid: false,
      email: '',
      message: '',
      emailRules: [
        val => !!val || 'Email is required',
        val => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val) || 'Must be valid Email'
      ]
    }
  },
  computed: {
    color () {
      return this.valid ? 'success' : 'error'
    }
  },
  methods: {
    ...mapActions('user', {
      submit: SUBMIT_COMMENT,
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
  }
}
</script>

<style>

</style>
