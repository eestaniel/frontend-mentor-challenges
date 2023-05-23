import React, { useState } from 'react';
import Question from './Questions';
import Background from './Background';

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
            <Background bgClass="bg__desktop__box" />
            <Background bgClass="bg__mobile__computer" />
            <Background bgClass="bg__mobile__shadow" />
            <div className="accordion">
                <Background bgClass="bg">
                    <Background bgClass="bg__desktop__computer" />
                    <Background bgClass="bg__desktop__shadow" />
                </Background>

                <div className="accordion__body">
                    <div className="accordion__header">
                        <h1>FAQ</h1>
                    </div>
                    <div className="accordion__questions">
                        {questionsAndAnswers.map((item) => (
                            <Question
                                key={item.index}
                                item={item}
                                selectedQuestionIndex={selectedQuestionIndex}
                                toggleQuestion={toggleQuestion}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
