# 🌊 Kanyakumari Tourism Portal

![Kanyakumari](https://lh3.googleusercontent.com/aida-public/AB6AXuCPw7WjwR7xLX7OI1q3pgYXfMe5ONJhBfnJ9tNvsXlLvRBhS2o2XLpkrJDVKbvRpxSgJ7Pj0ppSZnNw9h_K3TBlR1h4Z9UDxr5kkts0A8utTW0RJ7iuiIhyXky2Iv6QSlH9w24CABec37vQGGDhnENn5Yl6G9PxP8aWi-qfdK-6xGb-cFLSLQo4M3VFwcDIti92M2dDl4D0vUh3up1k5wFFIuaXbJiwCWy-mymZ-ukMGYCohKB2GPMCIzIZKIgk8k5baD7IEYpPsKA)

> **Where Three Seas Meet** — A modern, beautiful, and interactive web portal for exploring the southernmost tip of India.

## ✨ Features

- **🤖 AI Tourist Guide**: A built-in chatbot powered by Gemini API to answer all your queries about Kanyakumari.
- **⛅ Live Weather & Sunrise Data**: Real-time temperature, wind speed, and the exact time of the next spectacular sunrise, fetched using the Open-Meteo API.
- **🔐 Secure Authentication**: User login and registration powered by **Supabase**.
- **👑 Role-Based Dashboards**: Distinct experiences for regular users (Tourists) and Administrators.
- **📱 PWA Ready**: Installable as a Progressive Web App for offline access and native feel.
- **🎨 Modern UI/UX**: Stunning design with Tailwind CSS, featuring glassmorphism, responsive layouts, and beautiful typography.

## 🛠️ Tech Stack

- **Frontend**: HTML5, Vanilla JavaScript, Tailwind CSS
- **Backend/BaaS**: Node.js, Supabase (Auth & Database)
- **APIs**: Google Gemini AI (Chatbot), Open-Meteo API (Weather)
- **Deployment & Architecture**: PWA with Service Workers (`sw.js`)

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- A [Supabase](https://supabase.com/) account for database and authentication.
- A Google Gemini API key.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ParvathiDev23/kanyakumari-portal.git
   cd kanyakumari-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Update the Supabase URL and Anon Key in the relevant HTML files (`index.html`, `login.html`, etc.).
   - Ensure your backend/API endpoints (like the Gemini API integration) are properly configured with your keys.

4. **Start the application**
   ```bash
   npm start
   ```

## 📂 Project Structure

```text
kanyakumari-portal/
├── api/                  # Backend API routes (Gemini integration, etc.)
├── index.html            # Main landing page
├── login.html            # User authentication
├── register.html         # User sign up
├── dashboard.html        # Tourist dashboard
├── admin.html            # Admin panel
├── admin-login.html      # Admin authentication
├── attractions.html      # Places to visit
├── history.html          # Historical information
├── markets.html          # Local shopping guide
├── booking.html          # Tour booking interface
├── checkout.html         # Payment/Checkout flow
├── package.json          # Project metadata and dependencies
├── manifest.json         # PWA configuration
└── sw.js                 # Service worker for offline capabilities
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

## 📜 License

This project is licensed under the MIT License.
