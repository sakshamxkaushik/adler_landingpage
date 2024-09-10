import Image from 'next/image';
import Logo from '../assets/images/logo.png';

export const HeroSection = () => {
  return (
    <section className="   bg-gradient-to-b from-blue-50 to-gray-100 py-16 lg:py-24">
      <div className=" container mx-auto px-4 flex flex-col items-center justify-center text-center">
        {/* Logo Section */}
        <div className="relative w-40 h-40 lg:w-56 lg:h-56 mb-8   overflow-hidden">
          <Image
            src={Logo}
            alt="Adler Logo"
            objectFit="contain"
            priority={true} // Ensures faster loading
          />
        </div>

        {/* Hero Text */}
        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-800 mb-4 tracking-tight">
          Let's Build Something Amazing Together
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 max-w-2xl">
          Unlock your next project’s potential with immersive and interactive experiences. Adler is ready to help you make it happen.
        </p>

        {/* Call-to-Action Button */}
        <div className="mt-8">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg rounded-full shadow-lg transform transition hover:scale-105 hover:bg-blue-700 duration-300">
            Get Early Access
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
