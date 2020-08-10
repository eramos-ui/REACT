//import React ,{ useState , useEffect } from 'react'; //raf tab
import React  from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid =( { category }) => {
   //const [count, setCount] = useState(0); 
   //const [images , setImages] = useState([]);

//    useEffect( () => {
//       getGifs( category) 
//       //.then ( imgs => setImages ( imgs ))  ;
//       // o simple como 
//       .then( setImages );         
//    }, [ category ]) 
   //el segundo argumento es para indicar la dependencia 
   //y que se ejecutará 1 vez sólo cuando esté vacío
   // o indicado que si la category cambia se ejecute - cosa que no pasará


// lo que sigue se movió a un Helper   
//    const key='AiK7TVLhlLp83ROFHwHdxNvo1B2LICG4';
//    const categ=encodeURI(category);
//    const url='https://api.giphy.com/v1/gifs/search?q='+categ+'&limit=10&api_key='+key;
//    console.log(url);
//    const getGifs =  async  () =>{
//    //const url=`https://api.giphy.com/v1/gifs/search?q=$( encodeURI (category) )&limit=10&api_key=yfxa1Z5tyI3wwE25Qct2stZeMAfgGo5E`;
//    const resp = await fetch ( url ) ; 
//    //const data = await resp.json();
//    //desestrucurando
//    const { data } = await resp.json();
//    //recorriendo la data
//    const gifs = data.map( img => {
//        return {
//            id:img.id,
//            title : img.title,
//            url: img.images?.downsized_medium.url// el interrogativo es si vienen las imágenes
//        }
//    })  

//    //console.log(data);
//    console.log(gifs);
//    setImages( gifs);
// } 
 //const state =useFetchGifs ();   
 //desestructurando
 //const {data,   loading} =useFetchGifs ();   
 // o sólo el loading
 const { data: images,  loading} =useFetchGifs ( category );   
 //console.log(data);      
    return (
        <>
            <h3 claseName="animate__animated animate__fadeIn"> { category } </h3>
            { loading &&<p claseName="animate__animated animate__flash">Cargando</p>} 
             <div className="card-grid">
                {/* <ol>
                    {
                    images.map( ({id , title } ) => (
                        <li key = { id }> { title } </li>
                    ))
                    }
                </ol>  */}
                 {
                images.map( img  => (
                        <GifGridItem  
                        key ={ img.id }
                        { ...img }
                        />  
                    ))
                } 
             </div>  
        </>
    )
}
