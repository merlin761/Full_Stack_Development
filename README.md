 This project is a full-stack Trip Planner web application built for CS 465. It uses an Angular single-page app (SPA) on the front end, Node + Express on the backend, Handlebars (.hbs) for server side rendering where appropriate, and MongoDB (NoSQL) for storing trip data. JSON is used to move and store data between layers. The app demonstrates dynamic data retrieval, RESTful API endpoints (GET / POST / PUT / DELETE), endpoint testing with Postman, and basic security/testing practices.

Table of contents

Why we used Handlebars (hbs) vs static HTML

Architecture & technologies

Data flow & formats (JSON vs JavaScript)

API & common endpoints

Testing endpoints & troubleshooting notes

Security considerations

Refactor / design decisions I made

How to run the project locally

What I learned / closing thoughts

License

Why we used Handlebars (hbs) instead of plain HTML <a name="why-hbs"></a>

Performance & rendering flexibility: Handlebars lets us render templates faster because we only render components that need updating instead of fully reloading every page. That improved perceived load speed and made server-side rendered pieces easier to reuse.

HTML is static; HBS is templated: Plain HTML is static and purely client-facing (useful when no backend interaction is required). HBS provides templating so we can inject data server-side and avoid re-downloading or re-rendering unrelated components on refresh.

Architecture & technologies <a name="architecture"></a>

Frontend: Angular SPA (downloads a single app bundle; obtains data later via API calls). Some pages/components are rendered using Handlebars templates for server-side rendering when appropriate.

Backend: Node.js + Express — handles routes, APIs, and serves the SPA/static assets.

Database: MongoDB (NoSQL) — chosen for flexible schema and easy horizontal scaling.

Data transport: JSON files and payloads used for moving/importing data into MongoDB and for communication between front end and back end.

Language: JavaScript used on both front and back ends for consistent data handling and for fetching trip info from the DB.

Data flow & formats (JSON vs JavaScript) <a name="data-flow"></a>

JSON is a standardized text format (key/value pairs) used to describe and transport data. We used JSON files to load and seed trip data into MongoDB and as the API payload format.

JavaScript is the programming language that manipulates data, performs operations, and issues requests.

How they tie together: JSON stores the objects in the backend; JavaScript (in both Angular and Node) reads/writes that JSON to present dynamic content to users. This avoids duplicated storage and allows the SPA to request only the data it needs when the user interacts.

API & common endpoints <a name="api"></a>

Typical RESTful endpoints used in the project (examples):

GET   /api/trips            -> list trips (optionally with filters)
GET   /api/trips/:id        -> get one trip by id
POST  /api/trips            -> create a new trip
PUT   /api/trips/:id        -> update trip data
DELETE /api/trips/:id       -> remove a trip


These endpoints are implemented in Express and interact with MongoDB.

Use query parameters for filtering (e.g., /api/trips?city=Boston).

Testing endpoints & troubleshooting notes <a name="testing"></a>

I used Postman to test HTTPS endpoints and confirm responses.

A simple first test is to open the endpoint in your browser (http://localhost:3000/api/trips) to see if JSON renders and to check for errors (404 / 500).

If encountering 404:

confirm the server is running,

verify the route path matches the request,

check that the DB connection is established and seeded with data.

API testing order suggestion:

Test GET list endpoint (basic connectivity).

Test GET /:id with a known ID.

Test POST to create a fixture record.

Test PUT to update that fixture.

Test DELETE to clean up.

Security considerations <a name="security"></a>

Always protect endpoints with proper authentication & authorization before exposing sensitive operations (especially POST/PUT/DELETE).

Use environment variables for credentials (e.g., MONGO_URI) — never commit secrets to the repo.

Validate and sanitize user input server-side to prevent injection attacks.

Use HTTPS in production and rely on continuous testing (unit + endpoint tests) to catch regressions.

Refactor / design decisions I made <a name="refactor"></a>

Converted the site from multiple static HTML files to a cleaner SPA structure for maintainability and readability.

Replaced repeated markup with Handlebars templates to reduce file size and duplication.

Moved data into JSON structures and separate seed files so the backend could load them into MongoDB cleanly — this made the codebase easier to navigate and reduced clutter.

As a result, the codebase is smaller, easier to debug, and the app responds faster to user interactions.

How to run the project locally <a name="run-local"></a>

Clone the repo:

git clone <your-repo-url>
cd <repo-folder>


Install dependencies:

npm install


Set environment variables (example .env):

PORT=3000
MONGO_URI=mongodb://localhost:27017/tripplanner


Seed the database (if a seed script exists):

node scripts/seed.js


Start the server:

npm start


In dev, you might run the front-end Angular dev server separately (if applicable):

cd client
npm install
ng serve --open


Test endpoints with Postman or by visiting:

http://localhost:3000/api/trips

What I learned / closing thoughts <a name="learned"></a>

This class taught me how to design both frontend and backend pieces so they work together cleanly — templating (HBS), SPA design (Angular), REST APIs (Express), and flexible data modeling (MongoDB + JSON). I enjoyed building my first website, adding routes, and learning how to keep code maintainable by refactoring into templates and JSON seed data. This project gave me a toolkit I can now apply to future full-stack work.
