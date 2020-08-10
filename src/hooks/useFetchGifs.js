//todos los hook em piezan con use
//funcionan como los componentes
// este hook es el que carga los datos cuando cambia la category
import { useState, useEffect} from 'react';
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs =( category ) => {
    const [state, setState] = useState({
        data: [],
        loading : true
    });

    useEffect( () => {

        getGifs( category )      
         .then ( imgs => {
            // setTimeout( () => {
                //console.log(imgs);
                setState ({
                    data: imgs,
                    loading : false
                }) ;
            // }, 3000 );
 
        })
    },[ category ])
    // setTimeout ( ()=>{
    //      setstate( {        
    //         data: [1,2,3,4,5,6,7],
    //         loading : false
    //     });
    // },3000);
    return state; // dta; [], loading: true
}
