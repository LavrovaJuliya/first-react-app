import * as  axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "98f66602-d58a-45cf-8b37-f7f4e1fac945" }

});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 1) {
        return instance.get(`users?page=${currentPage}&count=${pageSize} `)
            .then(response => {
                return response.data;
            });
    },
  follow (userId) {
        return instance.post(`follow/${userId}`)
    },
 unfollow (userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
  getProfile(userId){
        return instance.get(`profile/`+userId);
   }
}
export const authAPI ={
    me(){
        return instance.get('auth/me')
    }
}