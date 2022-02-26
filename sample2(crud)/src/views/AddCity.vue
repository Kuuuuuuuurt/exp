<template>
  <div>
    <h2>Add City</h2>

    <form @submit.prevent="createCity">
      <div><input type="text" placeholder="City Name" v-model="name" /></div>
      <div><input type="text" placeholder="Province" v-model="province"/></div>
      <div><input type="text" placeholder="Country" v-model="country"/></div>
      <div><input type="submit" /></div>
    </form>
  </div>
</template>

<script>
import {citiesColRef, countryColRef} from '../firebase/firebase';
import {addDoc} from 'firebase/firestore';

export default {
    data(){
        return{
            user: {
                name: 'kurt',
                province: 'vonn',
                country: 'alde',
            }
        };
    },

    

    methods:{
        async createCity(){
            console.log("Creating Data");
            const addedDoc = await addDoc(citiesColRef, this.$data);
            console.log('this.$data',this.$data.user.name)
            const addedCountry = await addDoc(countryColRef, this.$data);
            alert('Document Added Successfully');
            console.log(addedDoc);
            console.log(addedCountry);
            this.$router.push('/');
        }

        
    }
};
</script>