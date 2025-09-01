const chatbotBtn = document.getElementById("chatbot-btn");
const chatbot = document.getElementById("chatbot");
const closeBtn = document.getElementById("close-chatbot");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatbotBody = document.getElementById("chatbot-body");

// Show chatbot on navbar click
chatbotBtn.addEventListener("click", () => {
    chatbot.style.display = "flex";
});

// Close chatbot
closeBtn.addEventListener("click", () => {
    chatbot.style.display = "none";
});

// Send message
sendBtn.addEventListener("click", () => {
    sendMessage();
});

// Enter key triggers send
userInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter") sendMessage();
});

// Function to add messages
function sendMessage() {
    const text = userInput.value.trim();
    if(text === "") return;

    // User message
    const userMsg = document.createElement("div");
    userMsg.className = "message user";
    userMsg.innerText = text;
    chatbotBody.appendChild(userMsg);

    // Bot response (simple demo)
    const botMsg = document.createElement("div");
    botMsg.className = "message bot";
    botMsg.innerText = "You said: " + text;
    chatbotBody.appendChild(botMsg);

    // Scroll to bottom
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
    userInput.value = "";
}

// Project accordion
const toggles = document.querySelectorAll(".toggle-features");

toggles.forEach(toggle => {
    toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const features = toggle.parentElement.nextElementSibling;
        features.style.display = features.style.display === "block" ? "none" : "block";
    });
});
