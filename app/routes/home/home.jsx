import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Software Developer',
    description: `Portfolio of ${config.name} — a software designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const projectSeven = useRef();
  const projectEight = useRef();
  const projectNine = useRef();
  const projectTen = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven, projectEight, projectNine, projectTen, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Designing the future of Jewellery"
        description="Designed a full stack e-commerce platform for a jewellery brand - The Quartz Home"
        buttonText="View project"
        buttonLink="https://thequartzhome.com"
        model={{
          type: 'laptop',
          alt: 'The Quartz Home : Jewellery E-commerce',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="One Stop Marketplace for Bicycle Commutes"
        description="Designed cross platform mobibe app for Bicycle Communters in a university ecosystem built in Flutter"
        buttonText="View website"
        buttonLink="https://sycleapp.netlify.app/"
        model={{
          type: 'phone',
          alt: 'Sycle app',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="ConciAI : The Hotel Corcierge"
        description="Developed the end to end edge device (similar to amazon echo) and a centralised backend using FastAPI powered by Gemini 2.0 Flash to address and manage user queries automatically with a next.js based staff dashboard to manage the interfacing"
        buttonText="View project"
        buttonLink="https://conciai-cbz18u0.gamma.site/"
        model={{
          type: 'laptop',
          alt: 'ConciAI Deck',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />



<ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Tirutsava 2k25 : The Annual Fest"
        description="Developed the entire design and front-end from scratch for the annual techno-cultural fest of IIT Tirupati, Tirutsava 2k25, using Next.js, Tailwind CSS, Chakra UI, Framer Motion, acertinity UI, FastAPI, and Docker."
        buttonText="View project"
        buttonLink="https://tirutsava.com/"
        model={{
          type: 'laptop',
          alt: 'Tirutsava 2k25 website',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />


<ProjectSummary
        id="project-5"
        alternate
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Trumio AI : The AI powered project marketplace"
        description="Designed cross platform mobibe app in flutter for university-client ecosystem to bridge gap between students, professor, universities, and clients to bid for better project with AI powered matching and services like vetting, in-payments, project reviews, and much more"
        buttonText="View website"
        buttonLink="https://github.com/vaibhavmsra2021/Projectbase_marketplace"
        model={{
          type: 'phone',
          alt: 'Trumio AI app',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />



<ProjectSummary
        id="project-6"
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="TEDxIITTirupati : Independent TEDx event 2k25"
        description="Developed the entire design and front-end from scratch for the Independently hosted TEDx event held at IIT Tirupati in 2k25, using Figma, Next.js, Tailwind CSS, Chakra UI, Framer Motion, Acertinity UI, FastAPI, Razorpay, Google APIs, and Docker."
        buttonText="View project"
        buttonLink="https://tedxiittirupati.ecelliitt.in/"
        model={{
          type: 'laptop',
          alt: 'TEDx IIT Tirupati website',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />


<ProjectSummary
        id="project-7"
        sectionRef={projectSeven}
        visible={visibleSections.includes(projectSeven.current)}
        index={7}
        title="Entrepreneurship Cell IIT Tirupati"
        description="Developed the entire webdesign and front-end from scratch for the Entrepreneurship Society at IIT Tirupati, using Figma, React.js, Tailwind CSS, Chakra UI, Framer Motion, Acertinity UI, FastAPI, Google APIs, Hostinger, AWS."
        buttonText="View project"
        buttonLink="https://ecelliitt.in/"
        model={{
          type: 'laptop',
          alt: 'E-Cell IIT Tirupati website',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />



<ProjectSummary
        id="project-8"
        alternate
        sectionRef={projectEight}
        visible={visibleSections.includes(projectEight.current)}
        index={8}
        title="Unlock Jee : Ultimate JEE Preparation Guide"
        description="Designed cross platform mobibe app in flutter for jee aspirants to prepare for JEE with features like question bank, mock tests, and much more"
        buttonText="View website"
        buttonLink="https://github.com/vaibhavmsra2021/unlockjeeadndroid"
        model={{
          type: 'phone',
          alt: 'Unlock Jee app',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />



      <ProjectSummary
        id="project-9"
        sectionRef={projectNine}
        visible={visibleSections.includes(projectNine.current)}
        index={9}
        title="MultiLingo : The AI powered translator"
        description="Developed a basic AI powered translator using Gemini Flash 2.0 model, which can translate text between multiple languages."
        buttonText="View project"
        buttonLink="https://vaibhavmsra2021.github.io/My-Translator/"
        model={{
          type: 'laptop',
          alt: 'Mulitlingo translator',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />



      <ProjectSummary
        id="project-10"
        sectionRef={projectTen}
        visible={visibleSections.includes(projectTen.current)}
        index={10}
        title="Lusso Ventures : The Luxury Real Estate Broker"
        description="Developed a Next.js based website for a luxury real estate broker, Lusso Ventures, with features like property listings, search, and much more."
        buttonText="View project"
        buttonLink="https://www.lusso.ventures/"
        model={{
          type: 'laptop',
          alt: 'Mulitlingo translator',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />


      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
