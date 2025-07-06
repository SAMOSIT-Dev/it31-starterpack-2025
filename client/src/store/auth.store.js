import { create } from "zustand";
import { request } from "@/libs/utils/request";

const useAuthStore = create(() => ({
    login: async (id, password) => {
        const response = await request.post('/users/login', {id, password}, {withCredentials: true})
        console.log(`Login Token: `, response.data.content)
    },
    refresh: async () => {
        const response = await request.post('/users/refresh', {}, {withCredentials: true})
        console.log('Refresh Token: ', response.data.content)
    },
    logout: async () => {
        const response = await request.post('/users/logout', {}, {withCredentials: true})
        console.log('Logout: ', response.data.content)
    }
}))

export default useAuthStore