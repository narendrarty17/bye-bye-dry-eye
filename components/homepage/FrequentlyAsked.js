import React, { useState } from 'react'
import questionsData from "@/public/data/homepage/questionsData.json"

const Question = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <div className='flex flex-col border-b-2 border-gray-300'>
            <div
                onClick={() => setShowAnswer(prevShowAnswer => !prevShowAnswer)}
                className="flex flex-row justify-between w-[100%] items-between"
            >
                <h3
                    className="text-xl mb-5"
                >
                    {question}
                </h3>
                {!showAnswer && (
                    <img
                        className='w-6'
                        src="/images/homepage/frequentlyAskedQuestions/downArrow.svg"
                    />
                )
                }
                {showAnswer && (
                    <img
                        className='w-6'
                        src="/images/homepage/frequentlyAskedQuestions/upArrow.svg"
                    />
                )}
            </div>
            {showAnswer && (
                <p className="mb-5">
                    {answer}
                </p>
            )}
        </div>
    );
}

const Questions = () => {
    return (
        <div className='flex flex-col gap-8'>
            {questionsData.map((questionData) => (
                <Question
                    question={questionData.question}
                    answer={questionData.answer}
                />
            ))}
        </div>
    )
}

export default function FrequentlyAsked() {
    return (
        <div>
            <h2 className="pb-10 flex justify-start text-dark-gray text-3xl font-baskerville">
                Frequently Asked Questions
            </h2>
            <Questions />
        </div>
    )
}
