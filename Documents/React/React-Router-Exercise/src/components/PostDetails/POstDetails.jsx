import { useLoaderData, useNavigate } from "react-router-dom";


const POstDetails = () => {
    const posts=useLoaderData();
    const navigate=useNavigate();
    const handleGoBack=()=>{
        navigate (-1);
    }
    const {id,title,body}=posts;
    return (
        <div className="p-4 ">
            <h2 className="text-3xl font-bold text-center mb-5">The Post Number:{id}</h2>
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-xl mb-3">{body}</p>
            <div className="text-center">
            <button onClick={handleGoBack} className="bg-green-600 px-5 py-2 rounded-2xl text-xl ">Back</button>
            </div>
        </div>
    );
};

export default POstDetails;