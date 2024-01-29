import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {
    const users=useLoaderData();
    const navigate=useNavigate();
    const {name,website}=users;


    const handleGoBack=()=>{
        navigate(-1);
    }

    return (
        <div>
            <h2>User Details here of {name}</h2>
            <h4>Visit me: {website}</h4>
            <button onClick={handleGoBack}>Back</button>
        </div>
    );
};

export default UserDetails;