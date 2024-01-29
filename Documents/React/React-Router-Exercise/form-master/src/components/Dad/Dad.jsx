import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";


const Dad = () => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex  items-center">
               <div className=" border-2 border-red-800 m-3 p-3 rounded-xl text-3xl text-center"> <Myself></Myself></div>
                <div className=" border-2 border-red-800 m-3 p-3 rounded-xl text-3xl text-center"><Brother></Brother></div>
            </section>
        </div>
    );
};

export default Dad; <h2>Dad</h2>