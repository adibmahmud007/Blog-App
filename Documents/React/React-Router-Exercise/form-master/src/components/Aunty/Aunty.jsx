import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";


const Aunty = () => {
    const [money,setMoney]=useContext(MoneyContext);
    return (
        
        <div>
           <h2>Aunty</h2> 
           <section className="flex">
            <div className="border-2 border-red-800 m-3 p-3 rounded-xl text-3xl text-center"><Cousin name={'xyz'}></Cousin></div>
            <div className="border-2 border-red-800 m-3 p-3 rounded-xl text-3xl text-center"><Cousin name={'asd'}></Cousin></div>
           </section>
           <p>Money: {money}</p>
           <button onClick={()=>setMoney(money+1000)}>Add Money</button>
        </div>
    );
};

export default Aunty;<h2>Aunty</h2>