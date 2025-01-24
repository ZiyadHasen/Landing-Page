'use client';
import Choices from './Choices';
import Footer from './Footer';
import Header from './Header';
import MainHeader from './MainHeader';
import assets from '@/assets';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <section className='bg-[#F5F3F0] h-screen flex flex-col justify-between relative'>
      <Header />

      {/* Curved SVG positioned on the left side and centered vertically */}
      <Image
        src={assets.leftCurve}
        alt='Curved SVG'
        className='absolute left-0 top-1/2 transform -translate-y-1/2'
      />

      {/* Curved SVG positioned on the right side and centered vertically */}
      <Image
        src={assets.RightCurve}
        alt='Curved SVG'
        className='absolute right-0 top-1/2 transform -translate-y-1/2'
      />

      <main className='relative'>
        <MainHeader />
        <Choices />
      </main>

      <Footer />
    </section>
  );
};

export default LandingPage;
