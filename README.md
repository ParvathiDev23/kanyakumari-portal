<div align="center">

# 🌊 Kanyakumari Tourism Portal
**Where Three Seas Meet**

<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPw7WjwR7xLX7OI1q3pgYXfMe5ONJhBfnJ9tNvsXlLvRBhS2o2XLpkrJDVKbvRpxSgJ7Pj0ppSZnNw9h_K3TBlR1h4Z9UDxr5kkts0A8utTW0RJ7iuiIhyXky2Iv6QSlH9w24CABec37vQGGDhnENn5Yl6G9PxP8aWi-qfdK-6xGb-cFLSLQo4M3VFwcDIti92M2dDl4D0vUh3up1k5wFFIuaXbJiwCWy-mymZ-ukMGYCohKB2GPMCIzIZKIgk8k5baD7IEYpPsKA" alt="Kanyakumari Banner" style="width: 100%; border-radius: 15px; margin: 20px 0; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">

[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://html.com/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Gemini API](https://img.shields.io/badge/Gemini_AI-%238E75B2.svg?style=for-the-badge&logo=google&logoColor=white)](https://deepmind.google/technologies/gemini/)

*A modern, beautiful, and interactive web experience to explore the southernmost tip of India.*

</div>

<br />

## 🌟 Supreme Features

<table>
  <tr>
    <td width="50%">
      <h3>🤖 AI Tourist Guide</h3>
      <p>A smart, context-aware chatbot powered by the <b>Google Gemini API</b>. Get instant answers to your questions about local cuisines, best spots, and cultural heritage.</p>
    </td>
    <td width="50%">
      <h3>⛅ Live Environment Data</h3>
      <p>Stay informed with real-time temperature, wind speeds, and the exact time of the next spectacular sunrise fetched dynamically via the <b>Open-Meteo API</b>.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🔐 Bulletproof Auth</h3>
      <p>Secure login, seamless registration, and session management powered by <b>Supabase</b>. Keep your data and itineraries safe.</p>
    </td>
    <td width="50%">
      <h3>👑 Role-Based Experiences</h3>
      <p>Exclusive dashboards tailored for <b>Tourists</b> to manage bookings, and specialized panels for <b>Admins</b> to oversee operations.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>📱 Progressive Web App</h3>
      <p>Installable directly to your device screen. Equipped with Service Workers (<code>sw.js</code>) for blazing fast load times and offline readiness.</p>
    </td>
    <td width="50%">
      <h3>🎨 Ultra-Modern UI/UX</h3>
      <p>Built with <b>Tailwind CSS</b> featuring mesmerizing glassmorphism, fluid responsive layouts, cinematic photography, and elite typography.</p>
    </td>
  </tr>
</table>

<br />

## 🛠️ Architecture & Tech Stack

Our stack is carefully chosen to provide a lightweight, blazingly fast, and deeply immersive experience.

- **Interface:** HTML5, Vanilla JavaScript, Tailwind CSS via CDN.
- **Backend & BaaS:** Node.js environment, Supabase (Auth & Postgres DB).
- **Intelligence:** Google Gemini AI (Generative Language API).
- **Data Integrations:** Open-Meteo API for ultra-accurate coastal conditions.
- **Delivery:** PWA setup with customized `manifest.json` and robust Service Workers.

<br />

## 🚀 Ignition sequence

Follow these steps to clone the environment locally and launch your own version of the portal.

### 📋 Prerequisites

Ensure your system is armed with the following:
- [Node.js](https://nodejs.org/) (v16.x or higher)
- A fresh project on [Supabase](https://supabase.com/)
- A shiny new [Google Gemini API key](https://aistudio.google.com/app/apikey)

### ⚙️ Installation

1. **Summon the Repository**
   ```bash
   git clone https://github.com/ParvathiDev23/kanyakumari-portal.git
   cd kanyakumari-portal
   ```

2. **Equip Dependencies**
   ```bash
   npm install
   ```

3. **Configure the Environment**
   - Head over to `index.html` and `login.html`.
   - Update the `SUPABASE_URL` and `SUPABASE_ANON_KEY` with your project credentials.
   - Setup your Gemini API connection within the backend (`/api`) routes.

4. **Launch the Portal**
   ```bash
   npm start
   ```

<br />

## 📂 Project Anatomy

```text
kanyakumari-portal/
├── 🧠 api/                  # Backend intelligence (Gemini routes, integrations)
├── 🏠 index.html            # The cinematic entry point
├── 🔑 login.html            # Tourist authentication gateway
├── 📝 register.html         # Onboarding flow
├── 📊 dashboard.html        # Personalized tourist center
├── 🛡️ admin.html            # Central command for administrators
├── 📸 attractions.html      # The gallery of destinations
├── 🏛️ history.html          # Chronicles of the south
├── 🛍️ markets.html          # The artisan directory
├── 🎫 booking.html          # Expedition reservation engine
├── 💳 checkout.html         # Secure payment & validation
├── 📦 package.json          # Dependency blueprint
├── 📱 manifest.json         # PWA identity matrix
└── ⚙️ sw.js                 # The offline guardian (Service Worker)
```

<br />

## 🤝 Join the Expedition

We welcome all explorers! Whether you're squashing bugs, improving the AI responses, or adding new breathtaking views to the UI:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<br />

<div align="center">
  <p>Crafted with ❤️ for the love of the coast.</p>
  <p><b>This project is licensed under the MIT License.</b></p>
</div>
