import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the Best College in Chennai?',
			answerOptions: [
				{ answerText: 'VIT', isCorrect: false },
				{ answerText: 'SSN', isCorrect: false },
				{ answerText: 'SRM', isCorrect: true },
				{ answerText: 'IIT', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The Pixel was created by which company?',
			answerOptions: [
				{ answerText: 'Google', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Pixer', isCorrect: false },
				{ answerText: 'Apple', isCorrect: false },
			],
		},
		{
			questionText: 'Who won the last F1 world Championship? ',
			answerOptions: [
				{ answerText: 'Fernando Alonso', isCorrect: false },
				{ answerText: 'Seb Vettle', isCorrect: false },
				{ answerText: 'Charles Leclare', isCorrect: false },
				{ answerText: 'Max Verstapan', isCorrect: true },
			],
		},
    {
			questionText: 'What is the national Sports of India',
			answerOptions: [
				{ answerText: 'Kabbadi', isCorrect: false },
				{ answerText: 'Hockey ', isCorrect: false },
				{ answerText: 'None', isCorrect: true },
				{ answerText: 'Cricket', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length} and Max Verstapan will win the Championship This season too!!!😉 
          
          
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

