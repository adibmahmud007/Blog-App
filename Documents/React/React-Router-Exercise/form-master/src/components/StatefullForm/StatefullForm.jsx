import { useState } from "react";


const StatefullForm = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState('your name');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be 6 character or more');
        }
        else {
            setError('');
            console.log(name);
            console.log(email);
            console.log(password);
        }
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} value={name} type="text" name="name" />
                <br />
                <input
                    onChange={handleEmailChange}
                    type="email" name="email" id="" />
                <br />
                <input
                    onChange={handlePasswordChange}
                    type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p className="text-black">{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefullForm;