
// import { useState} from 'react';
import location from './location.svg';
import mail from './mail.svg';
import finger from './finger.png';

const ContactMe = () => {
   

    return (
        <section id='Contact'>
            <div className="container-fluid text-center bg-light"  >
                <div className="row  mx-5">
                    <h4 className=" mt-5 fw-bold mb-3 text-primary "
                    >
                        Contact 
                    </h4>
                   <h4 className='fw-bold'>
                    Don't be shy! Hit me Up!
                    <img src={finger} alt='finger'className='bg-light' width='25px' height=" 25px"/>
                   </h4>

                   <div className='d-flex mt-3 mb-5 justify-content-evenly '>
                        <h5>
                             <img src={location}  className='mx-2'  alt='location'/>
                             <span className='fw-bold'> Location</span> <br/>
                             <span className='text-secondary'> Yaounde, Cameroon</span> 
                        </h5>
                        <h5 className='mx-5 '>
                            <img src={mail} className='mx-2' alt="mail" />
                            <span className='fw-bold'> Mail</span> <br/>
                            <span className='text-secondary'> blessn691@gmail.com</span> 
                        </h5>
                   </div>
                
                </div>
            </div>
        </section>
    );
}

export default ContactMe;