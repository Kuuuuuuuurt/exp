<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
         <SideMenu/>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">LoginPage</ion-title>
        </ion-toolbar>
      </ion-header>
     
        
         <div>
        <div class="h-5/6 w-96 lg:w-auto mx-auto block bg-inherit py-1.5 px-1.5 my-3">
          <div class="text-center">
            <ion-text class="text-2xl font-extrabold"
              >Health Declaration Form</ion-text
            >
          </div>
          <div>
            <ion-text
              class="
                text-sm
                font-mediumd
                text-justify
                tracking-tighter
                indent-4
              "
              >Tungod nga gisinati sa atong nasud ang COVID-19 pandemic,
              gihatagan namo ug dakong pagtagad ang maayong panglawas sa among
              mga empleyado, miyembro ug mga kliyente. Tungod ari among giawhag
              ang tanan mubisita sa maong establisyemento nga ihatag ang mga
              gipangayong impormasyon sa ubos.</ion-text
            >
          </div>

          <div class="mt-2">
            <ion-item>
              <ion-label position="floating">Mobile Number</ion-label>
              <ion-input placeholder="Enter Value"></ion-input>
            </ion-item>
          </div>

          <div class="mt-1.5">
            <ion-item>
              <ion-label position="fixed">First Name</ion-label>
              <ion-input placeholder="Enter Value"></ion-input>
            </ion-item>
          </div>

          <div class="mt-1.5">
            <ion-item>
              <ion-label position="fixed">Middle Name</ion-label>
              <ion-input placeholder="Optional"></ion-input>
            </ion-item>
          </div>

          <div class="mt-1.5">
            <ion-item>
              <ion-label position="fixed">Last Name</ion-label>
              <ion-input placeholder="Enter Value"></ion-input>
            </ion-item>
          </div>

          <div class="mt-1.5">
            <ion-item>
              <ion-label position="fixed">Suffix</ion-label>
              <ion-input placeholder="Optional"></ion-input>
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

            <div class="mt-5">
              <ion-label>1. Usa ka ba ka frontliner?</ion-label>

              <ion-item>
                <ion-label>Tubag</ion-label>
                <ion-select placeholder="Select Answer">
                  <ion-select-option value="O">OO</ion-select-option>
                  <ion-select-option value="D">Dili</ion-select-option>
                </ion-select>
              </ion-item>
            </div>

            <div class="mt-3">
              <ion-label
                >2. Sa miaging 14 ka adalaw, nakasinati ba ka ug ubo, hilanat,
                sip-on, sakit sa tutunlan, lawasm ulo; kalisod sa pagginhawa o
                kawad-an sa panimhot ug panlasa?</ion-label
              >

              <ion-item>
                <ion-label>Tubag</ion-label>
                <ion-select placeholder="Select Answer">
                  <ion-select-option value="O">OO</ion-select-option>
                  <ion-select-option value="W">Wala</ion-select-option>
                </ion-select>
              </ion-item>
            </div>

            <div class="mt-3">
              <ion-label
                >3. Sa miaging 14 ka adlaw, naka-inkwentro ka ba ug tao nga
                naa’y tyansa oo kumpir madong naa’y COVID-19?</ion-label
              >

              <ion-item>
                <ion-label>Tubag</ion-label>
                <ion-select placeholder="Select Answer">
                  <ion-select-option value="O">OO</ion-select-option>
                  <ion-select-option value="W">Wala</ion-select-option>
                </ion-select>
              </ion-item>
            </div>

            <div class="mt-3">
              <ion-label
                >4. Sa miaging 14 ka adlaw, naa ba’y hapit nga naingkwentro nga
                naa’y tyansa o kumpirmadong naa’y COVID-19?</ion-label
              >

              <ion-item>
                <ion-label>Tubag</ion-label>
                <ion-select placeholder="Select Answer">
                  <ion-select-option value="O">OO</ion-select-option>
                  <ion-select-option value="W">Wala</ion-select-option>
                </ion-select>
              </ion-item>
            </div>

            <div class="mt-3">
              <ion-label
                >5. Sa miaging 14 ka adlaw, gikan ka ba sa laing nasud kung asa
                ka nagtrabaho o nibisita?</ion-label
              >

              <ion-item>
                <ion-label>Tubag</ion-label>
                <ion-select placeholder="Select Answer">
                  <ion-select-option value="O">OO</ion-select-option>
                  <ion-select-option value="W">Wala</ion-select-option>
                </ion-select>
              </ion-item>
            </div>

            <div class="text-center mt-4">
              <ion-text class="text-m font-extrabold"
                >Deklarasyon ug Data Privacy Form</ion-text
              >
            </div>

            <div>
              <ion-label class="text-sm"
                >Akong gikumpirma nga ang impormasyon nga akong gihatag sa kay
                tinuod ug kompleto. Nasabtan nako nga ang panghatag ug dili
                sakto o dili tinuod nga impormasyon kay pwede masilotan alang sa
                mga balaod sa Pilipinas.</ion-label
              >
            </div>

            <div>
              <ion-label class="text-sm mt-2"
                >Gitugtan nako ang pagkuha ani nga mga impormasyon sa ubang
                ahensiya nga nag-atiman sa public health authorities nga naay
                koneksyon sa mga protocol sa COVID-19 alinsunod sa Data Privacy
                Act.</ion-label
              >
            </div>

            <div class="mt-1">
              <input type="checkbox" />
              <ion-label class="ml-2"
                >Akong gitugtan ug kumpirma ang pagkuha sa akong
                impormasyon.</ion-label
              >
            </div>

            <div class="mt-1">
              <ion-button color="dark" class="w-3/5" type="submit"
                >Submit Answer</ion-button
              >
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
} from "@ionic/vue";
import { defineComponent } from "vue";
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
});
</script>

<style scoped>
</style>