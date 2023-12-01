import {useState} from 'react';


export default function AccordionItem({index, title, content}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <li className={`accordion-item ${index > 0 ? 'border' : ''}`} onClick={toggle}>
      <div className="accordion-question">
        <h3>{title}</h3>
        <img src={`/assets/images/icon-${isOpen ? 'minus' : 'plus'}.svg`} alt={isOpen ? 'Collapse' : 'Expand'}/>
      </div>
      <p className={`accordion-content ${isOpen ? 'visible' : 'hidden'}`}>{content}</p>
    </li>
  );
}
