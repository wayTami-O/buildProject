import { pages } from "@/components/header";
import { create } from "zustand";

interface burgerType {
    valueBurger: boolean,
    setValueBurger: () => void,
    activePage: pages,
    setActivePage: (page: pages) => void
    animateCloseBurger: boolean,
    setAnimateCloseBurger: () => void
}

export const useBurger = create<burgerType>((set) => ({
    valueBurger: false,
    setValueBurger: () => set((state) => ({ valueBurger: !state.valueBurger })),
    activePage: "Главная",
    setActivePage: (page: pages) => set(() => ({ activePage: page })),
    animateCloseBurger: false,
    setAnimateCloseBurger: () => set(() => ({ animateCloseBurger: true }))
}))