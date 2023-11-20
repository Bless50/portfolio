import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import LandingPageSection from "./LandingPageSection";
import ProjectComponent from "./projectComponent";


const MainApp = () => {

    return (
        <div>
            <main>
                
                <LandingPageSection />
                <AboutMe/>
                <ProjectComponent />
                <ContactMe />
                <Footer />
            </main>
        </div>
    );
}

export default MainApp;