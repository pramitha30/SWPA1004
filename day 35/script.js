// Quiz questions array
const quizQuestions = [
    {
        question: "What is the correct way to declare a variable in JavaScript ES6?",
        options: [
            "var myVariable = 'Hello';",
            "let myVariable = 'Hello';",
            "const myVariable = 'Hello';",
            "Both let and const are correct"
        ],
        correct: 3,
        explanation: "Both 'let' and 'const' are ES6 ways to declare variables, with different scoping rules than 'var'."
    },
    {
        question: "Which method is used to add an element to the end of an array?",
        options: [
            "array.append()",
            "array.push()",
            "array.add()",
            "array.insert()"
        ],
        correct: 1,
        explanation: "The push() method adds one or more elements to the end of an array and returns the new length."
    },
    {
        question: "What does the '===' operator do in JavaScript?",
        options: [
            "Compares values only",
            "Compares types only", 
            "Compares both value and type",
            "Assigns a value"
        ],
        correct: 2,
        explanation: "The strict equality operator (===) compares both value and type without type conversion."
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        options: [
            "undefined",
            "boolean",
            "float",
            "symbol"
        ],
        correct: 2,
        explanation: "JavaScript has number type for all numeric values, but no specific 'float' type."
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        options: [
            "Refers to the current function",
            "Refers to the global object",
            "Refers to the object that owns the method",
            "Creates a new variable"
        ],
        correct: 2,
        explanation: "'this' refers to the object that is executing the current function or method."
    },
    {
        question: "Which method is used to remove the last element from an array?",
        options: [
            "array.removeLast()",
            "array.pop()",
            "array.delete()",
            "array.splice(-1)"
        ],
        correct: 1,
        explanation: "The pop() method removes the last element from an array and returns that element."
    },
    {
        question: "What is a closure in JavaScript?",
        options: [
            "A way to close the browser",
            "A function that has access to variables in its outer scope",
            "A method to end a loop",
            "A type of JavaScript error"
        ],
        correct: 1,
        explanation: "A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function returns."
    },
    {
        question: "Which of these is the correct way to create an object in JavaScript?",
        options: [
            "var obj = {};",
            "var obj = new Object();",
            "var obj = Object.create({});",
            "All of the above"
        ],
        correct: 3,
        explanation: "All three methods are valid ways to create objects in JavaScript, each with different use cases."
    },
    {
        question: "What does 'hoisting' mean in JavaScript?",
        options: [
            "Moving code to the server",
            "Variable and function declarations are moved to the top of their scope",
            "Optimizing code performance",
            "Creating global variables"
        ],
        correct: 1,
        explanation: "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their containing scope during compilation."
    },
    {
        question: "Which array method creates a new array with all elements that pass a test?",
        options: [
            "array.forEach()",
            "array.map()",
            "array.filter()",
            "array.reduce()"
        ],
        correct: 2,
        explanation: "The filter() method creates a new array with all elements that pass the test implemented by the provided function."
    }
];

// Quiz state variables
let currentQuestionIndex = 0;
let score = 0;
let timeStarted = null;
let selectedAnswer = null;
let quizStarted = false;
let answeredQuestions = [];

// DOM elements
const startScreen = document.getElementById('startScreen');
const questionContainer = document.getElementById('questionContainer');
const resultsScreen = document.getElementById('resultsScreen');
const questionNumber = document.getElementById('questionNumber');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const submitBtn = document.getElementById('submitBtn');
const nextBtn = document.getElementById('nextBtn');
const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const currentScoreSpan = document.getElementById('currentScore');
const progressBar = document.getElementById('progressBar');
const quizForm = document.getElementById('quizForm');

// Initialize quiz
function initQuiz() {
    totalQuestionsSpan.textContent = quizQuestions.length;
    currentQuestionSpan.textContent = '0';
    currentScoreSpan.textContent = '0';
    progressBar.style.width = '0%';
}

// Start quiz
function startQuiz() {
    quizStarted = true;
    timeStarted = new Date();
    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions = [];
    
    startScreen.style.display = 'none';
    questionContainer.classList.add('active');
    resultsScreen.classList.remove('active');
    
    updateQuizInfo();
    displayQuestion();
    startTimer();
}

// Display current question
function displayQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    selectedAnswer = null;
    
    questionNumber.textContent = `Question ${currentQuestionIndex + 1}`;
    questionText.textContent = question.question;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Create option elements
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.id = `option${index}`;
        radioInput.name = 'quiz-option';
        radioInput.value = index;
        
        const label = document.createElement('label');
        label.htmlFor = `option${index}`;
        label.textContent = option;
        
        const feedbackIcon = document.createElement('span');
        feedbackIcon.className = 'feedback-icon';
        
        optionDiv.appendChild(radioInput);
        optionDiv.appendChild(label);
        label.appendChild(feedbackIcon);
        optionsContainer.appendChild(optionDiv);
        
        // Add event listener for option selection
        radioInput.addEventListener('change', function() {
            selectedAnswer = parseInt(this.value);
            updateSubmitButton();
        });
    });
    
    // Reset button states
    submitBtn.disabled = true;
    submitBtn.style.display = 'inline-block';
    nextBtn.style.display = 'none';
    
    // Update progress
    updateProgress();
}

