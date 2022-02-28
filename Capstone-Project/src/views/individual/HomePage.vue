<template>
  <ion-page>
    <ion-header :translucent="true">
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">HomePage</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- <div class="h-5/6 w-96 mx-auto block bg-inherit py-1.5 px-1.5 my-3">
        <div class="w-3/5 mx-auto block drop-shadow-lg">
          <img
            src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
          />
          <div class="text-center mt-2">
            <ion-label>fe4s-fd32-fdg4-dfvw</ion-label>
          </div>
        </div>

        <div class="mt-5 flex">
          <div class="break-all">
            <ion-text class="block w-32">Phone Number:</ion-text>
            <ion-text class="block w-32">Full Name:</ion-text>
            <ion-text class="block w-32 h-16">Address:</ion-text>
            <ion-text class="block w-32">Gender:</ion-text>
            <ion-text class="block w-32">Age:</ion-text>
          </div>

          <div>
            <ion-text class="block w-52">09099991320</ion-text>
            <ion-text class="block w-52">Kurt Vonn Alde</ion-text>
            <ion-text class="block w-52 min-h-20"
              >Manggahon Tinago Ozamiz City, Misamis Occidental Philippines
              7021</ion-text
            >
            <ion-text class="block w-52">Male</ion-text>
            <ion-text class="block w-52">22</ion-text>
          </div>
        </div>


      </div> -->
        <div class="h-screen w-screen bg-gray-200">
	<!-- container -->
    <SideMenu/>

<div>gfdgd p[ush practiccceee</div>
</div>


      <!-- <div class="text-right pr-12">
        <ion-text class="font-extrabold text-xl">TRA</ion-text>
        <ion-text class="font-extrabold text-xl text-sky-500">FEX</ion-text>
      </div>
      <div class="text-right pr-3">
        <ion-text class="text-lg">Contact Tracing App</ion-text>
      </div> -->
      
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
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import SideMenu from '../../components/SideMenu.vue'

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    SideMenu
  },
  methods:{
    logout(){
        this.$router.push("/individual-login");
    },
  }
});
</script>

<style scoped>
</style>