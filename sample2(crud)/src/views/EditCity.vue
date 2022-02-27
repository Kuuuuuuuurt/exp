<template>
  <div>
    <h2>Edit City</h2>

    <form @submit.prevent="updateCity">
      <div><input type="text" placeholder="City Name" v-model="cityInfo.name" /></div>
      <div><input type="text" placeholder="Province" v-model="cityInfo.province" /></div>
      <div><input type="text" placeholder="Country" v-model="cityInfo.country" /></div>
      <div><input type="submit" /></div>
    </form>
  </div>
</template>

<script>
import citiesColRef from "../firebase/db/cities";
import { getDoc, doc, setDoc } from "firebase/firestore";
export default {
  data() {
    return {
      selectedCity: {},
      cityId: null,
      docRef: null,
      cityInfo: {
        name: null,
        province: null,
        country: null,
      },
    };
  },

  methods: {
    async getCity() {
      let cirtyRef = doc(citiesColRef, this.cityId);
      this.docRef = cirtyRef;
      let city = await getDoc(this.docRef);
      let cityData = city.data();
      this.cityInfo.name = cityData.name;
      this.cityInfo.province = cityData.province;
      this.cityInfo.country = cityData.country;
    },

    async updateCity() {
      await setDoc(this.docRef, this.cityInfo);
      alert("updated");
      this.$router.push('/');
    },
  },

  created() {
    let cityId = this.$route.params.cityId;
    this.cityId = cityId;
    this.getCity();
  },
};
</script>