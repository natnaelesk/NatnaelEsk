import ProBox from "./ProBox";
import geeez from "./images/geez.png";
import CoinDom from "./images/coindom-full.png";

// import ProBox from "./ProBox";


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
                title="Geez Shoes"
                img={geeez}
                date="(Apr 2024)"
                description="A dedicated platform for local businesses to showcase their premium leather footwear and expand their reach to a wider audience online."
                techno1="React"
                techno2="Tailwind"
                code="https://github.com/natnaelesk/Geez"
                demo="https://natnaelesk.github.io/Geez/"
                scrollY="-83%"
                icon="👞"
              />

              <ProBox
                title="Dorm Delivery"
                date="(March 2024)"
                img={CoinDom}
                description="Mobile-friendly website for local cafe dorm delivery. Order easily from your phone!"
                techno1="Django"
                techno2="Tailwind"
                code="https://github.com/natnaelesk/WaseDormDelivery"
                demo="http://natnaelesk.pythonanywhere.com/"
                scrollY="-74%"
                icon="🚚"
                cName="reversed-proj"
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