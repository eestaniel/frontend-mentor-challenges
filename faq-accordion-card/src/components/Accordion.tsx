import React, {useState} from 'react';

const Accordion = () => {

    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number | null>(null);

    const questionsAndAnswers = [
        {
            index: 1,
            question: "How many team members can I invite?",
            answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
        },
        {
            index: 2,
            question: "What is the maximum file upload size?",
            answer: "No more than 2GB. All files in your account must fit your allotted storage space."
        },
        {
            index: 3,
            question: "How do I reset my password?",
            answer: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
        },
        {
            index: 4,
            question: "Can I cancel my subscription?",
            answer: "Yes! Send us a message and we’ll process your request no questions asked."
        },
        {
            index: 5,
            question: "Do you provide additional support?",
            answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours."
        },
    ]

    const toggleQuestion = (index: number) => {
        setSelectedQuestionIndex(selectedQuestionIndex === index ? null : index);
    }

    return (
        <div>
            <div className="bg__desktop__box"></div>
            <div className="bg__mobile__computer"></div>
            <div className="bg__mobile__shadow"></div>
            <div className="accordion">
                <div className="bg">
                    <div className="bg__desktop__computer"></div>
                    <div className="bg__desktop__shadow"></div>
                </div>


                <div className="accordion__body">
                    <div className="accordion__header">
                        <h1>FAQ</h1>
                    </div >
                    <div className="accordion__questions">
                    {questionsAndAnswers.map((item) => (
                        <div key={item.index}>
                            <div
                                className={`accordion__flex_group ${selectedQuestionIndex === item.index ? 'selected-question' : ''}`}
                                onClick={() => toggleQuestion(item.index)}>
                                <p className= 'question'>{item.question}</p>
                                <div
                                    className={`accordion__flex_group__icon ${selectedQuestionIndex === item.index ? 'icon-flip' : ''}`}
                                    datatype={'icon'}></div>
                            </div>
                            {selectedQuestionIndex === item.index && <div className={'answer'}>{item.answer}</div>}
                            <hr/>

                        </div>

                    ))}
                </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
