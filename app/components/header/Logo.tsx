import Image from 'next/image';

const Logo = () => {
  return (
    <div className='flex items-center gap-5'>
    <Image src='/images/LOGO.png' alt='WeBee Hive Logo' width={82} height={82}/>
    <Image src='/images/NAME.png' alt='Webee Hive' width={208} height={39} />
    </div>
  )
}

export default Logo;