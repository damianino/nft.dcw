"use client"

import TranslatorClient from "@/src/api/translator";
import {TranslatorTextAreaHuman, TranslatorTextAreaTot} from "./translatorTextArea";
import { Container, SwitchLanguageButton } from "./styled";
import { TranslatorAPIURL } from "@/src/constants/translator";
import { useEffect, useState } from "react";

const Translator = () => {
    const [humanVal, setHumanVal]  = useState("")
    const [totVal, setTotVal]  = useState("")
    const [translate2Tot, setTranslate2Tot] = useState(true) 

    const [needTranslation, setNeedTranslation] = useState(false)

    const transClient = new TranslatorClient(TranslatorAPIURL)

    useEffect(() => {
        if (!needTranslation) return

        const timeoutID = setTimeout(translate, 300)
        return () => clearTimeout(timeoutID)
    }, [humanVal, totVal])


    
    const translate = async () => {
        setNeedTranslation(false)
        if (translate2Tot){
            const res = await transClient.Human2Tot(humanVal)
            setTotVal(res || "")
            return
        } 
        
        const res = await transClient.Tot2Human(totVal)
        setHumanVal(res || "")
        return
    }

    const humanTextArea = (
        <TranslatorTextAreaHuman 
                value={humanVal}
                disabled={!translate2Tot}
                onChange={(e)=>{setHumanVal(e.target.value); translate2Tot && setNeedTranslation(true) }}
            />
    )

    const totTextArea = (
        <TranslatorTextAreaTot
                value={totVal}
                disabled={translate2Tot}
                onChange={(e)=>{setTotVal(e.target.value); !translate2Tot && setNeedTranslation(true)}}
            />
    )

    return (
        <Container>
            {translate2Tot? humanTextArea : totTextArea}
            
            <SwitchLanguageButton onClick={()=>setTranslate2Tot(!translate2Tot)}>
                <img src="/translator/switch.png" style={{}} alt="" />
            </SwitchLanguageButton>

            {translate2Tot? totTextArea : humanTextArea}
        </Container>
    )
}

export default Translator;