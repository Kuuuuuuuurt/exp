<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <div>
    <aside
      class="flex lg:flex-col lg:items-center text-gray-700 shadow h-full"
    >
      <!-- Side Nav Bar-->


      <ul class="flex w-min absolute top-0 right-0">
        <!-- Items Section -->
     
        <li class="hover:bg-gray-100 w-20 lg:w-full ">
          <a
            href="/individual-regstration"
            class="
              h-16
              px-6
              flex flex
              justify-center
              items-center
              lg:w-full
              focus:text-orange-500
              text-blue-400
              capitalize
            "
          >
              <label class='block capitalize tracking-wide text-gray-700 text-m font-bold' >register</label>
          </a>
        </li>

        <li class="hover:bg-gray-100">
          <a
            href="."
            class="
              h-16
              px-6
              flex flex
              justify-center
              items-center
              lg:w-full
              focus:text-orange-500
            "
          >
             <label class='block capitalize tracking-wide text-gray-700 text-m font-bold' >about</label>
          </a>
        </li>

      </ul>

     
    </aside>
  </div>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">LoginPage</ion-title>
        </ion-toolbar>
      </ion-header>
<div>
      <div class="h-5/6 w-96 mx-auto block bg-inherit py-1.5 px-1.5 my-3 ">
        <div>
          <div>
            <ion-text class="text-2xl font-extrabold"
              >Login your account</ion-text
            >
          </div>
          <div>
            <ion-text class="text-m font-mediumd"
              >Please sign in to continue</ion-text
            >
          </div>
          <div class="mt-9">
            <ion-item>
              <ion-label position="floating">Mobile Number</ion-label>
              <ion-input></ion-input>
            </ion-item>
          </div>

          <div class="mt-1.5">
            <ion-item>
              <ion-label position="floating">Password</ion-label>
              <ion-input type="password"></ion-input>
            </ion-item>
          </div>

          <div class="text-right mt-2.5">
            <ion-button class="pr-2" color="secondary" fill="clear" @click="btnForgotPassword"
              >Forgot Password?</ion-button
            >
          </div>

          <div class="text-center mt-5">
            <ion-button color="dark" class="w-3/5" shape="round" type="submit" @click="toHomePage"
              >Login</ion-button
            >
          </div>

          <div class="text-center">
           <div class="mt-5">
                <ion-label>New user?<button class="text-blue-400" @click="toSignUp">Sign up</button></ion-label>
              </div>
          </div>

          <div class="text-center mt-7">
            <ion-text>━━━━━ OR ━━━━━━ </ion-text>
          </div>

          <div class="text-center mt-7">
          <div class="mt-5">
                <ion-label>Sign in as <button class="text-blue-400" @click="toEstablishmentLogin">Establishment</button></ion-label>
              </div>
          </div>
        </div>
      </div>

      <div class="text-right pr-12">
        <ion-text class="font-extrabold text-xl">TRA</ion-text>
        <ion-text class="font-extrabold text-xl text-sky-500">FEX</ion-text>
      </div>
      <div class="text-right pr-3">
        <ion-text class="text-lg">Contact Tracing App</ion-text>
      </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  alertController,
} from "@ionic/vue";
import { defineComponent } from "vue";
//import PublicSideMenu from '../../components/PublicSideMenu.vue'


export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    //PublicSideMenu
  },

 

  methods:{
    toSignUp(){
      this.$router.push("/individual-regstration");
    },
    toHomePage(){
      this.$router.push("/individual-home");
    },
    toEstablishmentLogin(){
      this.$router.push("/establishment-login");
    },
    btnForgotPassword(){
      this.$router.push("/change-password-page");
    }
  }
});
</script>

<style scoped>
</style>