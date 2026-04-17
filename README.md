# Google Flow Style Image Generator

A simple web application built using **HTML, CSS, JavaScript, and Node.js** that generates images from text prompts using the **Hugging Face Inference API**.

This project simulates the functionality of Google Flow by allowing users to input prompts and generate AI images without opening any external website.

---

## 🚀 Features

- Text-to-image generation
- Simple and clean UI
- Backend API integration
- Displays generated images instantly
- Uses free-tier API (Hugging Face)

---

## 🧰 Tech Stack

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- Multer
- dotenv
- Hugging Face Inference API


---

## ⚙️ Requirements

Make sure you have:

- Node.js installed
- npm installed
- Hugging Face account
- Hugging Face API Key

---

## 🔑 Setup API Key

1. Go to https://huggingface.co
2. Login / Signup
3. Go to Settings → Access Tokens
4. Click **New Token**
5. Set permission: **Read / Inference**
6. Copy your token

Create `.env` file:

```env
HF_API_KEY=your_api_key_here



---

## 🛠 Installation

Install dependencies:


npm install
npm install express multer dotenv @huggingface/inference




---

## ▶️ How to Run the Project

### Step 1: Start the server

node server.js or npm start


---

## ▶️ How to Run the Project

### Step 1: Start the server

http://localhost:3000


## 4. Brief Writeup

### How I Reverse Engineered the API
To understand how the image generation workflow worked, I inspected the network requests involved in the process and reviewed the request structure, headers, payload format, and response behavior. From there, I recreated the request flow inside my own web application so the app could accept a prompt and optional image input, send the request programmatically, and display the generated result without opening the provider’s website directly.

### Tools I Used
I used **HTML, CSS, and JavaScript** to build the frontend interface and **Node.js with Express** for the backend server. For secure API key handling, I used **environment variables** stored in a `.env` file. I also used **Git and GitHub** for version control and repository management, and **browser developer tools** to inspect requests and responses during testing and implementation.

### Limitations and Challenges Encountered
One of the main challenges was that the original Google Flow route was not reliable for direct implementation, so I tested an alternative inference-based approach to continue building the application. Another limitation was API usage and billing constraints from the image provider, which affected live image generation during testing. I also had to resolve a GitHub push protection issue after a secret was accidentally included in the repository history, which required removing the sensitive data from Git history and properly storing the key in a `.env` file instead.

