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
            <label class='block capitalize tracking-wide text-gray-700 text-m font-bold' >Login</label>
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

    <ion-content :fullscreen="true" class="">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">RegistrationPage</ion-title>
        </ion-toolbar>
      </ion-header>
<div>
        <div class="h-5/6 w-96 mx-auto block bg-inherit py-1.5 px-1.5 my-3">
          <div>
                  <div>
              <ion-text class="text-2xl font-extrabold"
                >Create your account</ion-text
              >
            </div>
            <div>
              <ion-text class="text-m font-mediumd"
                >Please fill the information needed to create account.</ion-text
              >
            </div>

            <div class="mt-2">
              <ion-item>
                <ion-label position="floating">Contact Number</ion-label>
                <ion-input placeholder="Enter Value"></ion-input>
              </ion-item>
            </div>

            <div class="mt-1.5">
              <ion-item>
                <ion-label position="fixed">Purok</ion-label>
                <ion-input placeholder="Enter Value"></ion-input>
              </ion-item>
            </div>

            <div class="mt-1.5">
              <ion-item>
                <ion-label position="fixed">Brgy</ion-label>
                <ion-input placeholder="Enter Value"></ion-input>
              </ion-item>
            </div>

            <div class="mt-1.5">
              <ion-item>
                <ion-label>Municipality/City</ion-label>
                <ion-select placeholder="Select City">
                  <ion-select-option value="O">Ozamiz City</ion-select-option>
                  <ion-select-option value="C">Clarin</ion-select-option>
                  <ion-select-option value="T">Tudela</ion-select-option>
                </ion-select>
              </ion-item>
            </div>

            <div class="mt-1.5">
              <ion-item>
                <ion-label>Province</ion-label>
                <ion-select placeholder="Select Province">
                  <ion-select-option value="O"
                    >Misamis Occidental</ion-select-option
                  >
                </ion-select>
              </ion-item>

              <div class="mt-1.5">
                <ion-item>
                  <ion-label>Gender</ion-label>
                  <ion-select placeholder="Select One">
                    <ion-select-option value="f">Female</ion-select-option>
                    <ion-select-option value="m">Male</ion-select-option>
                    <ion-select-option value="lgbt">LGBTQ+</ion-select-option>
                    <ion-select-option value="pnts"
                      >Prefer not to say</ion-select-option
                    >
                  </ion-select>
                </ion-item>
              </div>

              <div class="mt-1.5">
                <ion-item>
                  <ion-label position="fixed">Age</ion-label>
                  <ion-input type="number"></ion-input>
                </ion-item>
              </div>

              <div class="mt-1.5">
                <ion-item>
                  <ion-label position="fixed">Password</ion-label>
                  <ion-input type="password"></ion-input>
                </ion-item>
              </div>

              <div class="mt-5">
                <ion-label
                  >By clicking sign up, you agree to our
                  <button class="text-blue-700" @click="toPrivacyPolicy">
                    Privacy Policy.
                  </button></ion-label
                >
              </div>
            </div>

            <div class="text-center">
              <ion-button color="dark" class="w-3/5" shape="round" type="submit"
                >Sign Up</ion-button
              >
            </div>

            <div class="text-center">
              <div class="text-center">
                <div class="mt-5">
                  <ion-label
                    >Already have an account?
                    <button class="text-blue-400" @click="toSignIn">Sign in</button></ion-label
                  >
                </div>
              </div>
            </div>

            <div class="text-center mt-7">
              <ion-text>━━━━━ OR ━━━━━━ </ion-text>
            </div>

            <div class="text-center mt-7">
              <div class="mt-5">
                <ion-label
                  >Sign up as
                  <button class="text-blue-400" @click="toLoginIndividual">Individual</button></ion-label
                >
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

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },

  methods: {
    toSignIn() {
      this.$router.push("/establishment-login");
    },
    toLoginIndividual() {
      this.$router.push("/individual-regstration");
    },
    toPrivacyPolicy(){
      this.$router.push("/privacy-policy-page");
    },
  },
});
</script>

<style scoped>
</style>