import useInputState from "../../hooks/useInputState";


const HookForm = () => {

    const [name,handleNameChange]=useInputState('adib');


    const handleSubmit=e=>{
        e.preventDefault();
        console.log('form data',name);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;