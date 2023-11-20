
import about from './about.png';
const AboutMe = () => {

    return (

        <div id='AboutMe' className="container mt-5 mb-5">
            <div  className="row ">
                <div className="col text-center p-">
                    <div>
                        <img src={about}
                         width="450px"
                         height="300px"
                            
                        alt="about-pic" />
                    </div>
                </div>
                <div className='col text-center text-sm-start'> 
                    <div className="">
                        <h3 className="text-primary mx-5"> About me</h3>
                        <p className=" mx-5 align-items-start text-secondary ">
                            "I am a dedicated junior frontend developer proficient in React and Bootstrap,
                            specializing in crafting seamless user interfaces and interactive web
                            applications. With a creative approach
                            and attention to detail, I transform ideas into visually appealing and
                            responsive websites. My expertise lies in utilizing
                            React's component-based architecture to build dynamic interfaces,
                            while Bootstrap's flexible grid system ensures optimal layouts across devices.
                            
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AboutMe;