# Contact Management Application Backend

This is a **Node.js** and **Express.js** backend application for managing contacts. It provides RESTful API endpoints to perform CRUD operations on contacts, including searching contacts by name or email.

---

## Features
- **CRUD Operations**:
  - Create, read, update, and delete contacts.
- **Search Contacts**:
  - Search contacts by name or email.
- **Input Validation**:
  - Validate input data using `express-validator`.
- **Database**:
  - Uses **MongoDB** for data storage.
- **Error Handling**:
  - Proper error handling for invalid requests.
- **Clean Code**:
  - Modular and well-structured codebase.

---

## API Endpoints

| Method | Endpoint                  | Description                          |
|--------|---------------------------|--------------------------------------|
| GET    | `/api/contacts`           | Fetch all contacts.                  |
| POST   | `/api/contacts`           | Create a new contact.                |
| GET    | `/api/contacts/:id`       | Fetch a single contact by ID.        |
| PUT    | `/api/contacts/:id`       | Update a contact by ID.              |
| DELETE | `/api/contacts/:id`       | Delete a contact by ID.              |
| GET    | `/api/contacts/search`    | Search contacts by name or email.    |

---

## Installation

1. **Clone the repository**:

   git clone https://github.com/your-username/contact-management-app-backend.git
   cd contact-management-app-backend
   

3. Install dependencies:

   npm install
   

5. Start the server:
   
   npm start

