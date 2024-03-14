
import { create } from 'zustand'

type state = {
    user: any,
    project:any
}

export const usePersonStore = create<state>((set:any) => ({
    user: null,
    project:null ,
    updateUser: (user:any) => set(() => ({ user: user })),
    updateProject: (project:any) => set(() => ({ project: project })),
  }))