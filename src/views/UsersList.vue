<script setup>

/*IMPORTS*/
import axios from "axios"
import { ref, onMounted } from "vue"
import HeaderTitle from "../layouts/HeaderTitle.vue"

/*Reactive States*/
const users = ref([]);
const error = ref(null);

/*Static States*/
const url = `https://642ba9de208dfe25471c7ea1.mockapi.io/users/`;

const fetchUsers = async (url) => {
    try {
        let resp = await axios.get(url);
        users.value = resp.data;
        console.log(users.value);
    } catch (err) {
        error.value = err.message;
        console.log(error.value);
    }
}

onMounted(() => {
    fetchUsers(url);
});

const deleteUser = async (id) => {
    if (!confirm("Are you sure?")) return;

    try {
        let res = await axios.delete(url + id);
        (res.status === 200) && alert('User deleted successfully!!');

        let updatedUsers = users.value.filter((user) => user.id !== id);
        users.value = updatedUsers;
    } catch (err) {
        error.value = err.message;
    }
}
</script>

<template>
    <HeaderTitle>
        <template #title>
            USERS CRUD API
        </template>
    </HeaderTitle>
    <main class="main-container">
        <RouterLink :to="{ name: 'add_user' }"> <button>Add New User</button> </RouterLink>
        <div v-if="error != null" class="error-message"> <span>Error:</span> {{ error }}</div>
        <table v-else>
            <tr class="table-header">
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
            <tr v-for="(user, index) in users" :key="user.id">
                <td>{{ ++index }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>
                    <RouterLink :to="{ name: 'edit_user', params: { id: user.id } }"> <button>Edit</button>
                    </RouterLink>
                    <button @click="deleteUser(user.id)" class="delete-btn">Delete</button>
                </td>
            </tr>
        </table>
    </main>
</template>
