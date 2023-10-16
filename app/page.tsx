"use client"


import { useEffect, useRef } from "react";
import Translator from "./components/translator";
import { useOnLoadImages } from "./hooks/useOnLoadImages";
import Loader from "./components/loader";

const Page = () => {
    const loaded = useOnLoadImages()

    useEffect(() => {
        if (!loaded) return
        document.getElementById("loader")?.classList.add("display-none")
    }, [loaded])

    return(
        <div style={{
            margin: 0,
            padding:0,
            height: "100dvh"
        }}>
        <Translator/>
        </div>
    )
}

export default Page;