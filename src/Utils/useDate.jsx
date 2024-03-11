import { useState } from "react";

export const useDate = () => {
    const locale ="en";
    const {today,setDate} = useState(newDate())


    useEffect(()=> {
        const timer = setInterval(()=> { 
            setDate(newDate())
        },[60*1000])
        
        return() => {
            clearInterval(timer)
        }
    },[]   )

    const day = today.toLocaleDateString(Locale, {weekday:'long'})
    const date = `${day}, ${today.getDate()},${today.toLocaleDateString(locale,{month:'long'})}\n\n`
    const time = `today.toLocaleDateString(locale,{hour:'numeric',hour12:true,minute:'numeric'})`

    return{
        date,time
    }
}