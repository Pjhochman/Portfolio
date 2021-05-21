import React from 'react';
import About from './About/About';
import Facts from './Facts/Facts';
import Footer from './Footer/Footer';
import Resume from './Resume/Resume';
import FadeIn from './animations';

const AboutPage = () => (
  <FadeIn>
    {window.location.pathname === '/about' && (
      <>
        <About />
        <Facts />
        <Resume />
        <Footer />
      </>
    )}
  </FadeIn>
);

export default AboutPage;
