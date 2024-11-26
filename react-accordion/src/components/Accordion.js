import React,{useState} from "react"


const Accordion= ({title, content})=>{
    const[isOpen, setIsOpen]= useState();

    const toggleAccordion= ()=>{
        setIsOpen(!isOpen);
    };
    return(
        <div className="accordion">
            <div className="accordion-header" onClick={toggleAccordion}>
                <h3>{title}</h3>
                <span>{isOpen ? "-":"+"}</span>
            </div>
            {isOpen && <div className="accordion-content">{content}</div>}
        </div>
    );
};
export default Accordion;