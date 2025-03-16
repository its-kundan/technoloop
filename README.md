# Job Portal Website

This is a full-stack **Job Portal Website** built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). It allows job seekers to search and apply for jobs, employers to post job listings, and admins to manage the platform.

---

## Features

### **Frontend (React.js)**
- **User Authentication:** Register, login, and logout.
- **Job Search:** Search and filter jobs by title, location, and category.
- **Job Application:** Submit and track job applications.
- **User Profiles:** Job seekers can create and update profiles.
- **Responsive Design:** Works seamlessly on all devices.

### **Backend (Node.js + Express.js)**
- **RESTful APIs:** CRUD operations for users, jobs, and applications.
- **Authentication:** JWT-based authentication for secure access.
- **File Uploads:** Resume uploads using Multer and Cloudinary.
- **Role-Based Access Control:** Different permissions for job seekers, employers, and admins.

---

## Technologies Used

### **Frontend**
- **Framework:** React.js
- **State Management:** Redux Toolkit
- **Styling:** CSS, Tailwind CSS (or any other library you used)
- **Routing:** React Router
- **API Calls:** Axios

### **Backend**
- **Framework:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose for schema modeling)
- **Authentication:** JSON Web Tokens (JWT)
- **File Uploads:** Multer, Cloudinary
- **Environment Variables:** dotenv

---

## Live Demo

- **Frontend:** [https://your-frontend.vercel.app](https://your-frontend.vercel.app)
- **Backend:** [https://jobportal-backend-q87u.onrender.com](https://jobportal-backend-q87u.onrender.com)

---

## Installation

Follow these steps to set up the project locally:

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/job-portal-website.git
cd job-portal-website
```

### **2. Set Up Backend**
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` folder and add the following variables:
   ```plaintext
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. Start the backend server:
   ```bash
   npm start
   ```
   The backend will run at `http://localhost:5000`.

### **3. Set Up Frontend**
1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `frontend` folder and add the following variable:
   ```plaintext
   REACT_APP_API_URL=http://localhost:5000
   ```

4. Start the frontend development server:
   ```bash
   npm start
   ```
   The frontend will run at `http://localhost:3000`.

---

## API Endpoints

### **Authentication**
- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Login and get a JWT token.
- `POST /api/auth/logout` - Logout (invalidate token).

### **Jobs**
- `GET /api/jobs` - Get all job listings.
- `POST /api/jobs` - Create a new job listing (employer only).
- `GET /api/jobs/:id` - Get a specific job by ID.
- `PUT /api/jobs/:id` - Update a job listing (employer only).
- `DELETE /api/jobs/:id` - Delete a job listing (employer only).

### **Applications**
- `POST /api/applications` - Submit a job application.
- `GET /api/applications` - Get all applications (employer/admin only).
- `GET /api/applications/:id` - Get a specific application by ID.
- `PUT /api/applications/:id` - Update application status (employer/admin only).

### **Users**
- `GET /api/users` - Get all users (admin only).
- `GET /api/users/:id` - Get a specific user by ID.
- `PUT /api/users/:id` - Update user profile.
- `DELETE /api/users/:id` - Delete a user (admin only).

---

## Deployment

### **Backend**
The backend is deployed on **Render**.  
Live URL: [https://jobportal-backend-q87u.onrender.com](https://jobportal-backend-q87u.onrender.com)

### **Frontend**
The frontend is deployed on **Vercel**.  
Live URL: [https://your-frontend.vercel.app](https://your-frontend.vercel.app)

---

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For questions or feedback, reach out to:  
- **Your Name**  
- **Email:** your-email@example.com  
- **GitHub:** [your-username](https://github.com/your-username)
```

---

### **Key Sections in the README**
1. **Features:** Highlights the main functionalities of the frontend and backend.
2. **Technologies Used:** Lists the tools and frameworks used.
3. **Live Demo:** Provides live URLs for the deployed frontend and backend.
4. **Installation:** Step-by-step instructions for setting up the project locally.
5. **API Endpoints:** Documents the available endpoints for easy reference.
6. **Deployment:** Explains how the frontend and backend are deployed.
7. **Contributing:** Encourages contributions and explains the process.
8. **License:** Specifies the project's license.
9. **Contact:** Provides contact information for questions or feedback.

