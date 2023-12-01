import {useEffect} from 'react'
import AccordionItem from "./components/AccordionItem.jsx";
import './App.css'

export default function App() {

  const accordionData = [
    {
      title: 'What is Frontend Mentor, and how will it help me?',
      content: 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.'
    },
    {
      title: 'Is Frontend Mentor free?',
      content: 'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.'
    },
    {
      title: 'Can I use Frontend Mentor projects in my portfolio?',
      content: 'Yes, you can use projects completed on Frontend Mentor in your portfolio. It\'s an excellent way to showcase your skills to potential employers!'
    },
    {
      title: 'How can I get help if I\'m stuck on a challenge?',
      content: 'The best place to get help is inside Frontend Mentor\'s Discord community. There\'s a help channel where you can ask questions and seek support from other community members.'
    },
  ]

  const handleAccordion = (e) => {
    const pElement = e.currentTarget.querySelector('p');
    if (pElement) {
      if (pElement.classList.contains('hidden')) {
        pElement.classList.remove('hidden');
        pElement.classList.add('visible');
      } else {
        pElement.classList.remove('visible');
        pElement.classList.add('hidden');
      }
    }
  }


  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 512px)');
    const changeHandler = (e) => {
      const imgContainer = document.querySelector('.img-container img');
      imgContainer.src = e.matches
        ? '/src/assets/images/background-pattern-mobile.svg'
        : '/src/assets/images/background-pattern-desktop.svg';
    };

    mediaQuery.addEventListener('change', changeHandler);
    changeHandler(mediaQuery);

    return () => {
      mediaQuery.removeEventListener('change', changeHandler);
    };
  }, []);


  return (
    <>
      <header className="img-container">
        <img src="/src/assets/images/background-pattern-mobile.svg" alt="bg_img"/>
      </header>
      <main className="main-container">
        <div className="accordion-wrapper">
          <div className="accordion-header">
            <img src="/src/assets/images/icon-star.svg" alt="star"/>
            <h1>FAQs</h1>
          </div>
          <ul className="accordion-list">
            {accordionData.map((item, index) => (
              <AccordionItem key={index} title={item.title} content={item.content} onClick={handleAccordion}/>
            ))}
          </ul>
          <div className="attribution">
            <p>Challenge by&nbsp;<a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>
              &nbsp;Coded by&nbsp;<a href="https://github.com/eestaniel" target="_blank" rel="noreferrer">eestaniel</a>.
            </p>
          </div>
        </div>

      </main>

    </>
  )
}

