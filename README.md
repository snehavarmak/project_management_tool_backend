# Project Management Tool (P5)

## Overview
The **Project Management Tool** is a comprehensive web application designed to streamline project planning, execution, and monitoring. Built using the **MERN stack** (MongoDB, ExpressJS, React, and Node.js), this tool provides a **scalable, user-friendly, and feature-rich** platform to manage projects efficiently.

The primary goal is to address inefficiencies and communication gaps that arise from using multiple disconnected tools for project management. By consolidating all project-related activities into a **single platform**, the tool enhances **productivity, improves collaboration, and ensures timely project delivery**.

## Features
- **User Authentication & Authorization** (JWT-based security)
- **Project Creation & Management**
- **Task Assignment & Tracking**
- **Role-Based Access Control (RBAC)**
- **Real-Time Notifications**
- **Commenting & Discussion Threads**
- **File Upload & Sharing**
- **Dashboard & Reporting**
- **Responsive UI for Mobile & Desktop**

## Tech Stack
- **Frontend:** React.js, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ORM
- **Authentication:** JWT (JSON Web Token)
- **Storage:** Cloudinary / Local file storage
- **Notifications:** WebSockets / Firebase
- **Deployment:** Docker, Nginx, CI/CD pipeline

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (v16+)
- MongoDB (Local or Cloud)
- Docker (Optional, for containerized deployment)

### Backend Setup
```bash
git clone https://github.com/snehavarmak/project-management-tool.git
cd project-management-tool/backend
npm install
```

Create a **.env** file in the `backend` directory:
```plaintext
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend server:
```bash
npm start
```

### Frontend Setup
```bash
cd ../frontend
npm install
npm start
```

The application will be available at `http://localhost:3000`.

## API Endpoints
### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (Protected)

### Projects
- `POST /api/projects` - Create a project
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get project details
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Tasks
- `POST /api/tasks` - Create a task
- `GET /api/tasks/:id` - Get task details
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## Contributing
We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Commit your changes: `git commit -m "Added new feature"`.
4. Push to the branch: `git push origin feature-branch`.
5. Submit a Pull Request.

## License
This project is licensed under the **MIT License**.
