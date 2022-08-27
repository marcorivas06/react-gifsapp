import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
 
    const [inputvalue, setinputvalue] = useState('');
 
    const onInputChange = ({target}) =>{
        console.log(onNewCategory)
        setinputvalue(target.value);
    }
    

    
    const onSubmit = (event) =>{
        event.preventDefault();
        const newinputvalue = inputvalue.trim();
        if(newinputvalue.length <= 1) return;
        
        //setcategories(categories => [ inputvalue, ...categories]);
        onNewCategory(newinputvalue);
        setinputvalue('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type='text'
                placeholder="Enter a text"
                value={inputvalue}
                onChange = {(event) => {onInputChange(event)}}
            /> 
        </form>
    
  )
}
