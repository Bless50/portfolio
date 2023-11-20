import github2 from './github2.svg';
import linkedin2 from './linkedin2.svg';

const Footer = () => {

    return (

        <>
            <div className='bg-dark d-flex  justify-content-center'>
                <p className="text-white  py-2 mb-0 lead fw-bold"> bless © 2023.</p>
                <a href='' className='py-2 mx-5'>
                    <img src={linkedin2} alt='linkedin-pic' />
                </a>
                <a href='' className='py-2 '>
                    <img src={github2} alt='github-pic' />
                </a>
            </div>
        </>
    );

}


export default Footer;