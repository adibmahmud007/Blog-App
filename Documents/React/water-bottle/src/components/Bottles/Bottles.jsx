import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../../Utilities/localStorage";


const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))

    }, [])

    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }

    const handleRemoveFromCaart=id=>
    {
        const remainingCart=cart.filter(bottle => bottle.id !==id);
        setCart(remainingCart);
        removeFromLS(id);
    }


    //load cart from local storage
    useEffect(()=>{
        if(bottles.length > 0){
            const storedCart=getStoredCart();
            console.log(storedCart);
            const savedCart=[];
            for(const id of storedCart){
                console.log(id);
                const bottle =bottles.find(bottle => bottle.id === id);
                if(bottle){
                    savedCart.push(bottle);
                }
            }
           console.log(savedCart,'saved cart'); 
           setCart(savedCart);
        }
    },[bottles])

    return (
        <div>
            <h2>Water Bottle: {bottles.length}</h2>
            <h3>Items added to cart: {cart.length}</h3>
            <div className="bottle-cart">
                
                {
                    cart.map(crt => <h4 key={crt.id}><img key={crt.id} src={crt.img}></img><br />Name:{crt.name} <br /> <p>Price: {crt.price}</p><br />
                    <button onClick={()=>handleRemoveFromCaart(crt.id)}>Remove</button>
                    </h4>
                    )
                }
            </div>

            <div className="bottles-section">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} handleAddToCart={handleAddToCart} bottle={bottle}></Bottle>)
                }
            </div>
            
        </div>
    );
};

export default Bottles;