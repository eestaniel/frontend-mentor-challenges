import {useEffect} from 'react'

import './App.css'

export default function App() {

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

    // change img src
    const imgElement = e.currentTarget.querySelector('img');
    if (imgElement) {
      if (imgElement.getAttribute('src') === '/src/assets/images/icon-plus.svg') {
        imgElement.setAttribute('src', '/src/assets/images/icon-minus.svg');
      } else {
        imgElement.setAttribute('src', '/src/assets/images/icon-plus.svg');
      }
    }
  }

  function updateImageSource() {
    const imgContainer = document.querySelector('.img-container img');
    if (window.innerWidth <= 512) {
      imgContainer.src = '/src/assets/images/background-pattern-mobile.svg';
    } else {
      imgContainer.src = '/src/assets/images/background-pattern-desktop.svg';
    }
  }

  useEffect(() => {
    window.addEventListener('resize', updateImageSource);
    return () => {
      window.removeEventListener('resize', updateImageSource);
    }
  }, [])

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
            <li onClick={(e) => handleAccordion(e)}>
              <div className="accordion-question">
                <h3>What is Frontend Mentor, and how will it help me?</h3>
                <img src="/src/assets/images/icon-plus.svg" alt="plus"/>
              </div>
              <p className="hidden">Frontend Mentor offers realistic coding challenges to help developers improve their
                frontend coding
                skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio
                building.</p>
            </li>
            <li className="border" onClick={(e) => handleAccordion(e)}>
              <div className="accordion-question">
                <h3>Is Frontend Mentor free?</h3>
                <img src="/src/assets/images/icon-plus.svg" alt="plus"/>
              </div>
              <p className="hidden">Yes, Frontend Mentor offers both free and premium coding challenges, with the free
                option providing access to a range of projects suitable for all skill levels.</p>
            </li>
            <li className="border" onClick={(e) => handleAccordion(e)}>
              <div className="accordion-question">
                <h3>Can I use Frontend Mentor projects in my portfolio?</h3>
                <img src="/src/assets/images/icon-plus.svg" alt="plus"/>
              </div>
              <p className="hidden">Yes, you can use projects completed on Frontend Mentor in your portfolio. It&apos;s
                an excellent
                way to showcase your skills to potential employers!</p>
            </li>
            <li className="border" onClick={(e) => handleAccordion(e)}>
              <div className="accordion-question">
                <h3>How can I get help if I&apos;m stuck on a challenge?</h3>
                <img src="/src/assets/images/icon-plus.svg" alt="plus"/>
              </div>
              <p className="hidden">The best place to get help is inside Frontend Mentor&apos;s Discord community.
                There&apos;s a help
                channel where you can ask questions and seek support from other community members.</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

