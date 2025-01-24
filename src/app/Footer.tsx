import React from 'react';
import Image from 'next/image';
import assets from '@/assets';

const Footer = () => {
  return (
    <>
      <footer className='p-10'>
        <div className='flex items-center gap-10'>
          <Image src={assets.pr1} alt='Partner one' />
          <Image src={assets.pr2} alt='Partner two' />
          <Image src={assets.pr3} alt='Partner three' />
          <Image src={assets.pr4} alt='Partner four' />
        </div>

        <p className='mt-[32px]  font-medium leading-[25px] text-[16px] text-[#003119] opacity-[60%]'>
          Trusted by 35,000+ users to engage learners and ensuring
        </p>
      </footer>
    </>
  );
};

export default Footer;
