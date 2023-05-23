import React from 'react';

interface QuestionProps {
    item: { index: number, question: string, answer: string };
    selectedQuestionIndex: number | null;
    toggleQuestion: (index: number) => void;
}

const Question: React.FC<QuestionProps> = ({ item, selectedQuestionIndex, toggleQuestion }) => {
    return (
        <div key={item.index}>
            <div
                className={`accordion__flex_group ${selectedQuestionIndex === item.index ? 'selected-question' : ''}`}
                onClick={() => toggleQuestion(item.index)}>
                <p className='question'>{item.question}</p>
                <div
                    className={`accordion__flex_group__icon ${selectedQuestionIndex === item.index ? 'icon-flip' : ''}`}
                    datatype={'icon'}></div>
            </div>
            {selectedQuestionIndex === item.index && <p className={'answer'}>{item.answer}</p>}
            <hr />
        </div>
    )
};

export default Question;
