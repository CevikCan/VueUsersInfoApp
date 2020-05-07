<template>
    <nav class="navbar fixed-bottom  navbar-light" style="background-color: #D7D7D7;">
    <span class="navbar-text mr-auto">
        <strong>Users List Application</strong>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong>Total Users :</strong> {{ getUsers.length }}
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong>Male Users :</strong> {{ getMaleUsers.length }}
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong>Female Users :</strong> {{ getFemaleUsers.length }}
    </span>
</nav>
</template>
<script>
import { mapGetters } from "vuex";
export default {
   computed : {
       ...mapGetters([
           "getUsers",
           "getMaleUsers",
           "getFemaleUsers"
       ])
   }
}
</script>