"use client"

import { useEffect, useRef } from "react";
import Translator from "@/src/components/translator";
import { useOnLoadImages } from "@/src/hooks/useOnLoadImages";

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