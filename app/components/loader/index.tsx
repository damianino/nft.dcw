import { BG, Spinner, Wrapper } from "./styled"

const Loader = () => {

    return (
        <BG>
       <Wrapper>
            
            <Spinner src="/loader.png"/>

       </Wrapper>
       </BG>
    )
}

export default Loader;