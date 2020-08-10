import React, { useState } from 'react';
//import PropTypes from 'prop-types'; //para obligar la props
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GiftExpertApp = () => {       
   //const categories = ['One Punch','Samurai X','Dragon Ball'] //si pueden variar mejor no así
  // const [categories,setCategories] =useState (['One Punch','Samurai X','Dragon Ball']);
  const [categories,setCategories] =useState (['Rick and Morty']);
//    const handleAdd = () => {
//        //categories.push ( 'nuevo'); mala práctica
//       //setCategories('nuevo'); //esto cambia el arreglo a string--no usar
//       //setCategories([...categories,'nuevo']); // esto está OK
//       //setCategories(['HunterXHunter',...categories]);// así queda primero
//       setCategories( cat => [...cat,'HunterXHunter']);// tb OK, cat es estado anterior y los que sigue es el nuevo estado
      
//    }
   
     return  (
      <>
         <h2>  GiftExpertApp </h2>
         <AddCategory setCategories= { setCategories} />
         <hr />
         {/* <ol>
             <li>One</li>
             <li>Samurai</li>
             <li>Dragon</li>
         </ol> */}
         {/* {
             categories
         } */}
         {/* <button onClick ={ handleAdd }>Agregar</button> */}
         
         <ol>
             {
                 //categories.map( (categoriy,i) =>{//map recibe 2 elementos, el segundo es el índice
                //  categories.map( category =>{
                //  return <li key={category}>{category}</li>// i+1 para que parta de 1
                //  })
                // versión de 1 línea: puede ser sin los paréntesis externos
                categories.map( category => (
                   //<li key={category}>{category}</li>
                   <GifGrid 
                   key = { category }
                   category = { category } 
                   />
                   ))
             }
         </ol>
      </>

  );
 }
 
 
 export default GiftExpertApp;
