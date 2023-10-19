"use client"

import { useCallback, useEffect, useRef, useState } from "react";
import { OnLoadImagesNonHook, useOnLoadImages } from "@/src/hooks/useOnLoadImages";
import { BG, ContractImage, TextBox, TgLink, Tint } from "@/src/components/shelbyContract/styled";
import Tilt from 'react-parallax-tilt'
import {isMobile} from 'react-device-detect';
import { GetRandomShelbyContractText } from "@/src/api/shelbyContract";

export type AppTouchEvent = TouchEvent;

const Page = () => {
    const loaded = useOnLoadImages()
    const tintRef = useRef<HTMLDivElement>(null)
    const [contractText, setContractText] = useState("")

    const getText = useCallback(() => {
        return `Привет человек!
        Поздравляю, 
        ты подписал контракт с SHELBY! 
        По контракту 27.10.2023
         взамен на альбом 
        ты отдаешь мне свою душу. 
        Теперь там будет место 
        только для SHELBY IIII. `
    }, [])

    const reflectionCalculator = useCallback((event: Event) => {
        console.log("ok")
        let mouseX = 0
        let mouseY = 0
        if ( event instanceof TouchEvent){
            mouseX = event.touches[0].clientX
            mouseY = event.touches[0].clientY
        } 
        if (event instanceof MouseEvent) {
            mouseX = event.clientX
            mouseY = event.clientY
        }
        let halfWidth = window.innerWidth / 2
        let halfHeight = window.innerHeight / 2
        let deltaX = (halfWidth - mouseX) / halfWidth;
        let deltaY = (halfHeight - mouseY) / halfHeight;
        let rad = Math.atan2(deltaY, deltaX)
        let deg = Math.round(rad * (180 / Math.PI))
        let distanceFromCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
        updateReflection(deg, distanceFromCenter * 1000)
        }, [])

    const updateReflection = useCallback((degree: number, distance: number) => {
        if (!tintRef.current) return
        const strength = 1.5
        tintRef.current.style.background = `-webkit-linear-gradient(${degree}deg,
            rgba(255, 0, 0, 0) 0%,
            rgba(255, 255, 0, ${0.255 * strength}) ${10 * distance / 100}%,
            rgba(0, 192, 255, ${0.255 * strength}) ${20 * distance / 100}%,
            rgba(192, 0, 255, ${0.055 * strength}) ${30 * distance / 100}%)`
        tintRef.current.style.backgroundSize = "cover"
    }, [])

    window.addEventListener("mousemove", reflectionCalculator)
    window.addEventListener("touchmove", reflectionCalculator)

    useEffect(() => {
        GetRandomShelbyContractText().then(res => setContractText(res || ""))
    }, [])

    useEffect(() => {
        if (!loaded) return
        document.getElementById("loader")?.classList.add("shelby-lightning-animation")
        setTimeout(()=>{
            document.getElementById("loader")?.classList.add("display-none")
        }, 3000)
    }, [loaded])

    return (
        <BG>
            <Tilt 
                gyroscope={true} 
                style={{ margin: "15%", translate: "0 0 1000px" }}
                onLeave={()=>updateReflection(0,0)}
                >
                <ContractImage src={isMobile?"/shelbyContract/vertical.png":"/shelbyContract/horizontal.png"} />
                <TextBox isMobile={isMobile}>
                    <p style={isMobile ? {margin: "auto 15% auto 15%"} : {margin: "auto 30% auto 30%"}}>
                        {contractText}
                    </p>
                </TextBox>
                <TgLink href="https://t.me/i61DCW" isMobile={isMobile}></TgLink>
                <Tint ref={tintRef} />
                
            </Tilt>

        </BG>
    )
}

export default Page;