'use client';
import React, { FormEvent, useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Link } from '@mui/material';
import Input from '@/components/input/Input';

interface InitialStateProps {
    name: string;
    email: string;
    password: string;
}

const initialState:InitialStateProps = {
    name: '',
    email: '',
    password: '',
}

export default function RegisterPage() {

    const [state, setState] = useState(initialState);
    const router = useRouter();

    const handleChange = (e:any) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const onSubmit = (event:FormEvent) => {
        event.preventDefault()
        axios.post('/api/register', state)
        .then(() => {
            router.refresh()
        })
        .then(() => {
            setTimeout(() => {
                router.push('/login')
            },2500)
        })
        .catch((err:any) => {
            console.log(err)
        })
        .finally(() => {
        })
    }

  return (
    <form 
        className='text-center'
        onSubmit={onSubmit}
    >
        <div className='
            flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2
        '>
            <Input placeholder='Name' name='name' id='name' type='text' onChange={handleChange} value={state.name} />
            <Input placeholder='Email' name='email' id='email' type='email' onChange={handleChange} value={state.email} />
            <Input placeholder='Password' name='password' id='password' type='password' onChange={handleChange} value={state.password} />
            <button 
                type="submit"
                className='px-6 py-3 flex items-center justify-center bg-blue-700 border-none text-white hover:bg-blue-500 focus:border focus border-gray-200 transition ease-out'
            >
                Sign up
            </button>
        </div>
        <div>Do you have an account ? <Link href='/login'>Sign in</Link> </div>
    </form>
  )
}
