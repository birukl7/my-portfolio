import React, { useState } from 'react';
import SecondaryBtn from '../components/SecondaryBtn';
import WorkCard from '../components/WorkCard';
import SectionTitle from '../components/SectionTitle';
import projects from '../projects-data/projectsCard';
import sorryImage from '/images/body-images/sorry.png'

function RecentWorks() {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const [selectedFilter, setSelectedFilter] = useState("Everything");

  const filters = ["Everything", 'UI/UX', 'Frontend', 'Backend', 'Database', 'Mobile App'];

  const handleOnClick = (buttonValue) => {
    if (buttonValue === 'Everything') {
      setFilteredProjects(projects);
    } else {
      const newSelected = projects.filter(project => project.catagory.includes(buttonValue));
      setFilteredProjects(newSelected);
    }
    setSelectedFilter(buttonValue);
  };

  return (
    <section id='works'>
      <SectionTitle text={'Recent Work'} />
      <div>
        <ul className='flex justify-start gap-x-5 gap-y-3 flex-wrap'>
          {
            filters.map((buttonValue, index) => (
              <SecondaryBtn
                text={buttonValue}
                key={index}
                active={selectedFilter === buttonValue}
                onClick={() => handleOnClick(buttonValue)}
              />
            ))
          }
        </ul>
        <div className={`${filteredProjects.length === 0 ? 'flex items-center justify-center':'grid sm:grid-cols-1 md:grid-cols-2 mg:grid-cols-3 mt-2 p-3 gap-x-5 gap-y-5 py-10 max-w-5xl mx-auto'} `}>
          {
            filteredProjects.length === 0 ? 
            
              <div className='flex items-center justify-center flex-col py-10 mt-2 p-3' style={{height: '494px'}}> 
              <img src={sorryImage} alt="" className='w-60 '/>
              <p className='ml-10' style={{textAlign: 'center'}}>No result
                </p></div> 
              :
              filteredProjects.map((project, index) => (
                <WorkCard
                  title={project.name}
                  firstTech={project.firstTech}
                  secondTech={project.secondTech}
                  description={project.descriptions[0]}
                  gitLink={project.githubLink}
                  category={project.catagory}
                  siteLink={project.siteLink}
                  readLink={project.readLink}
                  pics={project.pics}
                  key={project.id}
                />
              ))
          }
        </div>
      </div>
    </section>
  );
}

export default RecentWorks;
