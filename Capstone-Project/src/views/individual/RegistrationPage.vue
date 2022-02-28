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
        <div class="bg-gray-200 min-h-screen font-mono">
        <div class="container mx-auto">
            <div class="inputs w-full max-w-2xl p-6 mx-auto">
                <h2 class="text-2xl text-gray-900">Create an Account</h2>
                <form class="mt-6 border-t border-gray-400 pt-4">
                    <div class='flex flex-wrap -mx-3 mb-6'>
                        <div class='w-full md:w-full px-3 mb-6'>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>Phone Number</label>
                            <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' placeholder='Enter Number'  required>
                        </div>
                        <div class='w-full md:w-full px-3 mb-6'>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>pick your Province</label>
                            <div class="flex-shrink w-full inline-block relative">
                                <select class="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                                    <option>choose ...</option>
                                    <option>Misamis Occidental</option>
                                </select>
                                <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div class='w-full md:w-full px-3 mb-6'>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>pick your Municipality</label>
                            <div class="flex-shrink w-full inline-block relative">
                                <select class="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                                    <option>choose ...</option>
                                    <option>Ozamiz City</option>
                                    <option>Clarin</option>
                                    <option>Tudela</option>
                                </select>                                

                               <div class="flex items-center justify-between mt-4">
                                <div class='w-full md:w-1/2 px-1 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Enter Baranggay</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required>
                                </div>
                                <div class='w-full md:w-1/2 px-1 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Enter Purok</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required>
                                </div>
                            </div>
                                
                                <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div class="personal w-full border-t border-gray-400 pt-4">
                            <h2 class="text-2xl text-gray-900">Personal info:</h2>
                            <div class="flex items-center justify-between mt-4">
                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >first name</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required>
                                </div>
                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >last name</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required>
                                </div>
                            </div>

                            <div class="flex items-center justify-between mt-4">
                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >middle name</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required>
                                </div>
                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >suffix</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required>
                                </div>
                            </div>


                              <div class="flex items-center justify-between mt-4">
                                <div class='w-full md:w-1/2 px-3 mb-3'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold' >Age</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required>
                                </div>
                                <div class='w-full md:w-1/2 px-3 mb-3'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold' >Gender</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required>
                                </div>
                            </div>
                             <div>
                            <label class='block tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>By clicking Sign up, you agree to <a href="/privacy-policy-page" class="text-sky-600">Privay Policy</a></label>
                            </div>
                            <div class="flex justify-end">
                                <button class="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="submit">Sign up</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

        <!-- <div class="text-right pr-12">
          <ion-text class="font-extrabold text-xl">TRA</ion-text>
          <ion-text class="font-extrabold text-xl text-sky-500">FEX</ion-text>
        </div>
        <div class="text-right pr-3">
          <ion-text class="text-lg">Contact Tracing App</ion-text>
        </div> -->
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
      this.$router.push("/individual-login");
    },
    toPrivacyPolicy(){
      this.$router.push("/privacy-policy-page");
    },
    toEstablishment(){
      this.$router.push("/establishment-registration");
    },
    toHomePage(){
      this.$router.push("");
    }
  },
});
</script>

<style scoped>
</style>