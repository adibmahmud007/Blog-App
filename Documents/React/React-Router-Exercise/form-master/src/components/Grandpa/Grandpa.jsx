import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

export const AssetContext=createContext('gold');
export const MoneyContext=createContext(1000);

const Grandpa = () => {

    const [money,setMoney]=useState(1000);

    return (
        <div className="border-2 border-red-800 mt-7 p-3 rounded-xl ">
            
                <h2 className="text-3xl font-extrabold my-5">Grandpa has : {money}</h2>
          <MoneyContext.Provider value={[money,setMoney]}>
          <AssetContext.Provider value="gold">
          <section className="flex  m-auto  text-center ">
            <div className="  border-2 border-red-800 m-3 p-3 rounded-xl text-3xl text-center"> <Dad></Dad></div>
            <div className="  border-2 border-red-800 m-3 p-3 rounded-xl text-3xl text-center"><Uncle></Uncle></div>
            <div className="  border-2 border-red-800 m-3 p-3 rounded-xl text-3xl text-center"><Aunty></Aunty></div>
            </section>
          </AssetContext.Provider>
          </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;