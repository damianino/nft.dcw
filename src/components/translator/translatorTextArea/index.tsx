import { Dispatch, FunctionComponent, SetStateAction, useEffect, useMemo, useRef, useState } from "react";
import { BG, TranslatorBox } from "../styled";
import { CopyButton, TextArea } from "./styled";
import "@/src/styles/components/translator/translatorTextArea/index.css"
import Props from "@/src/types/components/translator/translatorTextArea";

const copyValueClipboard = (value: string) => {
    navigator.clipboard.writeText(value)
}

const handleCopyClick = (value: string, setCopyButtonImg: Dispatch<SetStateAction<string>>) => {
    copyValueClipboard(value);
    setCopyButtonImg("/translator/done.png")

    setTimeout(()=>{
        setCopyButtonImg("/translator/copy.png")
    }, 1000)
}

export const TranslatorTextAreaHuman: FunctionComponent<Props> = ({ disabled, value, onChange }) => {
    const [copyButtonImg, setCopyButtonImg] = useState("/translator/copy.png")

    return (
        <TranslatorBox>
            <TextArea spellCheck={false} style={{
                top: "20%",
                left: "16%",
                width: "63%",
                height: "66%",
            }} value={value} disabled={disabled} onChange={onChange} />
            <BG src={"/translator/human.png"} />
            <CopyButton style={{
                width: "9%",
                height: "12%",
                bottom: "11%",
                right: "18%",
                position: "absolute",
            }} src={copyButtonImg} onClick={() => handleCopyClick(value, setCopyButtonImg)} />
        </TranslatorBox>
    )
}

export const TranslatorTextAreaTot: FunctionComponent<Props> = ({ disabled, value, onChange }) => {
    const [copyButtonImg, setCopyButtonImg] = useState("/translator/copy.png")

    return (
        <TranslatorBox>
            <TextArea spellCheck={false} style={{
                top: "20%",
                left: "16%",
                width: "68%",
                height: "67%",
            }} value={value} disabled={disabled} onChange={onChange} />
            <BG src={"/translator/tot.png"} />
            <CopyButton style={{
                height: "12%",
                width: "9%",
                bottom: "13%",
                right: "16%",
                position: "absolute",
            }} src={copyButtonImg} onClick={() => handleCopyClick(value, setCopyButtonImg)} />            
        </TranslatorBox>
    )
}