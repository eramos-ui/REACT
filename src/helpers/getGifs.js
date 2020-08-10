//en el helpers están funciones que no renderizan nada

export const getGifs =  async  ( category ) => {

    //const url=`https://api.giphy.com/v1/gifs/search?q=$( encodeURI (category) )&limit=10&api_key=yfxa1Z5tyI3wwE25Qct2stZeMAfgGo5E`;
    const key='AiK7TVLhlLp83ROFHwHdxNvo1B2LICG4';
    const categ=encodeURI(category);
    const url='https://api.giphy.com/v1/gifs/search?q='+categ+'&limit=10&api_key='+key;
    const resp = await fetch ( url ) ; 

    //const data = await resp.json();
    //desestrucurando
    const { data } = await resp.json();
    //recorriendo la data
    const gifs = data.map( img => {
        return {
            id:img.id,
            title : img.title,
            url: img.images?.downsized_medium.url// el interrogativo es si vienen las imágenes
        }
    }) 
    //console.log (gifs);
    return gifs;
}