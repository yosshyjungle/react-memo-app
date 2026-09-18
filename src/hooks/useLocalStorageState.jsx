import { useState } from "react";

// keyにはtaskListがくる、initialValueは[]
export function useLocalStorageState(key, initialValue){
    const [ state, setState ] = useState(() => {
        // stateの初期値の設定 keyによって値が違う keyは保存した際の名前のようなもの
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    });

    const setLocalStorageState = (value) => {
        setState((prevState) => {
            const newState = 
                //valueは関数かどうかを判定している　valueにはP.244で変数か関数のどちらかが来るため
                typeof value === "function" ? value(prevState) : value;
            localStorage.setItem(key, JSON.stringify(newState));
            return newState
        })
    }
    return [ state, setLocalStorageState ]
}