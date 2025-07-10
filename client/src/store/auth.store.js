import { create } from "zustand";
import { request } from "@/libs/utils/request";

const useAuthStore = create(() => ({
    login: async (id, password) => {
        await request.post('/users/login', {id, password}, {withCredentials: true})
    },
    refresh: async () => {
        await request.post('/users/refresh', {}, {withCredentials: true})
    },
    logout: async () => {
        await request.post('/users/logout', {}, {withCredentials: true})
    }
}))

export default useAuthStore