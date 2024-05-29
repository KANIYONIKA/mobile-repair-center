"use client";
import {
    createContext,
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from "react";
// import "../App.css";

// コンテキストは 値・値を入れる関数 で分けて作る
const burgerMenuTitleContext = createContext<string>("");
const setBurgerMenuTitleContext = createContext<Dispatch<SetStateAction<string>>>(() => undefined);

interface BurgerMenuTitleProviderProps {
    children: ReactNode;
}

// Provider は props で子コンポーネントを受ける
export const BurgerMenuTitleContext: FC<BurgerMenuTitleProviderProps> = ({ children }) => {
    const [value, setValue] = useState<string>("");

    return (
        <burgerMenuTitleContext.Provider value={value}>
            <setBurgerMenuTitleContext.Provider value={setValue}>
                {children}
            </setBurgerMenuTitleContext.Provider>
        </burgerMenuTitleContext.Provider>
    );
};

export const useBurgerMenuTitleValue = () => useContext(burgerMenuTitleContext);
export const useBurgerMenuTitleSetValue = () => useContext(setBurgerMenuTitleContext);
