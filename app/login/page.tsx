'use client';
import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation';
import { Link } from '@mui/material';
import Input from '@/components/input/Input';

interface InitialStateProps {
    email: string;
    password: string;
}

const initialState:InitialStateProps = {
    email: '',
    password: '',
}

export default function LoginPage() {

    const [state, setState] = useState(initialState);
    const router = useRouter();

    const handleChange = (e:any) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const onSubmit = (event:FormEvent) => {
        event.preventDefault()
        
        signIn('credentials', {
            ...state,
            redirect:false,
        })
        .then((callback: { ok: any; error: any; }) => {
            if(callback?.ok) {
                router.refresh()
            }
            if(callback?.error) {
                throw new Error('Wrong Credentials')
            }
        })
        router.push('/')
    }

  return (
    <form 
        className='text-center'
        onSubmit={onSubmit}
    >
        <div className='
            flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2
        '>
            <Input placeholder='Email' name='email' id='email' type='email' onChange={handleChange} value={state.email} />
            <Input placeholder='Password' name='password' id='password' type='password' onChange={handleChange} value={state.password} />
            <button 
                type="submit"
                className='px-6 py-3 flex items-center justify-center bg-blue-700 border-none text-white hover:bg-blue-500 focus:border focus border-gray-200 transition ease-out'
            >
                Sign in
            </button>
        </div>
        <div>You already have an account ? <Link href='/register'>Sign up</Link> </div>
    </form>
  )
}