// Update submit button state
function updateSubmitButton() {
    submitBtn.disabled = selectedAnswer === null;
}

// Submit answer
function submitAnswer() {
    if (selectedAnswer === null) return;
    
    const question = quizQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correct;
    
    if (isCorrect) {
        score++;
    }
    
    // Record the answer
    answeredQuestions.push({
        questionIndex: currentQuestionIndex,
        selectedAnswer: selectedAnswer,
        correct: isCorrect
    });
    
    // Show feedback
    showAnswerFeedback(selectedAnswer, question.correct);
    
    // Update score display
    currentScoreSpan.textContent = score;
    
    // Hide submit button, show next button
    submitBtn.style.display = 'none';
    
    if (currentQuestionIndex < quizQuestions.length - 1) {
        nextBtn.style.display = 'inline-block';
        nextBtn.textContent = 'Next Question';
    } else {
        nextBtn.style.display = 'inline-block';
        nextBtn.textContent = 'View Results';
        nextBtn.onclick = showResults;
    }
}

// Show answer feedback
function showAnswerFeedback(selectedIndex, correctIndex) {
    const options = document.querySelectorAll('.option');
    
    options.forEach((option, index) => {
        const input = option.querySelector('input');
        const label = option.querySelector('label');
        const icon = option.querySelector('.feedback-icon');
        
        // Disable all inputs
        input.disabled = true;
        option.classList.add('disabled');
        
        if (index === correctIndex) {
            // Mark correct answer
            option.classList.add('correct');
            icon.textContent = '✓';
        } else if (index === selectedIndex) {
            // Mark incorrect selected answer
            option.classList.add('incorrect');
            icon.textContent = '✗';
        }
    });
}

// Next question
function nextQuestion() {
    currentQuestionIndex++;
    updateQuizInfo();
    displayQuestion();
}

// Update quiz info
function updateQuizInfo() {
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    updateProgress();
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// Start timer
function startTimer() {
    const timerElement = document.getElementById('timeRemaining');
    
    function updateTimer() {
        if (!quizStarted) return;
        
        const now = new Date();
        const elapsed = Math.floor((now - timeStarted) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        
        const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        timerElement.textContent = formattedTime;
        
        // Warning at 10 minutes
        if (elapsed >= 600) {
            document.getElementById('quizTimer').classList.add('warning');
        }
        
        setTimeout(updateTimer, 1000);
    }
    
    updateTimer();
}

// Show results
function showResults() {
    questionContainer.classList.remove('active');
    resultsScreen.classList.add('active');
    
    const finalScore = document.getElementById('finalScore');
    const resultsMessage = document.getElementById('resultsMessage');
    const resultsDetails = document.getElementById('resultsDetails');
    const performanceMessage = document.getElementById('performanceMessage');
    const correctAnswersEl = document.getElementById('correctAnswers');
    const incorrectAnswersEl = document.getElementById('incorrectAnswers');
    const accuracyPercentageEl = document.getElementById('accuracyPercentage');
    const timeTakenEl = document.getElementById('timeTaken');
    
    // Calculate results
    const totalQuestions = quizQuestions.length;
    const correctAnswers = score;
    const incorrectAnswers = totalQuestions - correctAnswers;
    const accuracy = Math.round((correctAnswers / totalQuestions) * 100);
    const timeElapsed = Math.floor((new Date() - timeStarted) / 1000);
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    
    // Update result displays
    finalScore.textContent = `${correctAnswers}/${totalQuestions}`;
    correctAnswersEl.textContent = correctAnswers;
    incorrectAnswersEl.textContent = incorrectAnswers;
    accuracyPercentageEl.textContent = `${accuracy}%`;
    timeTakenEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Set performance message and styling
    let messageText = '';
    let messageClass = '';
    
    if (accuracy >= 90) {
        messageText = '🎉 Excellent! You have mastered JavaScript fundamentals!';
        messageClass = 'performance-excellent';
        resultsMessage.textContent = 'Outstanding Performance!';
    } else if (accuracy >= 70) {
        messageText = '👍 Great job! You have a solid understanding of JavaScript!';
        messageClass = 'performance-good';
        resultsMessage.textContent = 'Well Done!';
    } else if (accuracy >= 50) {
        messageText = '📚 Good effort! Consider reviewing some JavaScript concepts.';
        messageClass = 'performance-average';
        resultsMessage.textContent = 'Keep Learning!';
    } else {
        messageText = '💪 Keep practicing! JavaScript takes time to master.';
        messageClass = 'performance-poor';
        resultsMessage.textContent = 'Room for Improvement!';
    }
    
    performanceMessage.textContent = messageText;
    performanceMessage.className = `performance-message ${messageClass}`;
    
    resultsDetails.textContent = `You answered ${correctAnswers} out of ${totalQuestions} questions correctly in ${minutes}:${seconds.toString().padStart(2, '0')}.`;
    
    // Show confetti for excellent performance
    if (accuracy >= 90) {
        setTimeout(createConfetti, 500);
    }
}

// Reset quiz to start screen
function resetQuiz() {
    quizStarted = false;
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    answeredQuestions = [];
    timeStarted = null;
    
    // Reset displays
    currentQuestionSpan.textContent = '0';
    currentScoreSpan.textContent = '0';
    progressBar.style.width = '0%';
    document.getElementById('quizTimer').classList.remove('warning');
    document.getElementById('timeRemaining').textContent = '00:00';
    
    // Show start screen
    startScreen.style.display = 'block';
    questionContainer.classList.remove('active');
    resultsScreen.classList.remove('active');
}

// Restart quiz (go directly to first question)
function restartQuiz() {
    resetQuiz();
    setTimeout(() => {
        startQuiz();
    }, 100);
}

// Form submission prevention
document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();
    submitAnswer();
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (!quizStarted) return;
    
    // Number keys for selecting options
    if (e.key >= '1' && e.key <= '4') {
        const optionIndex = parseInt(e.key) - 1;
        const options = document.querySelectorAll('input[name="quiz-option"]');
        if (options[optionIndex] && !options[optionIndex].disabled) {
            options[optionIndex].checked = true;
            selectedAnswer = optionIndex;
            updateSubmitButton();
        }
    }
    
    // Enter key to submit
    if (e.key === 'Enter') {
        if (submitBtn.style.display !== 'none' && !submitBtn.disabled) {
            submitAnswer();
        } else if (nextBtn.style.display !== 'none') {
            if (nextBtn.onclick === showResults) {
                showResults();
            } else {
                nextQuestion();
            }
        }
    }
    
    // Escape key to reset
    if (e.key === 'Escape') {
        if (confirm('Are you sure you want to reset the quiz? Your progress will be lost.')) {
            resetQuiz();
        }
    }
});

