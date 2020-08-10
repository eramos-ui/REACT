import React, { useState } from 'react';
import PropTypes from 'prop-types'; //para obligar la props


export const AddCategory  =( {setCategories} ) => {
    const [inputValue ,setInputValue]= useState('');//para evitar el undefine

    const handleInputChange = ( e ) => {
        //console.log(e.target.value);
        setInputValue( e.target.value );
    }
    const handleSubmit = ( e ) =>{
      e.preventDefault(); //evita el refresh de la página
      if( inputValue.length >2 ) {
          setCategories( cat => [ inputValue ,...cat]);
          setInputValue('');
      }
      
    }
    return (

        <form onSubmit ={ handleSubmit}>
        {/* <h1>{ inputValue }</h1> */}
            <input 
            type="text"
            value ={inputValue}
            onChange={ handleInputChange }
            />
        </form>

    )
}       

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
   }