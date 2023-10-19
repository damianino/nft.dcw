import { useState, useEffect, RefObject } from "react";

export const useOnLoadImages = () => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    console.log("checking")
    var imgs = document.images,
    len = imgs.length,
    counter = 0;

    [].forEach.call( imgs, function( img: HTMLImageElement ) {
        if(img.complete)
          incrementCounter();
        else
          img.addEventListener( 'load', incrementCounter, false );
    } );

    function incrementCounter() {
        counter++;
        if ( counter === len ) {
            console.log( 'All images loaded!' );
            setStatus(true)
        }
    }
  }, []);

  return status;
};

export const OnLoadImagesNonHook = (callback: ()=>void) => {
    console.log("checking")
    var imgs = document.images,
    len = imgs.length,
    counter = 0;

    [].forEach.call( imgs, function( img: HTMLImageElement ) {
        if(img.complete)
          incrementCounter();
        else
          img.addEventListener( 'load', incrementCounter, false );
    } );

    function incrementCounter() {
        counter++;
        if ( counter === len ) {
            console.log( 'All images loaded!' );
            callback()
        }
    }
}