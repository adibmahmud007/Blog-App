

const Watch = ({watch}) => {
   const {name,price}=watch;
    return (
        <div>
            <h4>Watch: {name}</h4>
            <p>Name: {price} </p>
        </div>
    );
};

export default Watch;