import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Special = () => {
    const gift=useContext(AssetContext);
    return (
        <div className="border-2 border-red-800 mt-7 p-3 rounded-xl">
            <h2 >Special</h2>    
            <p>has {gift}</p>        
        </div>
    );
};

export default Special;