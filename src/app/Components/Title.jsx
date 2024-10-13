

const Title = ({tittle,subtitle}) => {
    return (
        <div className='text-center'>
            <h1 className='text-[2.7rem] md:text-[4.063rem] font-semibold'>{tittle}</h1>
            <p className=' md:text-[1.313rem] xl:w-[55rem] mx-auto mt-4'>{subtitle}</p>
        </div>
    );
};

export default Title;