<template>
  <div>OTP</div>
  <div>
    +63<input type="number" v-model="phNo" placeholder="Phone Number" />
  </div>
  <div><button id="sign-in-button" @click="sendOtp">Get OTP</button></div>
  <div id="recaptcha-container"></div>
  <br />
  <input type="number" v-model="otp" placeholder="OTP" />
  <button @click="verifyOtp">Verify</button><br />
  <button @click="sendOtp()">Resend OTP</button>
</template>
<script>
import app from "../firebase/index";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier
} from "firebase/auth";
export default {
  data() {
    return {
      phNo: "",
      otp: "",
      appVerifier: "",
    };
  },
  methods: {
    sendOtp() {
      if (this.$data.phNo.length == 9) {
        alert("Invalid Phone Number Format !");
      } else {
        let countryCode = '+63';
        let phoneNumber = countryCode + this.$data.phNo;
        console.log(phoneNumber);
        const auth = getAuth(app);
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {'size': 'normal',
  'callback': () => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    // ...
  },}, auth);

  
        const appVerifier = window.recaptchaVerifier;
        console.log(appVerifier)

    

        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      console.log(confirmationResult)
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      console.log(confirmationResult)
      alert("type the code below")
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      console.log(error)
      alert('Error ! SMS not sent')
      // ...
    });
      }
    },

    async initReCaptcha() {
    },
  },
  created() {
    this.initReCaptcha();
  },
};
</script>