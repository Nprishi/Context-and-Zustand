import {create} from "zustand";


export const usePlayerStore = create((set, get) => ({
    players: ["Sachin", "Dravid", "Lara", "Ponting"],
    addPlayer: (name) => set((state) => ({ players: [...state.players, name] })),
    removePlayer:(player) => set((state) => ({ players: state.players.filter(p => p !== player) })),
    
    updatePlayer:(player) => set((state) => ({ players: state.players.map(p => p === player) })), 
    
    getPlayers: () => get().players,
}));