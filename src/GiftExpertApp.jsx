import { useState } from "react";
import { AddCategory,GifGrid } from "./components";


export const GiftExpertApp = () => {

  const [categories, setcategories] = useState(['One Punch']);
  const onAddCategory = (NewCategory) =>{
    
    if(categories.includes(NewCategory)) return;
    
    const temp = [ NewCategory,...categories];
    setcategories(temp);
  }

  return (
    <>

       {/* title */}
      <h1>GiftExpertApp</h1>
      
      {/* Input  */}
      <AddCategory 
        //setcategories={setcategories}
        onNewCategory = { (event) => onAddCategory(event)}
      />
      
      
      {/* Gif List */}
        {/* GifItem */}
    
      {
      categories.map((category) => 
      
        (<GifGrid
          key = {category}
          categories = {category}
        />)) 
      }
      

    </>  
  )
}
