'use client';

interface InputProps {
    type: any;
    value: any;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    id: string;
    placeholder?: string;
    big?: boolean;
}


const Input: React.FC<InputProps> = ({
    type,
    value,
    onChange,
    name,
    id,
    placeholder,
    big
}) => {
  return (
    <input 
        type={type} 
        value={value} 
        onChange={onChange} 
        name={name} id={id} 
        placeholder={placeholder}
        className={`
            w-full
            p-4
            pt-6
            font-light
            border-2
            outline-none
            text-black
            ${big ? 'w-[400px] pb-[6rem]' : ''}
        `}
    />
  )
}

export default Input