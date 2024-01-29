import PropTypes from 'prop-types';
import './Bottle.css'
const Bottle = ({bottle,handleAddToCart}) => {
    console.log(bottle,'bottle object console');
    const{name,img,price,ratings}=bottle;
    return (
        <div className="bottle">
            <img src={img}></img>
            <h4>Bottle:{name} </h4>
            <p>Price:{price} </p>
            <p>Rating: {ratings}</p>
            <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes={
    bottle : PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Bottle;