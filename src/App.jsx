import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import { profile } from './data/portofolio';
import Skills from './components/Skills';
import { skills, projects, socials } from './data/portofolio';
import Projects from './components/Projects';
import Contact from './components/Contacts';
function App() {
 

  return (
    <>
      <Navbar initials={profile.initials} />
      
      {/* Pass the whole profile object as a prop */}
     

      <Hero profile={profile} />
      <About profile={profile}/>
      <Skills profile={profile} skills={skills}/>
      <Projects projects={projects}/>
      <Contact socials={socials}/>
     
    </>
  );
}

export default App