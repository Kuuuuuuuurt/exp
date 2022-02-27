<template>
  <div>
    <h2>Add City</h2>

    <form @submit.prevent="createCity">
      <div><input type="text" placeholder="City Name" v-model="name" /></div>
      <div><input type="text" placeholder="Province" v-model="province" /></div>
      <div><input type="text" placeholder="Country" v-model="country" /></div>
      <div><input type="submit" /></div>
    </form>
  </div>
</template>

<script>
import { citiesColRef, app } from "../firebase/firebase";
import { addDoc, getFirestore, setDoc, doc } from "firebase/firestore";

export default {
  data() {
    return {
      name: null,
      province: null,
      country: null,
    };
  },

  methods: {
    async createCity() {
      const db = getFirestore(app);


      console.log("Creating Data");
      const addedDoc = await addDoc(citiesColRef, this.$data);
      const addedDocs = await setDoc(doc(db, "sample", this.$data.name),this.$data)
      alert("Document Added Successfully");
      console.log(addedDoc);
       console.log(addedDocs);

      this.$router.push("/");
    },
  },
};
</script>