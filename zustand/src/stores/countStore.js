import { create } from 'zustand'
import { persist,createJSONStorage  } from 'zustand/middleware'


export const useCountStore = create(  persist(
  (set, get) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 })
  }),
  {
    name: 'counter', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
  }
))



