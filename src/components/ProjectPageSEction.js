
import Card from "./Card";
import alx from './alx.png';
import eduma from './eduma.png';
import computer from './computer.png';
import book from './book.png';


const ProjectPageSection = () => {

    const projects = [
        {
            title: 'A clone of Introduction to software Engineering website',
            description:'Welcome to the Introduction to Software Engineering . ',
            link: 'https://bless50.gi/thub.io/alx-clone',
            image:alx, // Image file for Project 1
            languages : ' bootstrap, html, css',
          },
          {
            title: ' EDUMA CLONE',
            description: 'A website that allow users to buy courses and gain skills ',
            link: 'https://bless50.github.io/EDUMA-CLONE/',
            image: eduma, // Image file for Project 2
            languages : ' bootstrap, html, css',
          },

          {
            title: 'MASTER STUDY',
            description: ' master study is a website that offer courses with top teachers worldwide in many fields .',
            link: 'https://bless50.github.io/MASTER-STUDY-CLONE1/',
            image: computer, // Image file for Project 1
            languages : ' bootstrap, html, css',
          },
          {
            title: 'Education for all',
            description: 'Education for all is a web based application that let students around the world to purchase cheap courses.',
            link: 'https://bless50.github.io/MASTER-STUDY-CLONE2/',
            image: book, // Image file for Project 2
            languages : ' bootstrap, html, css',
          },
    ]
    return (
        <section>
            <div className="container-fluid  ">
                <div className="container">
                    <h2 className="mx-5 text-blackfs-50 py-5 mb-0 text-center ">Beginners Projects</h2>
                    <div className="row">
                      {projects.map( (projects, index) => {
                             return(
                              <div className="col-sm-6 g-4 mb-5" key={index}>
                                <Card  projects={projects}/>
                             </div>
                             );
                      })}  
                    </div>
                  
                </div>
            </div>
        </section>
    );
}

export default ProjectPageSection;