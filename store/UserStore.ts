import { defineStore } from "pinia";

export const useUserStore = defineStore('UserStore',{
    state:()=>{
        return{
            user:{
                name:'Youssef',
                email:'azizy5203@gmail.com',
                favouriteMovies:["Avengers","Iron Man"]
            },
        }
    },
    getters:{
        getUserData(state){
            return state.user
        },
    },
    actions:{
        changeUserData(user){
            this.user = user
        }
    }
})