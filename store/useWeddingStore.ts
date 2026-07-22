import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WeddingStore {
  inviteOpened: boolean;
  musicEnabled: boolean;
  hasInteracted: boolean;
  activeSection: string;
  setInviteOpened: (v: boolean) => void;
  setMusicEnabled: (v: boolean) => void;
  setHasInteracted: (v: boolean) => void;
  setActiveSection: (section: string) => void;
}

export const useWeddingStore = create<WeddingStore>()(
  persist(
    (set) => ({
      inviteOpened: false,
      musicEnabled: false,
      hasInteracted: false,
      activeSection: 'home',
      setInviteOpened: (v) => set({ inviteOpened: v }),
      setMusicEnabled: (v) => set({ musicEnabled: v }),
      setHasInteracted: (v) => set({ hasInteracted: v }),
      setActiveSection: (section) => set({ activeSection: section }),
    }),
    {
      name: 'wedding-store',
      partialize: (state) => ({ musicEnabled: state.musicEnabled }),
    }
  )
);
