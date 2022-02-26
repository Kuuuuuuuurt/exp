<template>
  <div class="home">
    <h2>Cities</h2>
    <div class="container">
      <ul>
        <li v-for="city in cities" :key="city.id">
          {{ city.name }}
          <router-link class="btn" :to="{ path: '/cities/3265dadf' }"
            >Edit
          </router-link>
          <router-link :to="{ path: 'cities/3265dadf' }">Delete </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import citiesColRef from '../firebase/db/cities';
import { getDocs } from 'firebase/firestore';
export default {
  name: "Home",
  components: {},
  data(){
    return{
      cities: [],
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
  },

  created(){
    this.fetchCity();
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
  padding: 0;
  width: 250px;
  gap: 12px;
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
