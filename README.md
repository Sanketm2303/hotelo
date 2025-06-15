🏨 Hotel Management Software
A full-stack Hotel Management System built with Spring Boot (Java) for the backend and React.js for the frontend. This application is designed to simplify hotel operations including room booking, customer management, check-in/check-out, billing, and more — tailored for modern hospitality needs.

🔧 Tech Stack
💻 Frontend
React.js

Axios for API calls

React Router for navigation

TailwindCSS 

JWT-based auth handling

🔙 Backend

Spring Boot (Java)

Spring Data JPA & Hibernate

Spring Security with JWT

MySQL 

RESTful APIs

✨ Features
🔐 Admin & Staff Authentication

🛏️ Room Management (Add, Update, Delete, View)

📅 Booking System (Room availability, customer check-in/check-out)

👥 Customer Management


📦 Modular and scalable architecture

🖥️ Screenshots
(Include some screenshots or a short demo video link here if available)

📁 Project Structure
css
Copy
Edit
hotel-management-system/
├── backend/           # Spring Boot application
│   ├── src/main/java/
│   ├── src/main/resources/
│   └── pom.xml
├── frontend/          # React application
│   ├── public/
│   ├── src/
│   └── package.json
└── README.md
⚙️ Installation & Setup
1️⃣ Backend Setup
bash
Copy
Edit
cd backend
# Configure DB details in application.properties
./mvnw spring-boot:run
Ensure your MySQL/PostgreSQL DB is running and properly configured.

2️⃣ Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm start
App runs on: http://localhost:3000
Backend runs on: http://localhost:8080

🔐 Environment Variables
Make sure to configure the following in both frontend and backend:

Backend (application.properties)
properties
Copy
Edit
spring.datasource.url=jdbc:mysql://localhost:3306/hotel_db
spring.datasource.username=your_username
spring.datasource.password=your_password
jwt.secret=your_jwt_secret_key
Frontend (.env)
env
Copy
Edit
REACT_APP_API_URL=http://localhost:8080/api
🚀 Future Improvements
🔍 Elastic search integration for faster queries

📱 Mobile responsive PWA version




