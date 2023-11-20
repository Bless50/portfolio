import alx from './alx.jpg';
import github from './github.svg';
import boxarrow from './boxarrow.svg';
import eduma from './eduma.png';
import computer from './computer.png';
import book from './book.png';

const projectComponent = () => {

    return (

        <div>
            <div className='container-fluid  bg-light'>
                {/* the id here, is to come here when the project link is click */}
                <div id='project' className='container mt-5'>
                    

                    {/* alx clone project */}
                    <div className='row'>

                    <div className=' mt-3'> 
                      <h3 className='text-primary text-center fw-bold mb-5'>projects</h3>
                    </div>
                        <div className='col-sm mb-3'>
                            <h4 className=' text-sm-start mx-5  fw-bold ' style={{ color: "" }}>alx clone</h4>
                            <p className='mx-5 justify-content-enter' >
                                Dive into the exciting world of software engineering with us!
                                Our program provides a clear and straightforward
                                introduction
                                to the fundamentals of coding.
                                We've designed it to be easily understandable,
                                no matter your background or experience level.
                                It's like piecing together a puzzle, bit by bit,
                                each piece leading you closer to becoming a software
                                engineer.
                            </p>
                            {/* the tools used to build the projects */}
                            <div className='d-flex justify-content-center'>
                                <h4 className=''>React</h4>
                                <h4 className='mx-5'>Booststrap</h4>
                            </div>

                            <div className='d-flex justify-content-center mt-4 mb-4'>
                                <h5 className='mx-3'>
                                    <a href='https://github.com/Bless50/alx-clone/blob/main/index.html' className='text-dark'>
                                        code
                                        <img src={github} className='mx-2' alt='githbub' />
                                    </a>
                                </h5>
                                <h5 className='mx-5'>
                                    <a href='https://bless50.github.io/alx-clone/' className='text-dark'>
                                        Live demo
                                        <img src={boxarrow} style={{ width: "25px", marginLeft: "5px" }} alt='arrow box' />
                                    </a>
                                </h5>
                            </div>
                        </div>
                        <div className='col-sm text-center mb-4 '>
                            <img src={alx}
                                alt='alx-pic'
                                width='450px'
                                height='290px'
                                className='rounded'
                            />
                        </div>
                    </div>


                    {/* eduma clone*/}
                    <div className='row'>
                        <div className='col-sm text-center mb-4'>
                            <img src={eduma}
                                alt='alx-pic'
                                width='450px'
                                height='300px'
                                className='rounded'
                            />
                        </div>

                        <div className='col-sm mb-4'>
                            <h4 className=' text-sm-start mx-5 fw-bold'>Eduma clone</h4>
                            <p className='mx-5 justify-content-center text-secondary'>
                                Dive into the exciting world of software engineering with us!
                                Our program provides a clear and straightforward
                                introduction
                                to the fundamentals of coding.
                                We've designed it to be easily understandable,
                                no matter your background or experience level.
                                It's like piecing together a puzzle, bit by bit,
                                each piece leading you closer to becoming a software
                                engineer.
                            </p>
                            <div className='d-flex justify-content-center'>
                                <h4 className=''>React</h4>
                                <h4 className='mx-5'>Booststrap</h4>
                            </div>

                            <div className='d-flex justify-content-center mt-4 mb-4'>
                                <h5 className='mx-3'>
                                    <a href='https://github.com/Bless50/EDUMA-CLONE' className='text-dark'>
                                        code
                                        <img src={github} className='mx-2' alt='' />
                                    </a>
                                </h5>
                                <h5 className='mx-5'>
                                    <a href='https://bless50.github.io/EDUMA-CLONE/' className='text-dark'>
                                        Live demo
                                        <img src={boxarrow} style={{ width: "25px", marginLeft: "5px" }} alt='arrow box' />
                                    </a>
                                </h5>
                            </div>
                        </div>
                    </div>


                    {/* third project info */}
                    <div className='row'>
                        <div className='col-sm mb-4'>
                            <h4 className=' text-sm-start mx-5  fw-bold'>Master study</h4>
                            <p className='mx-5 justify-content-enter'>
                                Dive into the exciting world of software engineering with us!
                                Our program provides a clear and straightforward
                                introduction
                                to the fundamentals of coding.
                                We've designed it to be easily understandable,
                                no matter your background or experience level.
                                It's like piecing together a puzzle, bit by bit,
                                each piece leading you closer to becoming a software
                                engineer.
                            </p>
                            <div className='d-flex justify-content-center mb-3'>
                                <h4 className=''>React</h4>
                                <h4 className='mx-5'>Booststrap</h4>
                            </div>

                            <div className='d-flex justify-content-center mt-4 mb-4'>
                                <h5 className='mx-3'>
                                    <a href='https://github.com/Bless50/MASTER-STUDY-CLONE1' className='text-dark'>
                                        code
                                        <img src={github} className='mx-2' alt='' />
                                    </a>
                                </h5>
                                <h5 className='mx-5'>
                                    <a href='https://bless50.github.io/MASTER-STUDY-CLONE1/' className='text-dark'>
                                        Live demo
                                        <img src={boxarrow} style={{ width: "25px", marginLeft: "5px" }} alt='arrow box' />
                                    </a>
                                </h5>
                            </div>
                        </div>
                        <div className='col-sm text-center mb-4'>
                            <img src={computer}
                                alt='alx-pic'
                                width='450px'
                                height='300px'
                                className='rounded'
                            />
                        </div>
                    </div>


                    {/* last project info*/}
                    <div className='row'>
                        <div className='col-sm text-center '>
                            <img src={book}
                                alt='alx-pic'
                                width='450px'
                                height='300px'
                                className='rounded'
                            />
                        </div>
                        <div className='col-sm mb-3'>
                            <h4 className=' text-sm-start mx-5 fw-bold '>Education for all</h4>
                            <p className='mx-5 justify-content-enter'>
                                Dive into the exciting world of software engineering with us!
                                Our program provides a clear and straightforward
                                introduction
                                to the fundamentals of coding.
                                We've designed it to be easily understandable,
                                no matter your background or experience level.
                                It's like piecing together a puzzle, bit by bit,
                                each piece leading you closer to becoming a software
                                engineer.
                            </p>
                            <div className='d-flex justify-content-center'>
                                <h4 className=''>React</h4>
                                <h4 className='mx-5'>Booststrap</h4>
                            </div>

                            <div className='d-flex justify-content-center mt-4'>
                                <h5 className='mx-3'>
                                    <a href='https://github.com/Bless50/MASTER-STUDY-CLONE2' className='text-dark'>
                                        code
                                        <img src={github} className='mx-2' alt='' />
                                    </a>
                                </h5>
                                <h5 className='mx-5'>
                                    <a href='https://bless50.github.io/MASTER-STUDY-CLONE2/' className='text-dark'>
                                        Live demo
                                        <img src={boxarrow} style={{ width: "25px", marginLeft: "5px" }} alt='arrow box' />
                                    </a>
                                </h5>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default projectComponent;