import React, { useEffect, useState } from 'react';
import { useStateContext } from '../Context';

import clear from '../assets/images/clear.jpg'
import fog from '../assets/images/fog.jpg'
import cloudy from '../assets/images/cloudy.jpg'
import rainy from '../assets/images/rainy.jpg'
import snow from '../assets/images/snow.jpg'
import sunny from '../assets/images/sunny.jpg'
import stormy from '../assets/images/stormy.jpg'


const BackgroundLayout = () => {
    const {weather}= useStateContext()
    const[image,setImage] = useState(clear)

    useEffect(()=>{
        if(weather.conditions){
            let ImageString =weather.conditions
            if(ImageString.toLowerCase().includes('Clear')){
                setImage(clear)
            }
            else if(ImageString.toLowerCase().includes('fog')){
                setImage(fog)
            }
            else if(ImageString.toLowerCase().includes('cloud')){
                setImage(cloudy)
            }
            else if(ImageString.toLowerCase().includes('rain')|| ImageString.toLowerCase().includes('shower')){
                setImage(rainy)
            }
            else if(ImageString.toLowerCase().includes('snow')){
                setImage(snow)
            }
            else if(ImageString.toLowerCase().includes('sunny')){
                setImage(sunny)
            }
            else if(ImageString.toLowerCase().includes('thunder')|| ImageString.toLowerCase().includes('storm')){
                setImage(stormy)
            }

        }
    },[weather]    )
    return (
        <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]'></img>    
       
    );
}

export default BackgroundLayout;
