import { useState } from "react"
import { AddCategory, GifGrid } from "./components"
import PropTypes from 'prop-types'


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['party'])
    const onAddCategory = (newCategory)=>{
      setCategories([newCategory,...categories])
    }
    return (
    <>
    <h1>Buscador de Gifs</h1>
    {/* <AddCategory onSetCategories = {setCategories}/> */}
    <AddCategory onNewCategory = {onAddCategory}/>
   
    { categories.map(category=>
        (
         <GifGrid key={category} category = {category}/>
        )
    )}
     
    </>
  )
}

