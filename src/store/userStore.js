import Vue from "vue";
import { router } from "../router"
const state = {
    usersList : []
}
const getters = {
    getUsers(state){
        return state.usersList
    },
    getUser(state){
        return key => state.usersList.filter(element=>{
           return element.key == key
        })
    },
    getMaleUsers(state){
      return state.usersList.filter(element=>{
            return element.userGender == "Male"
        })
    },
    getFemaleUsers(state){
        return state.usersList.filter(element=>{
              return element.userGender == "Female"
          })
      }
        
    }

const mutations = {
    updateUsersList(state,payload){
        state.usersList.push(payload);
    },
    deleteUserList(state,payload){
        let user = state.usersList.filter(element=>{
            return element.key == payload;
        })
        let index = state.usersList.indexOf(user[0]);
        state.usersList.splice(index,1);
    }
    
}
const actions = {
    setUsers({commit},payload){
        Vue.http.post("https://userlistapp-ca680.firebaseio.com/userList.json",payload).then(response=>{
            payload.key = response.data.name;
            commit("updateUsersList",payload);
            router.replace("/");   
        })              
    },
    getUsersList({commit}){
        Vue.http.get("https://userlistapp-ca680.firebaseio.com/userList.json").then(response=>{
         let data = response.body;
         for(let user in data){
             data[user].key = user;
             commit("updateUsersList",data[user]);
         }
        })
        
    },
    deleteUser({commit},payload){
        let userID = payload;
        Vue.http.delete("https://userlistapp-ca680.firebaseio.com/userList/" + userID + ".json").then(response=>{
            router.replace("/");   
        })       
      commit("deleteUserList",payload);
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}