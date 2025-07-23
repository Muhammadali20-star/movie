import { create } from 'zustand'

type Store = {
  saved: any[],
  toggleSaved: (payload: any) => void
}

const initialSaved = JSON.parse(localStorage.getItem('saved-movies') || '[]')

export const useStore = create<Store>((set) => ({
  saved: initialSaved,

  toggleSaved: (payload: any) =>
    set((state) => {
      const exist = state.saved.some(item => item.id === payload.id)
      let updated
      if (exist) {
        updated = state.saved.filter(item => item.id !== payload.id)
      } else {
        updated = [...state.saved, payload]
      }
      localStorage.setItem('saved-movies', JSON.stringify(updated))
      return { saved: updated }
    })
}))
