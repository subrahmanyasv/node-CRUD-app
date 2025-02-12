# Node CRUD App

A simple **CRUD (Create, Read, Update, Delete)** API built with **Node.js**, **Express.js**, and **MongoDB**. This application follows best practices, including **modularized code, graceful shutdown handling, and efficient database management**.

---

## 🚀 Features
- **User Management**: Add, retrieve, delete users.
- **RESTful API**: Follows REST conventions for handling CRUD operations.
- **Modular Code Structure**: Routes, database connection, and models are separated for scalability.
- **MongoDB Integration**: Uses Mongoose for schema-based data modeling.
- **Graceful Shutdown Handling**: Closes server and database connections properly on process termination.

---

## 📂 Project Structure
```
node-CRUD-app/
│-- src/
│   ├── Config/
│   │   ├── DBConfig.js         # Database connection setup
│   ├── Models/
│   │   ├── SchemaModel.js      # Mongoose User model
│   ├── Routes/
│   │   ├── userRoutes.js       # User API routes
│   ├── index.js               # Main entry point
│-- package.json                 
│-- README.md
```

---

## 🛠 Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/node-CRUD-app.git
cd node-CRUD-app
```
### 2️⃣ Install Dependencies
```bash
npm install
```
### 3️⃣ Setup Environment Variables
Create a `.env` file in the root directory and add:
```env
MONGO_URI=mongodb://127.0.0.1:27017/usersDB
PORT=8000
```
### 4️⃣ Start the Server
```bash
npm start
```
Server will run on **http://localhost:8000** 🚀

---

## 🔄 API Endpoints
Currently, this project is not connected to a cloud database. To use it, you must set up a local database.
### **1️⃣ Get All Users**
**GET** `/api/users`
```json
Response:
[ { "_id": "123", "firstName": "John", "email": "john@example.com" } ]
```
### **2️⃣ Get User by ID**
**GET** `/api/users/:id`
```json
Response:
{ "_id": "123", "firstName": "John", "email": "john@example.com" }
```
### **3️⃣ Add a New User**
**POST** `/api/users`
```json
Request Body:
{ "firstName": "John", "email": "john@example.com" }
```
### **4️⃣ Delete a User**
**DELETE** `/api/users/:id`
```json
Response:
{ "message": "User deleted successfully!" }
```
### **5️⃣ Update a User**
**PATCH** `/api/users/:id`
```json
Response:
{ "_id": "123", "firstName": "John", "email": "john@example.com" }
```

---

## ⚡ Graceful Shutdown Handling
This application **handles termination signals (`SIGINT`, `SIGTERM`) gracefully**, ensuring all **connections close properly** before exiting.


## 🤝 Contribution
Contributions are welcome! Please fork the repo and submit a pull request.

---

## 📞 Contact
For any questions or suggestions, reach out via **[subrahmanyavaidya7@gmail.com](mailto:subrahmanyavaidya7@gmial.com)**.

Happy Coding! 🚀

