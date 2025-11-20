# CS 465 — Full Stack Development  
## Trip Planner Project

### **Overview**
This project is a full-stack Trip Planner application built for CS 465. It uses an Angular Single Page Application (SPA) on the front end, Node.js + Express on the backend, Handlebars (`.hbs`) for server-side rendering, and MongoDB as the NoSQL database. JSON is used for transporting and storing data between layers.

The application demonstrates full-stack concepts including templating, routing, RESTful API design, dynamic data rendering, and endpoint testing.

---

## **Table of Contents**
1. [Why HBS Instead of HTML](#why-hbs)
2. [Architecture & Technologies](#architecture)
3. [Data Flow: JSON vs JavaScript](#data-flow)
4. [REST API Endpoints](#api)
5. [Endpoint Testing](#testing)
6. [Security Considerations](#security)
7. [Refactoring & Design Improvements](#refactor)
8. [Running the Project Locally](#run-project)
9. [What I Learned](#learning)
10. [License](#license)

---

## **1. Why We Used HBS Instead of HTML** <a name="why-hbs"></a>
We used Handlebars (`.hbs`) because it allows for **dynamic server-side rendering** and faster updates, without reloading the entire page. While HTML is static and does not interact with the backend directly, HBS lets us inject data into templates and reuse components efficiently.

Originally, the project used plain HTML but was converted to HBS for:
- Faster page rendering  
- Better modularization  
- Avoiding full-page reloads  
- Cleaner separation of dynamic vs. static components  

---

## **2. Architecture & Technologies** <a name="architecture"></a>

### **Frontend**
- Angular SPA  
- Components load once and request data dynamically as the user interacts  
- Some pages rendered with HBS templates when server-side rendering is needed  

### **Backend**
- Node.js + Express  
- Handles API routes, middleware, and MongoDB connections  
- Serves the SPA bundle  

### **Database**
- MongoDB (NoSQL)  
- Chosen for flexible structure and easy horizontal scaling  

### **Data Transport**
- JSON used to seed, retrieve, and update data  
- JavaScript used across both front-end and back-end for seamless handling  

---

## **3. Data Flow: JSON vs JavaScript** <a name="data-flow"></a>
**JSON**  
- A standardized text format storing key/value data  
- Used for transferring data to/from the database  
- Used to seed initial MongoDB collections  

**JavaScript**  
- Programming language used to manipulate data  
- Makes API calls, updates UI, processes server logic  

**How They Connect**  
JSON stores data on the backend, and JavaScript retrieves this data and delivers dynamic content to the user without duplicate storage.

---

## **4. REST API Endpoints** <a name="api"></a>
Example endpoints used in this project:

GET /api/trips → List all trips
GET /api/trips/:id → Get a single trip by ID
POST /api/trips → Add a new trip
PUT /api/trips/:id → Update trip information
DELETE /api/trips/:id → Remove a trip


These endpoints interface with MongoDB and allow the SPA to fetch data on demand.

---

## **5. Endpoint Testing** <a name="testing"></a>
Testing was done using:
- **Browser testing** → Checking endpoints directly through `http://localhost`
- **Postman** → Sending manual GET/POST/PUT/DELETE requests  
- **Error debugging** → Identifying issues such as:
  - `404 Not Found` (wrong route or missing data)
  - Database connection issues
  - Bad request formatting

Postman was especially helpful for confirming that each endpoint responded with correct JSON before integrating it with the frontend.

---

## **6. Security Considerations** <a name="security"></a>
To protect users and the system:
- Secure and clean coding practices  
- Input validation and proper error handling  
- Avoiding exposure of sensitive data or database credentials  
- Using environment variables (e.g., `MONGO_URI`)  
- Continuous testing of endpoints to ensure safe behavior  

Security ensures both user trust and system stability.

---

## **7. Refactoring & Design Improvements** <a name="refactor"></a>
During the project, I refactored the structure to improve readability and performance, including:

- Converting HTML pages to HBS templates  
- Moving data from inline code into JSON seed files  
- Cleaning up logic and reducing duplicate code  
- Restructuring the project as an SPA for better performance  
- Storing trip data in MongoDB for scalable data retrieval  

These changes made the codebase cleaner, easier to maintain, and faster to load.

---



This project taught me how full-stack systems connect and interact, including:

Using frameworks like Angular, Express, and MongoDB

Designing REST APIs and testing endpoints

Managing data flow between frontend and backend

Using HBS templating to improve performance

Structuring projects for maintainability

Understanding how SPAs load, fetch data, and update views

Overall, this project gave me real experience building a complete web application from start to finish.
