import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();

    let errorElement;

    if(loading || loading1){
        return <Loading></Loading>
    }
    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate('/')
    }


    return (
        <div>
            <div className='d-flex align-items-center '>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
                <p className='mt-2 p-2'>or</p>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
            </div>
            <div>
                {errorElement}
                {loading || loading1 ? <p>Loading...</p> : <></>}
                <button onClick={() => signInWithGoogle()} className='btn btn-outline-primary d-block w-75 mx-auto  mb-2'>
                    <img src={google} className='me-3' width='30px' alt="" />
                    <span style={{ fontWeight: 'bold' }}>Google Sign In</span>
                </button>
                <button className='btn btn-outline-primary d-block w-75 mx-auto mb-2 '>
                    <img src={facebook} className='me-3' width='30px' alt="" />
                    <span style={{ fontWeight: 'bold' }}>Facebook Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-outline-primary d-block w-75 mx-auto  '>
                    <img src={github} className='me-3' width='30px' alt="" />
                    <span style={{ fontWeight: 'bold' }}>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;