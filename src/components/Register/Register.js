import React from 'react';

const Register = () => {
    return (
        <section className='md:container'>
            <h2 className='text-4xl'>Register Now</h2>
            <div className='my-6'>
                E-mail:<input type="text" className='border-2 mx-3 rounded border-red-500' />
                Password: <input type='password' className='border-2 rounded border-red-500'/>
            </div>
            <button className='my-4 py-3 px-6 bg-red-400 hover:bg-red-500 rounded-lg'>Register</button>
            
            
        </section>

    );
};

export default Register;