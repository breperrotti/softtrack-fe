import { create } from "zustand";

interface useContractModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useContractModal = create<useContractModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));