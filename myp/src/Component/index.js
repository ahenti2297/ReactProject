import CardSub from "./CardSub";
import Prices from "./Prices";
import Subs from "./Subscribe";
import Big from "./BigCard";
import CardMulti from "./CardsMulti";

export default function TryIt(){
    return(
        <div>
            <Subs/>
            <CardSub/>
            <Prices/>
            <Big/>
            <CardMulti/>
        </div>       
    )
}