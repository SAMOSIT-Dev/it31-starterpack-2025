import { request } from "@/libs/utils/request";
import { io } from "socket.io-client";
import { create } from "zustand";

export const useMatchingSocketStore = create((set, get) => ({
    socket: null,
    activeUsers: 0,
    matchedUser: null,
    connectedFriends: [],
    connect: (url) => {
        const socket = io(url, {
            path: '/samosit/it31starterpack/matching',
            withCredentials: true,
            transports: ['websocket']
        })

        socket.on('activeUser', (count) => {
            set({ activeUsers: count })
        })

        socket.on("matched", (data) => {
            set({matchedUser: data.userProfile})
            set(state => ({connectedFriends: state.connectedFriends.push(data.userProfile)}))
        })

        set({ socket: socket })
    },
    updateCurrentLocation: () => {
        if (!navigator.geolocation) return
        navigator.geolocation.getCurrentPosition((pos) => {
            const socket = get().socket
            if (socket != null) {
                socket.emit('updateLocation', {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                })
            }
        })
    },
    getConnectedFriends: async () => {
        const response = await request.get('/users/friends', {withCredentials: true})
        set({connectedFriends: response.data.content})
    },
    resetMatchedUser: () => {
        set({matchedUser: null})
    },
    disconnect: () => {
        set((state) => {
            state.socket?.disconnect()
            return { socket: null }
        })
    }
}))