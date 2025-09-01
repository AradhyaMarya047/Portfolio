const chatSection = document.getElementById('chatbot');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');

function toggleChatbot() { chatSection.classList.toggle('active'); }
chatInput.addEventListener("keypress", function(e) { if (e.key === "Enter") sendMessage(); });

function sendMessage() {
  const msg = chatInput.value.trim();
  if (!msg) return;
  displayResponse(msg);
  chatInput.value = '';
}

function quickAsk(keyword) { displayResponse(keyword); }

function displayResponse(msg) {
  chatMessages.innerHTML = '';
  const userMsg = document.createElement('p'); userMsg.textContent = msg; userMsg.classList.add('user-msg'); chatMessages.appendChild(userMsg);
  const botReply = document.createElement('p'); botReply.classList.add('bot-msg');
  const text = msg.toLowerCase();

  if (text.includes('hello') || text.includes('hi')) botReply.textContent = 'Hello! Ask me about skills, projects, work experience, education, programming languages, AI, or contact info.';
  else if (text.includes('skills')) botReply.textContent = 'Skills: Python, HTML & CSS, Java, TensorFlow, PyTorch, Scikit-learn, Pandas & NumPy, Git & GitHub.';
  else if (text.includes('project') || text.includes('projects')) botReply.textContent = 'English → French Translator with real-time multilingual translation, evaluation metrics, voice pronunciation, and FastAPI API.';
  else if (text.includes('work')) botReply.textContent = 'Produce Associate at Walmart (Part-Time) – teamwork, time management, reliability, customer service, attention to detail.';
  else if (text.includes('education')) botReply.textContent = 'Durham College – Honours Bachelor in AI (3rd Year); Rigveda International School – High School.';
  else if (text.includes('contact') || text.includes('email')) botReply.innerHTML = 'Email: <a href="mailto:aradhyamarya@gmail.com">aradhyamarya@gmail.com</a>';
  else if (text.includes('linkedin')) botReply.innerHTML = 'LinkedIn: <a href="https://linkedin.com/in/aradhya-marya-24aa01272" target="_blank">linkedin.com/in/aradhya-marya-24aa01272</a>';
  else if (text.includes('github')) botReply.innerHTML = 'GitHub: <a href="https://github.com/AradhyaMarya047" target="_blank">github.com/AradhyaMarya047</a>';
  else if (text.includes('language') || text.includes('languages')) botReply.textContent = 'Programming Languages: Python, HTML & CSS, Java, TensorFlow, PyTorch, Scikit-learn, Pandas & NumPy, Git & GitHub.';
  else if (text.includes('ai')) botReply.textContent = 'I work with Machine Learning, NLP, translation systems, chatbots, and AI applications.';
  else botReply.textContent = 'I am still learning! Ask about skills, projects, work experience, education, programming languages, AI, or contact info.';

  chatMessages.appendChild(botReply);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Project accordion functionality
const toggles = document.querySelectorAll(".toggle-features");
toggles.forEach(toggle => {
  toggle.addEventListener("click", (e) => {
    const features = toggle.parentElement.nextElementSibling;
    features.style.display = (features.style.display === "block") ? "none" : "block";
  });
});
