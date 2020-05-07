<template>
     <div class="container mt-5" style="width: 1200px;">
    <h5 class="card-header border-0 bg-dark text-light">Users List</h5>
    <div class="card shadow-lg p-3 mb-5 bg-white rounded">
      <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Surname</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(user,index) in getUsers" v-bind:key="user.id">
      <th scope="row"> {{ index }} </th>
      <td> {{ user.key }} </td>
      <td> {{ user.userName }} </td>
      <td> {{ user.userSurname }} </td>
      <td> {{ user.userAge }} </td>
      <td> {{ user.userGender }} </td>
    </tr>
  </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed : {
    ...mapGetters([
      "getUsers"
    ])
  }
}
</script>