Fullstack Website Repository

Welcome to the Fullstack Website repository! This project serves as a learning resource for students enrolled in the Computer Applications in Business. The repository demonstrates how to build a full-stack web application using modern technologies, including Node.js, MySQL, and React.js.

Features

This project covers:
	•	Backend development using Node.js and Express.js.
	•	Database integration with MySQL.
	•	RESTful API creation and testing with Postman.
	•	Frontend development using React.js.

Prerequisites

Before working on this repository, ensure you have the following installed:
	•	Node.js
	•	MySQL
	•	Git
	•	A code editor like VS Code

Suggested Tools:

	•	Postman for API testing.
	•	A browser with developer tools (e.g., Google Chrome).

How to Use This Repository

	1.	Clone the Repository
Use the following command to clone this repository to your local machine:

git clone https://github.com/itsHadyy/fullstack-website.git
cd fullstack-website


	2.	Setup the Backend
Navigate to the backend folder and install dependencies:

cd backend
npm install

Create a .env file in the backend folder to configure environment variables like:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=yourdatabasename

Start the backend server:

npm start


	3.	Setup the Frontend
Navigate to the frontend folder and install dependencies:

cd ../frontend
npm install

Start the frontend server:

npm start


	4.	Test the Application
	•	Open your browser and navigate to http://localhost:3000 to view the frontend.
	•	Use Postman to test the APIs provided by the backend server running on http://localhost:5000.

Folder Structure

fullstack-website/
│
├── backend/         # Node.js server and API logic
│   ├── routes/      # API route files
│   ├── models/      # Database schema and queries
│   ├── controllers/ # Business logic
│   ├── .env         # Environment variables (not included in the repository)
│   └── server.js    # Main server file
│
├── frontend/        # React.js frontend
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   ├── pages/       # Main application pages
│   │   └── App.js       # Main React App entry point
│
└── README.md         # Project documentation

Contribution Guidelines

Students are encouraged to:
	1.	Explore the repository to understand the structure and functionality.
	2.	Modify and extend the application for assignments and projects.
	3.	Practice coding by solving any errors or issues independently before seeking help.

Support

If you have any questions or encounter issues, feel free to:
	•	Use the course platform to post your questions.
	•	Contact me directly during office hours.

Happy Coding! 🚀
