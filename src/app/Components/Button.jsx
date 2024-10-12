const Button = ({text}) => {
    return (
        <button className='xl:w-[188px] p-3 md:p-4 lg:p-[16px] xl:p-[18px] bg-[#FD6F00] rounded-lg text-white xl:text-[21px]'>
            {text}
        </button>
    );
};

export default Button;