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
import {citiesColRef, } from '../firebase/firebase';
import {addDoc} from 'firebase/firestore';

export default {
    data(){
        return{
            
                name: null,
                province: null,
                country: null,
          
        };
    },

    

    methods:{
        async createCity(){
            console.log("Creating Data");
            const addedDoc = await addDoc(citiesColRef, this.$data);
            alert('Document Added Successfully');
            console.log(addedDoc);
            this.$router.push('/');
        }

        
    }
};
</script>