import React from 'react'
import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return <section className='bg-white py-20' id='about'>
    <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
            <SectionTitle text="Crafting Digital Experiences" />
            <p className='text-slate-600 leading-loose'> With a passion for transforming ideas into reality, I specialize in creating user-friendly and engaging web applications. My journey in web development combines creativity with technical expertise, enabling me to build seamless interfaces and robust back-end systems. I believe in continuous learning and strive to stay updated with the latest trends and technologies to deliver high-quality solutions that meet user needs.
            </p>
        </article>
    </div>
  </section>
}

export default About
