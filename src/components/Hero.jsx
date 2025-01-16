const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-[url('/path_to_background_image.jpg')] bg-cover text-white">
      <div className="text-center flex lg:flex-row gap-10 mt-15 flex-col sm:mt-15 md:mt-15">
        <div className="flex-1 px-5">
          <h1 className='font-black text-white lg:text-[30px] sm:text-[20px] text-[20px] mt-3 text-gray-400'>Hello, I'm</h1>
          <h1 className='font-black text-white lg:text-[50px] sm:text-[40px] text-[30px] mt-3'>Harshitha Naladala</h1>
          <p className='font-black text-white lg:text-[35px] sm:text-[25px] text-[25px] mt-3 text-gray-300 mb-8'>Full-Stack Developer</p>
          <a href="/HR.pdf" download="Harshitha_Naladala_Resume.pdf" className="bg-purple-700 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">Download Resume</a>
          <div className='flex flex-row gap-5 items-center justify-center mt-5'>
            <img
              src="/linkedin.png"
              alt="My LinkedIn profile"
              onClick={() => window.location.href='https://www.linkedin.com/in/harshitha-naladala/'}
              className='w-10 h-10 object-contain rounded-full p-1 hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer'
            />
            <img
              src="/github.png"
              alt="My Github profile"
              onClick={() => window.location.href='https://github.com/HarshithaNaladala'}
              className='w-10 h-10 object-contain rounded-full p-1 hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer'
            />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center px-5'>
          <img src="/profileimg.jpg" alt="Harshitha" className="lg:w-80 lg:h-80 rounded-full object-cover mb-4 sm:w-60 sm:h-60 w-40 h-40"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;

