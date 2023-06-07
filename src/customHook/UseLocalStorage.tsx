import React, {useEffect, useState} from 'react'

const PREFIX = 'online-code-editor' // this hels to identify your local storage since maybe you already have other things stored in local Storage
const UseLocalStorage = (key:any, initialValue:any) => {
    const prefixedKey = PREFIX + key
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
        if (jsonValue !== null) return JSON.parse(jsonValue)

        if(typeof initialValue === 'function'){
            return initialValue()
        }else{
            return initialValue
        }
    })

    useEffect (() =>{
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [value, prefixedKey])
  return [value, setValue]
}

export default UseLocalStorage