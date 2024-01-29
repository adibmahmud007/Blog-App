import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {

    const users=useLoaderData();

    

    return (
        <div>
            <h2>Users Section</h2>
            <p>Here you can see our users</p>
            <div>
                {
                    users.map(user=><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;