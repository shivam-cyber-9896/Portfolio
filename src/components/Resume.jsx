import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import resumeFile from '../assets/shivam-khatri-resume.pdf';

const Resume = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Credentials</p>
        <h2 className={styles.sectionHeadText}>Resume.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Download my resume to get a comprehensive overview of my skills, experience, and projects. I am always open to new opportunities and collaborations.
      </motion.p>

      <div className='mt-10 flex justify-center'>
        <a
          href={resumeFile}
          download="Shivam-Khatri-Resume.pdf"
          className='bg-glass py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-accent'
        >
          Download Resume
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Resume, 'resume');
