import { Link, useNavigate } from "react-router-dom";


const User = ({user}) => {
    const {id,name,email,phone}=user;
    const userStyle={
        border: '2px solid red',
        padding: '10px',
        margin: '10px',
        borderRadius: '20px'
    }

    const navigate=useNavigate();


    const handleShowDetails=()=>{
        navigate(`/user/${id}`);
    }


    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone:{phone}</p>
            <Link to={`/user/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleShowDetails}>Click to see </button>
        </div>
    );
};

export default User;