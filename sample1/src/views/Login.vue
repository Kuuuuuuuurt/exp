<template>
    <main>
        <section>
            <form class="register" @submit.prevent="register">
                <h2>register</h2>
             <input type="text" 
                placeholder="Name"
                v-model="register_form.name" />
                <input type="email" 
                placeholder="Email"
                v-model="register_form.email" />
                <input type="password" 
                placeholder="password"
                v-model="register_form.password" />
                <input type="submit" value="Register">
            </form>

            <form class="login" @submit.prevent="login">
                 <h2>login</h2>
                <input type="email" 
                placeholder="Email"
                v-model="login_form.email" />
                <input type="password" 
                placeholder="password"
                v-model="login_form.password" />
                <input type="submit" value="Login">
            </form>
        </section>
    </main>
</template>

<script>
import {ref} from 'vue'
import {useStore} from 'vuex'
export default {
    setup(){
        const login_form = ref({});
        const register_form = ref({});
        const store = useStore();

         const login = () => {
             store.dispatch('login', login_form.value);
         }

         const register = () => {
             store.dispatch('register', register_form.value);
         }

        return{
            login_form,
            register_form,
            login, 
            register
        }
    }

}
</script>

<style>

</style>