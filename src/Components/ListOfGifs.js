import React, {useEffect, useState} from "react";
import getGifs from "../services/getGifs";
import Gifs from "./Gifs";


export default function ListOfGifs({params}) {
const {Keyword} = params

 const [gifs, setGifs] = useState([])
    
  useEffect(function () {
    getGifs({ Keyword })
    .then((gifs) => { 
      setGifs(gifs)
  });
  }, [Keyword])

  return <div>
   {  
   
   gifs.map(({ id, title, url }) => (
    <Gifs 
    id={id} 
    key={id} 
    title={title}
     url={url} />
  ))
  }
  </div>
  
}
