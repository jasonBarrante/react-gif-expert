import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs.js";
import { useFetchGifs } from "../hooks/useFetchGifs.js";
import { GifItem } from "./GifItem.jsx";


export const GifGrid = ({ category }) => {
    
  const {images, isLoading} = useFetchGifs( category );



  return (
    <>
      <h3>{category}</h3>
      {isLoading && (<h2>Cargando...</h2>)}
      <div className="card-grid">
        {
        images.map( img => (
            <GifItem 
            key={img.id}
            {... img}  // forma de enviar todo el objeto (luego se desestructura en el otro componente)
           // title = {img.title}
           // url = {img.url}
            />
        ))
        }
        
      </div>

    </>
  );
};
