// src/pages/CriticalThinking.jsx
import { useState } from 'react';
import { Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, RadioGroup, Radio, FormControlLabel, Paper } from '@mui/material';
import './CriticalThinking.css';
import heroImage from '../assets/placeholder3.jpg';

const scenarios = [
  {
    title: 'Scenario 1: "Pride and Prejudice" by Jane Austen',
    reference: 'Jane Austen, Pride and Prejudice, Chapter 2',
    paragraph: 'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.',
    questions: [
      {
        question: 'What is universally acknowledged in the paragraph?',
        options: [
          'A wealthy man must be looking for a wife.',
          'A wealthy man dislikes being in a neighbourhood.',
          'Every family has a daughter.',
          'Feelings and views are not important.'
        ],
        answer: 'A wealthy man must be looking for a wife.'
      },
      {
        question: 'What is the attitude of the surrounding families towards the wealthy man?',
        options: [
          'They ignore him.',
          'They consider him as a match for their daughters.',
          'They dislike him.',
          'They feel threatened by him.'
        ],
        answer: 'They consider him as a match for their daughters.'
      }
    ]
  },
  {
    title: 'Scenario 2: "Moby-Dick" by Herman Melville',
    reference: 'Herman Melville, Moby-Dick, Chapter 1',
    paragraph: 'Call me Ishmael. Some years ago&mdash;never mind how long precisely&mdash;having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation.',
    questions: [
      {
        question: 'What is the narrator\'s name in this paragraph?',
        options: ['Ahab', 'Ishmael', 'Queequeg', 'Stubb'],
        answer: 'Ishmael'
      },
      {
        question: 'Why does the narrator decide to sail?',
        options: [
          'To find treasure',
          'To escape from responsibilities',
          'To see the watery part of the world',
          'To join a fishing expedition'
        ],
        answer: 'To see the watery part of the world'
      }
    ]
  }
];

const CriticalThinking = () => {
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleScenarioSelect = (scenario) => {
    setSelectedScenario(scenario);
    setAnswers({});
  };

  const handleAnswerChange = (questionIndex, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    selectedScenario.questions.forEach((q, index) => {
      if (answers[index] === q.answer) {
        correctAnswers += 1;
      }
    });
    setScore(correctAnswers);
    setShowResult(true);
  };

  const handleCloseResult = () => {
    setShowResult(false);
    setSelectedScenario(null);
  };

  return (
    <div className="critical-thinking">
      {/* Hero Section */}
      <div className="cthero-section">
        <div className="cthero-content">
          <h1 className="cthero-title">Critical Thinking Practice</h1>
          <p className="cthero-subtitle">Sharpen your problem-solving skills with challenging scenarios.</p>
        </div>
        <div className="cthero-image-wrapper">
          <img src={heroImage} alt="Critical Thinking Hero" className="cthero-image" />
        </div>
      </div>

      {/* Scenario Selection */}
      <div className="scenario-selection">
        <Typography variant="h5" fontFamily={'Poppins'} fontWeight={'bold'} color="#e8b028" gutterBottom>
          Choose a Scenario
        </Typography>
        {scenarios.map((scenario, index) => (
          <Paper className="scenario-card" key={index} onClick={() => handleScenarioSelect(scenario)}>
            <Typography variant="h6" fontFamily={'Poppins'}>
              {scenario.title}
            </Typography>
          </Paper>
        ))}
      </div>

      {/* Quiz Section */}
      {selectedScenario && (
        <div className="quiz-section">
          <Typography variant="h5" fontFamily={'Poppins'} fontWeight={'bold'} color="#e8b028" gutterBottom>
            {selectedScenario.title}
          </Typography>
          <Typography variant="body2" fontFamily={'Poppins'} color="#777" gutterBottom>
            {selectedScenario.reference}
          </Typography>
          <Typography variant="body1" fontFamily={'Poppins'} className="scenario-paragraph">
            &ldquo;{selectedScenario.paragraph}&rdquo;
          </Typography>
          {selectedScenario.questions.map((q, index) => (
            <div key={index} className="quiz-question">
              <Typography variant="h6">{q.question}</Typography>
              <RadioGroup value={answers[index] || ''} onChange={(e) => handleAnswerChange(index, e.target.value)}>
                {q.options.map((option, i) => (
                  <FormControlLabel key={i} value={option} control={<Radio />} label={option} />
                ))}
              </RadioGroup>
            </div>
          ))}
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit Answers
          </Button>
        </div>
      )}

      {/* Result Dialog */}
      <Dialog open={showResult} onClose={handleCloseResult}>
        <DialogTitle>Quiz Result</DialogTitle>
        <DialogContent>
          <Typography variant="h6">
            You scored {score} out of {selectedScenario?.questions.length}
          </Typography>
          <Typography>
            {score >= selectedScenario?.questions.length / 2 ? 'Congratulations, you passed!' : 'Better luck next time!'}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseResult} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CriticalThinking;
