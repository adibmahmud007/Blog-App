import { NavLink } from "react-router-dom";


const Post = ({post}) => {
    const {id,title,body}=post;
    return (
        <div className="p-4 m-4 border border-orange-600">
            <h3 className="text-2xl font-bold">Post id: {id}</h3>
            <h4 className="text-xl font-semibold">Title: {title}</h4>
            <p>{body}</p>
            <NavLink to={`/post/${id}`}><button className="p-2 border bg-green-600 text-lg rounded-xl text-white hover:bg-green-900">Click to see post</button></NavLink>
        </div>
    );
};

export default Post;