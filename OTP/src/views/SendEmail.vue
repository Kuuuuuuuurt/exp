<template>
  <div>email</div>
  <div><input type="text" placeholder="email" v-model="email" /></div>
  <div><button @click="send">send email</button></div>
</template>
<script>
import app from "../firebase/index";
import {
  getAuth,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async send() {
      const email = this.$data.email;
      console.log(email);

      const auth = getAuth(app);
      await sendPasswordResetEmail(auth, email)
        .then(() => {
          // Password reset email sent!
          console.log("Password reset email sent!");
          // ..
        })
        .catch((error) => {
          console.log(error);
          // ..
        });

      sendEmailVerification(auth.currentUser).then(() => {
        // Email verification sent!
        console.log("Email verification sent!")
        // ...
      });
    },
  },
};
</script>