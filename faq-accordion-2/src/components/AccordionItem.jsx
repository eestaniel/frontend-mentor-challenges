import {useState} from 'react';


export default function AccordionItem({title, content}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <li className="accordion-item" onClick={toggle}>
      <div className="accordion-question">
        <h3>{title}</h3>
        <img src={`/src/assets/images/icon-${isOpen ? 'minus' : 'plus'}.svg`} alt={isOpen ? 'Collapse' : 'Expand'}/>
      </div>
      <p className={`accordion-content ${isOpen ? 'visible' : 'hidden'}`}>{content}</p>
    </li>
  );
}
