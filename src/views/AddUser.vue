<script setup>
/*IMPORTS*/
import axios from "axios";
import { ref } from "vue";
import HeaderTitle from "../layouts/HeaderTitle.vue";

/*Reactive States*/
let user = ref({
    name: null,
    email: null,
});
let error = ref(null);

/*Static States*/
const url = `https://642ba9de208dfe25471c7ea1.mockapi.io/users`;

const onSubmit = async () => {
    let data = user.value;

    if (!data.name || !data.email) {
        error.value = "All inputs are required!!";
        return;
    }

    try {
        let res = await axios.post(url, data);
        (res.status === 201) && alert('User created successfully!!');
    } catch (err) {
        error.value = err.message;
    }
    // reset form values
    user.value = {
        name: null,
        email: null
    };
}
</script>

<template>
    <HeaderTitle>
        <template #title>
            ADD NEW USER
        </template>
    </HeaderTitle>
    <div class="form-conatiner">
        <div v-if="error != null" class="error-message"> <span>Error:</span> {{ error }}</div>
        <form id="form" @submit.prevent="onSubmit">
            <div class="form_group">
                <label for="name">Name: </label>
                <input type="text" name="name" placeholder="Ex: John Wick" v-model="user.name">
            </div>
            <div class="form_group">
                <label for="email">Email: </label>
                <input type="email" name="email" placeholder="Ex: john@xyz.com" v-model="user.email">
            </div>
            <div class="form_actions_div">
                <RouterLink :to="{ name: 'users_list' }"><button type="submit" class="go-back-btn">Go Back</button>
                </RouterLink>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
</template>
