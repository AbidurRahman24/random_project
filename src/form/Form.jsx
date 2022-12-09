import React, { useEffect , useState} from 'react';

const Form = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length < 6){
            setError('please provide at last 6 latter')
            return
        }
        alert('login successfuly')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Type here" name="email" onBlur={(e)=>setEmail(e.target.value)} className="input input-bordered input-primary w-full max-w-xs" required/> <br />
            <input type="password" placeholder="Type here"  name="password" onBlur={(e)=>setPassword(e.target.value)} className="input input-bordered input-primary w-full max-w-xs" required/> <br />
            {error} <br />
            <input type="submit" disabled={!email} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default Form;
