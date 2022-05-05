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
  <button @click="otpSend">Resend OTP</button>
</template>
<script>
import app from "../firebase/index";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
export default {
  data() {
    return {
      phNo: "",
      otp: "",
      appVerifier: "",
      confirmation: '',
    };
  },
  methods: {
    async sendOtp() {
      if (this.$data.phNo.length == 9) {
        alert("Invalid Phone Number Format !");
      } else {
        let countryCode = "+63";
        let phoneNumber = countryCode + this.$data.phNo;
        console.log(phoneNumber);
        const auth = getAuth(app);
        window.recaptchaVerifier = new RecaptchaVerifier(
          "recaptcha-container",
          {
            size: "normal",
            callback: () => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              // ...
            },
          },
          auth
        );

        const appVerifier = window.recaptchaVerifier;
        console.log(appVerifier);

        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
          .then((confirmationResult) => {
            console.log(confirmationResult);
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            console.log(confirmationResult);
            const value = prompt("message")
            console.log(value)
            alert("type the code below");
            this.$data.otp = value;
            
            // ...
          })
          .catch((error) => {
            // Error; SMS not sent
            console.log(error);
            alert("Error ! SMS not sent");
            // ...
          });
      }
    },

    async initReCaptcha() {},

    verifyOtp() {
      const code = this.$data.otp;
      window.confirmationResult
        .confirm(code)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(user);

          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          console.log(error);
          // ...
        });
    },
    async otpSend(){
      const value = await confirm("message")
      if(value){
    // do the thing needing confirming
     const val = prompt("message")
     if(val == "" | val == null){
       this.otpSend();
     }
     else{
       console.log(val)
     }

}else{
    this.otpSend();
}

     

    }
  },
  created() {
    this.initReCaptcha();
  },
};
</script>