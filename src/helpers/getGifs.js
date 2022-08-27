export const getGifs = async(categories) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=0Tk3yrPuFP2guRicaQOLumlC1RcH7ZNl&q=valorant=${categories}&limit=20`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map( (img) => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url

        }));
        
        console.log(gifs);
        return gifs;
}