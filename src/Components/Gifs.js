import React from "react";
import "./Gifs.css";

export default function Gifs({title, id, url}) {
  return (
    <a href={`${id}`} 
    className="Gif">
      <h4>{title}</h4>
      <img alt={title} src={url} />
    </a>
  )
}
