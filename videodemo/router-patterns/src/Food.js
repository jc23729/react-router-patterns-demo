import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";


//Giphy api to search for a gif, might need to create free api key
const GIPHY_URL = 'https://api.giphy.com/v1'
//We setup a component called food, takes in a prop called name
function Food() {
  //useParams is one of the Hooks methods that React Router ships with. ...
  // According to the definition in React Router doc, useParams returns: an object of key / value pairs of URL parameters.
  // Use it to access match.
  
  //we destructure name to use in params
  const { name } = useParams();

  const [src, setSrc] = useState(null);

  useEffect(() => {
    // so we setup a axios request, we need an async function in useEffect

    async function fetchGif(searchTerm) {
      try {
        let res = await axios.get(`${GIPHY_URL}/gifs/search`, {
          //we pass in q as a param/searchterm is just an argument we defined on initial render name:taco or burrito 
          params: { q: searchTerm, api_key: "xNGCvivS4DQzOaDQHCL1w85ZBmwJNe0e" }
        });
        //gets the image as results sets it at index of 0 
        setSrc(res.data.data[0].images.original.url);
      }
      catch (e) {
        console.log(e)
      }
    }
    fetchGif(name);
  }, [name]);
//will use that image and render that image
  let img = src ? <img src={src} alt={name} /> : null;
  return (
    <div>
      <h1>Here's a pic of {name}.</h1>
      {img}
    </div>
  );
}
export default Food;
