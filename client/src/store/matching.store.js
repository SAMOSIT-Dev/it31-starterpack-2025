import { request } from "@/libs/utils/request";
import { io } from "socket.io-client";
import { create } from "zustand";

export const useMatchingSocketStore = create((set, get) => ({
    socket: null,
    activeUsers: 0,
    nearbyUsers: [],
    connectedFriends: [],
    login: async () => {
        const data = {
            id: '66130500026',
            password: 'Phoenix#10012548'
        }
        request.post('/users/login', data, {withCredentials: true})
    },
    refresh: async () => {
        request.post('/users/refresh', null, {withCredentials: true})
    },
    connect: (url) => {
        const socket = io(url, {
            withCredentials: true,
            transports: ['websocket']
        })

        socket.on('connect', () => {
            console.log("Connected:", socket.id)
        })

        socket.on('activeUser', (count) => {
            set({ activeUsers: count })
            console.log('active user: ', count)
        })

        socket.on('nearbyUsers', (users) => {
            set({ nearbyUsers: users })
            console.log('users: ', users)
        })

        socket.on('disconnect', (reason) => {
            console.log("Disconnected:", reason)
        })

        set({ socket: socket })
    },
    updateCurrentLocation: () => {
        if (!navigator.geolocation) return
        navigator.geolocation.getCurrentPosition((pos) => {
            console.log("position: ", pos.coords)
            const socket = get().socket
            if (socket) {
                socket.emit('updateLocation', {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                })
            }
        })
    },
    getConnectedFriends: async () => {
        const response = await request.get('/users/friends', {withCredentials: true})
        console.log('Connected friends: ', response.data.content)
        set({connectedFriends: response.data.content})
    },
    disconnect: () => {
        set((state) => {
            state.socket?.disconnect()
            return { socket: null }
        })
    }
}))