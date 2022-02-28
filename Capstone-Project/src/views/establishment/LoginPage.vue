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

      <div class="h-5/6 w-96 mx-auto block bg-inherit py-1.5 px-1.5 my-3">
        <div>
          <v-form @submit="onSubmit">
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
                <v-field name="establishmentID" v-slot="{ field }" :rules="isRequired">
                  <ion-label position="floating">Establishment ID</ion-label>
                  <ion-input v-bind="field" name="establishmentID"></ion-input>
                </v-field>
              </ion-item>
              <v-error-message name="establishmentID" class="text-red-600 tex-sm"/>
            </div>

            <div class="mt-1.5">
              <ion-item>
                <v-field name="password" v-slot="{ field }" :rules="isRequired">
                  <ion-label position="floating">Password</ion-label>
                  <ion-input
                    type="password"
                    v-bind="field"
                    name="password"
                  ></ion-input>
                </v-field>
              </ion-item>
              <v-error-message name="password" class="text-red-600"/>
            </div>

            <div class="text-right mt-2.5">
              <ion-button class="pr-2" color="secondary" fill="clear" @click="toForgotPassword"
                >Forgot Password?</ion-button
              >
            </div>

            <div class="text-center mt-5">
              <ion-button
                color="dark"
                class="w-3/5"
                shape="round"
                type="submit"
                @click="toHomePage"
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
                <ion-label>Sign in as<button class="text-blue-400" @click="toIndividual">Individual</button></ion-label>
              </div>
            </div>

          </v-form>

        </div>
      </div>

      <div class="text-right pr-12">
        <ion-text class="font-extrabold text-xl">TRA</ion-text>
        <ion-text class="font-extrabold text-xl text-sky-500">FEX</ion-text>
      </div>
      <div class="text-right pr-3">
        <ion-text class="text-lg">Contact Tracing App</ion-text>
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
  IonText,
  IonInput,
  IonButton,
  IonLabel,
} from "@ionic/vue";
import { defineComponent } from "vue";
import * as V from "vee-validate/dist/vee-validate";
import { defineRule} from "vee-validate/dist/vee-validate";

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonText,
    IonInput,
    IonButton,
    IonLabel,
    VField: V.Field,
    VForm: V.Form,
    VErrorMessage: V.ErrorMessage,
  },

  setup(){
    const onSubmit = (data:any) => {
      alert("SUBMITTED");
    }

    const isRequired = (value:any) =>{
      console.log("isRequired", value);
      if(!value){
        return "Required Field";
      }
      return true;
    };
    return{
      onSubmit,
      isRequired,
    };
  },

  methods: {
    toSignUp() {
      this.$router.push("/establishment-registration");
    },
    toForgotPassword(){
      this.$router.push("/change-password-page");
    },
    toIndividual(){
      this.$router.push("/individual-login");
    }
  },
});
</script>

<style scoped>
</style>