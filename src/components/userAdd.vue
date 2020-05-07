<template>
    <div class="container mt-5" style="width: 700px;">
       <div class="loading" :style="isLoading">
            <div class="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    <h5 class="card-header border-0 bg-dark text-light">Add User</h5>
    <div class="card shadow-lg p-3 mb-5 bg-white rounded">
      <div class="card-body">
        <form>
        <div class="row">
          <div class="col">
            <label for="name">Name</label>
            <input type="text" v-model="user.userName" id="name" class="form-control" placeholder="Firstname">            
          </div>
          <div class="col">
            <label for="surname">Surname</label>
            <input type="text" v-model="user.userSurname" id="surname" class="form-control" placeholder="Surname">
          </div>
        </div>
        <hr>
        <div class="row mt-1">
          <div class="col">
            <label for="age">Age</label>
            <input type="number" v-model="user.userAge" id="age" class="form-control" placeholder="Age">
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col">
            <label for="validationCustom04">Gender</label>
            <select class="custom-select" v-model="user.userGender" id="validationCustom04" required>
              <option selected disabled value="">Select a gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>
        <hr>
        <button class="btn btn-dark mt-1" :disabled="disableBtn" @click.prevent="userAdd">Add</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
     user : {
       userName:null,
       userSurname:null,
       userAge:null,
       userGender:null
     },
     clickBtn:false,
    }
  },
  methods : {
    userAdd(){
      this.clickBtn = true;
      this.$store.dispatch("setUsers",this.user);     
    }
  },
  computed : {
    disableBtn(){
      if(this.user.userName != null && this.user.userSurname != null && this.user.userAge != null && 
      this.user.userGender != null) {
        return false;
      } else {
        return true;
      }
    },
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
  },
  beforeRouteLeave(to,from,next){
    if((this.user.userName != null || this.user.userSurname != null || this.user.userAge != null || 
      this.user.userGender != null) && !this.clickBtn) {
        if(confirm("There is unsaved user. Are you sure ?")) {
          next();
        } else {
          next(false);
        }
      } else {
        next();
      }
  }
}
</script>
