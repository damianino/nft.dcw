import { APIURL } from "@/src/constants/shelbyContract";
import { Human2TotDir, Tot2HumanDir } from "@/src/constants/translator";
import axios from "axios";

export const GetRandomShelbyContractText = async (): Promise<string|null> => {
    const res = await axios.request({
        baseURL: APIURL
    })
    if (res.data.error){
        console.log(res.data.error)
        return null
    }

    return res.data.data
}