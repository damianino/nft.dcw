import { Human2TotDir, Tot2HumanDir } from "@/src/constants/translator";
import axios from "axios";

class TranslatorClient {
    private APIURL: string = "";

    constructor(APIURL: string){
        this.APIURL = APIURL
    }

    public async Human2Tot (text:string): Promise<string|null> {
        const trans = await this.Translate({
            direction: Human2TotDir,
            text
        })
        if (trans == null) {
            console.log("something went wrong")
            return null
        }
        return trans
    }

    public async Tot2Human (text:string): Promise<string|null> {
        const trans = await this.Translate({
            direction: Tot2HumanDir,
            text
        })
        if (trans == null) {
            console.log("something went wrong")
            return null
        }
        return trans
    }

    private async Translate (req: APIRequest): Promise<string|null> {
        var res = null
        try {
            res = await axios.post(this.APIURL, req)
        } 
        catch(err){
            console.log(err)
            return null
        }
        return res.data.data || null
    }
}

export default TranslatorClient