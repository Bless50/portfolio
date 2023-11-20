
import Header from './Header';
import image5 from './image5.jpg';
import linkedin from './linkedin.svg';
import github from './github.svg';
import html from './html.webp';
import css1 from './css1.png';
import React from './React.png';
import bootstrap from './bootstrap.png';
import javascript from './javascript.png';
import wave from './wave.png';
// import profilePicture from './profilePicture';

const LandingPageSection = () => {

    return (
        <div id='Home'>
            <div className="container-fluid mb-5 ">
                {/* rendering the header componet */}
                <Header />
                <div className='container  mb-5'
                    style={{ 
                        marginTop: "150px"
                     }}
                >
                    <div className='row'>
                        <div className='col-sm'></div>
                        {/* the text section */}
                        <div className='col-sm-4 text-center text-sm-start mb-4'>
                            <h1 className=' fw-bolder '>
                                Front-End React<br />
                                 <span style={{color: "#EE4B2B"}}>
                                    Developer
                                    <img src={wave} width='50px' alt="hand wave"/>
                                </span>
                            </h1>
                            <p className="py-2 text-secondary">
                                Hi,I am Njoh Bless. A passionate Front-End React<br />
                                Developer based in Cameroon, Yaounde.
                            </p>
                            <a href='https://www.linkedin.com/in/njoh-bless-a7b31021a/' className=''>
                                <img src={linkedin} alt='linkedin-pic' />
                            </a>
                            <a href='https://github.com/Bless50' className='px-3'>
                                <img src={github} alt='github-pic' />
                            </a>
                        </div>

                        {/* the image section */}
                        <div className='col-sm-4 text-center'>

                          {/* <profilePicture/> */}
                              
                            <img
                                src={image5}
                                alt=''
                                className="rounded-circle mx-2"
                                height="250px"
                                width="250px"   
                            />
                        </div>
                        <div className='col-sm'></div>
                    </div>

                </div>

                <div className="row "
                    style={{ marginTop: "100px", marginButtom: "100px" }}
                >
                    <div className='col-2'></div>
                    <div className='col-8 d-flex mb-5 justify-content-center'>
                        
                            <p className="fw-bold">
                                Tech stack
                            </p>
                            <img src={html} className=" mx-3" style={{ width: "30px", height: "30px" }} alt="html" />
                            <img src={css1} className="  mx-3" style={{ width: "30px", height: "30px" }} alt="css" />
                            <img src={React} className="  mx-3" style={{ width: "30px", height: "30px" }} alt="React" />
                            <img src={bootstrap} className="  mx-3" style={{ width: "30px", height: "30px" }} alt="booststrap" />
                            <img src={javascript} className=" mx-3 " style={{ width: "50px", height: "30px" }} alt="javascript" />
                        
                    </div>
                    <div className='col-2'></div>
                </div>
            </div>

        </div>
    );
}

export default LandingPageSection;