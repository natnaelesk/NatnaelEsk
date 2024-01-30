import Gymate from "./images/gymate-home.webp";
import Raouf from "./images/ecom.webp";
import ProBox from "./ProBox";
import CarRental from "./images/restorant.png";
import CoinDom from "./images/coindom-full.png";


const Projects = () => {
    return ( 
        <>
        <section id="projects" className="project">
          <div className="container">
            <div className="project-content">
              <p>portfolio</p>
              <h3>Each project is a unique piece of development 🧩</h3>
              <div className="projects-grid">
                <ProBox
                  title="Reastorant"
                  img={CarRental}
                  date="(jan 2024)"
                  description="A restaurant website is your virtual passport to culinary delight."
                  techno1="React"
                  techno2="Tailwind"
                  code="https://github.com/stefvndev/car-rental"
                  demo="https://car-rental-ten.vercel.app/"
                  scrollY="-83%"
                  icon="🚗"
                />
                <ProBox
                  title="Gymate"
                  date="(January 2023)"
                  img={Gymate}
                  description="A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals."
                  techno1="React"
                  techno2="Tailwind CSS"
                  code="https://github.com/stefvndev/Gymate"
                  demo="https://gymate-iota.vercel.app/"
                  scrollY="-89%"
                  icon="🏋️"
                />
  
              </div>
              
            </div>
            {/* <h2 className="new-projects">New projects coming soon.. 🤠</h2> */}
          </div>
        </section>
      </>
     );
}
 
export default Projects;