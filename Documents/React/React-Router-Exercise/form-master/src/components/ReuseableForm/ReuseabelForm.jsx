

const ReuseabelForm = ({formTitle,submitbtntitle='Submit',handleSubmit,children}) => {
    const handleLocalSubmit=e=>{
        e.preventDefault();
        const data={
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }
    return (
        <div>
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value={submitbtntitle} />
            </form>
        </div>
    );
};

export default ReuseabelForm;