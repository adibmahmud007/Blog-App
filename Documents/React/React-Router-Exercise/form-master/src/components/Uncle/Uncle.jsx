import Cousin from "../Cousin/Cousin";


const Uncle = () => {
    return (
        <div>
           <h2>Uncle</h2> 
           <section className="flex">
            <div className="border-2 border-red-800 m-3 p-3 rounded-xl text-3xl text-center"><Cousin name={'mim'}></Cousin></div>
            <div className="border-2 border-red-800 m-3 p-3 rounded-xl text-3xl text-center"><Cousin name={'nahil'}></Cousin></div>
           </section>
        </div>
    );
};

export default Uncle;<h2>Uncle</h2>