// Prevent accidental page refresh
window.addEventListener('beforeunload', function(e) {
    if (quizStarted && currentQuestionIndex < quizQuestions.length) {
        e.preventDefault();
        e.returnValue = 'Are you sure you want to leave? Your quiz progress will be lost.';
        return e.returnValue;
    }
});

// Add click handlers for better UX
document.addEventListener('click', function(e) {
    // Allow clicking anywhere on option to select it
    if (e.target.closest('.option') && !e.target.closest('.option').classList.contains('disabled')) {
        const option = e.target.closest('.option');
        const input = option.querySelector('input[type="radio"]');
        if (input) {
            input.checked = true;
            selectedAnswer = parseInt(input.value);
            updateSubmitButton();
        }
    }
});

// Add visual feedback for loading states
function showLoadingState(button, text) {
    const originalText = button.innerHTML;
    button.innerHTML = `<div class="loading"></div>${text}`;
    button.disabled = true;
    
    return function() {
        button.innerHTML = originalText;
        button.disabled = false;
    };
}

// Enhanced start quiz with loading state
const originalStartQuiz = startQuiz;
startQuiz = function() {
    const startBtn = document.getElementById('startBtn');
    const resetLoading = showLoadingState(startBtn, 'Starting Quiz...');
    
    setTimeout(() => {
        resetLoading();
        originalStartQuiz();
    }, 500);
};

// Initialize quiz on page load
document.addEventListener('DOMContentLoaded', function() {
    initQuiz();
    
    // Add smooth transitions
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add some easter eggs for fun
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        // Easter egg: show all correct answers for 3 seconds
        if (quizStarted && questionContainer.classList.contains('active')) {
            const correctIndex = quizQuestions[currentQuestionIndex].correct;
            const options = document.querySelectorAll('.option');
            
            options[correctIndex].style.animation = 'correctPulse 0.5s ease 6';
            
            setTimeout(() => {
                options[correctIndex].style.animation = '';
            }, 3000);
        }
        konamiCode = [];
    }
});

// Add confetti effect for excellent performance
function createConfetti() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe'];
    const confettiContainer = document.createElement('div');
    confettiContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
    `;
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: absolute;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}%;
            animation: confettiFall 3s linear forwards;
            animation-delay: ${Math.random() * 2}s;
        `;
        confettiContainer.appendChild(confetti);
    }
    
    document.body.appendChild(confettiContainer);
    
    setTimeout(() => {
        document.body.removeChild(confettiContainer);
    }, 5000);
}