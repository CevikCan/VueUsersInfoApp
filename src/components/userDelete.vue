<template>
     <div class="container mt-5" style="width: 700px;">
        <div class="loading" :style="isLoading">
    <div class="lds-ripple">
        <div></div>
        <div></div>
    </div>
</div>
    <h5 class="card-header border-0 bg-dark text-light">Users Delete</h5>
    <div class="card shadow-lg p-3 mb-5 bg-white rounded">
      <div class="row">
        <div class="col">
          <label for="deleteUser">Select a user</label>
          <select class="custom-select" id="deleteUser" v-model="selectUser" @change="selectedUser">
            <option selected disabled>Select a user</option>
            <option :value="user.key" v-for="user in getUsers" v-bind:key="user.id"> {{ user.userName }} {{ user.userSurname }} </option>
          </select>
        </div>
      </div>
      <hr>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card" v-if="selectUser !=''">
              <div class="card-header">
                <strong>User ID:</strong> {{ userInfo.key }} 
              </div>
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item"><strong>Name:</strong> {{userInfo.userName}}</li>
                  <li class="list-group-item"><strong>Surname:</strong> {{userInfo.userSurname}}</li>
                  <li class="list-group-item"><strong>Age:</strong> {{userInfo.userAge}}</li>
                  <li class="list-group-item"><strong>Gender:</strong> {{userInfo.userGender}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-danger mt-3" @click="deleteItem">Delete</button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
export default {
  data(){
    return {
      selectUser:"",
      userInfo:"",
      clickBtn:false
    }
  },
  methods : {
    selectedUser(){
      this.userInfo = this.$store.getters.getUser(this.selectUser)[0];
    },
    deleteItem(){     
      this.clickBtn = true; 
      this.$store.dispatch("deleteUser",this.selectUser);  
    }
  },
  computed : {
    ...mapGetters([
      "getUsers"
    ]),
    isLoading(){
      if(this.clickBtn) {
        return {
          display:"block"
        }
      } else {
        return {
          display:"none"
        }
      }
    }  
  }
  
}
</script>