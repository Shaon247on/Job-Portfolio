import React from 'react';
import Title from './Title';
import Button from './Button';

const Contact = () => {
    return (
        <div id='contact' className='mt-20 md:mt-6 pb-8'>
            <Title tittle='Lets Design Together' subtitle="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium" />
            <div className='flex flex-col md:flex-row gap-6 text-center justify-center mt-[5.4rem]'>
                <input type="text" placeholder="Type here" className="text-[1.313rem] border-[#797979] border-2 rounded-2xl input md:w-[26rem] lg:w-[39.188rem] h-[4.688rem] bg-[#F8F8F8]" />
                <Button text='Contact Me' />
            </div>
        </div>
    );
};

export default Contact;