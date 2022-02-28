<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Scanner Page</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">ScannerPage</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="h-5/6 w-96 mx-auto block bg-inherit py-1.5 px-1.5 my-3">
      <qrcode-stream @decode="onDecode" :track="drawOutline" @init="onInit" ></qrcode-stream>
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

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { QrcodeStream } from 'vue3-qrcode-reader'

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    QrcodeStream,
  },
});
</script>

<style scoped>
</style>