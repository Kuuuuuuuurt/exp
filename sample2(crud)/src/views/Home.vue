<template>
  <div class="home">
    <h2>Cities</h2>
    <div class="container">
      <ul>
        <li v-for="city in cities" :key="city.id">
          {{ city.name }}, {{city.province}}, {{city.country}} 
          <router-link class="btn" :to="{ path: `/cities/${city.id}` }"
            >Edit
          </router-link>
          <button @click="deleteCity(city.id)">delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import citiesColRef from '../firebase/db/cities';
import { getDocs, doc, deleteDoc } from 'firebase/firestore';
export default {
  name: "Home",
  components: {},
  data(){
    return{
      cities: [],
      selectedDoc: null,
    };
  },

  methods:{
      async fetchCity(){
        let citiesSnapshot = await getDocs(citiesColRef);
        let cities = [];
        citiesSnapshot.forEach((city) =>{
          let cityData = city.data();
          cityData.id = city.id;
          cities.push(cityData);
        });
        console.log(cities);
        this.cities = cities;
      },

      async deleteCity(cityId){
        let cityRef = doc(citiesColRef, cityId);
        await deleteDoc(cityRef);
        alert("deleted");
        this.$router.go();
      }
  },

  created(){
    this.fetchCity();
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  width: 1000px;
  border: 1px solid black;
}
li {
  font-size: 20px;
}
.container {
  display: block;
  margin: 0 auto;
  width: min-content;
} 
.btn {
  margin-left: 100px;
}
</style>
