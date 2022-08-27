import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


const useFetchGifs = (categories) => {

    const [images, Setimages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(categories);
        Setimages(newImages);
        setisLoading(false);
    }

    useEffect(() => {
        getImages();
    },[])

    return {
        //images: images -> since names are the same
        images,
        isLoading
    }
        
    
}

export default useFetchGifs