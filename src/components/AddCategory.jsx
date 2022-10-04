import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('') 

    
    const onInputChange = ({target})=>{
        
        setInputValue(target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(inputValue.trim().length<=1) return;
        
        onNewCategory(inputValue.trim())
        // onSetCategories(categories => [...categories, inputValue])
    //    console.log(inputValue)
        setInputValue('');
    }

  return (
   <form onSubmit={handleSubmit} aria-label="form">
      <input 
       type="text" 
       placeholder="Buscar Gif" 
       value={inputValue}
       onChange={onInputChange}
       />
     
   </form>
    
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}

