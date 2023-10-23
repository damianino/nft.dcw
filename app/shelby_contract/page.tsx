"use client"

import { useCallback, useEffect, useRef, useState } from "react";
import { OnLoadImagesNonHook, useOnLoadImages } from "@/src/hooks/useOnLoadImages";
import { BG, ContractImage, TextBox, TgLink, Tint } from "@/src/components/shelbyContract/styled";
import Tilt from 'react-parallax-tilt'
import { isMobile } from 'react-device-detect';
import { GetRandomShelbyContractText } from "@/src/api/shelbyContract";

export type AppTouchEvent = TouchEvent;

const Page = () => {
    const loaded = useOnLoadImages()
    const tintRef = useRef<HTMLDivElement>(null)
    const [contractText, setContractText] = useState("")

    const textMock = useCallback(() => {
        return `Салют, готовый забыть об окружающем мире слушатель! \nПоздравляю с подписанием контракта! По контракту 27.10.2023 взамен на новый альбом SHELBY IIII ты даришь мне свое сердце. Теперь оно будет биться в такт новым трекам с SHELBY IIII`
    }, [])

    const reflectionCalculator = useCallback((event: Event) => {
        console.log("ok")
        let mouseX = 0
        let mouseY = 0
        if (event instanceof TouchEvent) {
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

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener("mousemove", reflectionCalculator)
            window.addEventListener("touchmove", reflectionCalculator)
        }
    }, [reflectionCalculator])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            GetRandomShelbyContractText().then(res => setContractText(res || ""))
        }
    }, [])

    useEffect(() => {
        if (!loaded || contractText == "") return
        document.getElementById("loader")?.classList.add("shelby-lightning-animation")
        setTimeout(() => {
            document.getElementById("loader")?.classList.add("display-none")
        }, 3000)
    }, [loaded, contractText])

    return (
        <BG>
            <Tilt
                gyroscope={true}
                style={{ margin: "15%", translate: "0 0 1000px" }}
                onLeave={() => updateReflection(0, 0)}
            >
                <ContractImage src={isMobile ? "/shelbyContract/vertical.png" : "/shelbyContract/horizontal.png"} />
                <TextBox isMobile={isMobile}>
                    <p style={isMobile ?
                        { margin : "45% 8%" } :
                        {margin: "12% 15% 10%"}}
                    >
                    {contractText}
                </p>
            </TextBox>
            <TgLink href="https://t.me/i61DCW" isMobile={isMobile}></TgLink>
            <Tint ref={tintRef} />

        </Tilt>

        </BG >
    )
}

export default Page;
