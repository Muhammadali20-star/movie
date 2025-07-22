import { create } from 'zustand'


type Store = {
    saved: any[],
    toggleSaved: (payload: any) => void
}

export const useStore = create<Store>()((set)=> ({
    saved: [],

    toggleSaved: (payload: any) => set((state)=>{
        const Exist = state.saved.some(item => item.id === payload.id)
        if(Exist){
            return {saved: state.saved.filter(item => item.id !== payload.id)}
        } else {
            return {saved: [...state.saved, payload]}
        }
    })
}))