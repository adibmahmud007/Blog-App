import { useEffect, useRef } from "react";


const RefForm = () => {

    const name=useRef(null);
    const email=useRef(null);
    const passowrd=useRef(null);

    useEffect(()=>{
        name.current.focus();
    },[])



    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(name.current.value);
        console.log(email.current.value);
        console.log(passowrd.current.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={name} type="text" defaultValue={'adib'} name="name" />
                <br />
                <input ref={email} type="email" name="email" id="" />
                <br />
                <input ref={passowrd} type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;