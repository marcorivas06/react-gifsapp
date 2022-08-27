import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import useFetchGifs from "../hooks/useFetchGifs";
import GifItem from "./GifItem";


export const GifGrid = ({categories}) => {

    //custom hook
    const{ images, isLoading} = useFetchGifs(categories);
    console.log({images,isLoading})
    
    return(
    <>
        
        <h3>{categories}</h3>
        
        {isLoading && <h2>Loading</h2>}

        <div className= "card-grid">
        {
            images.map((image) => 
                <GifItem 
                    key = {image.id} 
                    {...image}        
                />
            )
        }
        </div>
        
        
    </>
    )
}


