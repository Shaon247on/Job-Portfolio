import Image from 'next/image';


export const metadata = {
    title: "Portfolio | Slide Data",
    description: "All information of the slide",
  };
const Slide = ({ image }) => {
    return (
        <div className='py-20 flex flex-col md:flex-row items-center justify-center gap-3 p-5 bg-[#f0ecec] rounded-lg'>
            <div className=' '>
                <Image src={image} width={235} height={235} className='rounded-full max-h-60 max-w-60 object-cover object-center' alt='' />
            </div>
            <div>
                <h1 className='text-black text-[1rem] lg:text-[1.313rem] xl:w-[40rem]'><span className='text-primary'> &ldquo; </span>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.<span className='text-primary'> &ldquo; </span></h1>
                <p className='text-[1.5rem] text-black font-semibold mt-5'>Name</p>
                <p className='text-black'>CEO</p>
            </div>
        </div>
    );
};

export default Slide;