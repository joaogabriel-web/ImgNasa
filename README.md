# ImgNasa

ImgNasa will provide NASA astronomy content, starting with the APOD (Astronomy
Picture of the Day). The frontend and backend are maintained separately and
communicate through an API.

## Backend (initial setup)

The backend uses Node.js, Express, and MySQL. The current backend foundation
provides a database-aware health endpoint; the APOD API will be added in a later
step.

Requirements: Node.js 20+ and Docker with Docker Compose.

1. Add the MySQL variables from [.env.example](./.env.example) to the existing
   root `.env` file. Do not replace existing NASA API variables there.
2. Start the local database from the repository root:

   ```sh
   docker compose up -d mysql
   ```

3. Install and start the backend:

   ```sh
   cd backend
   npm install
   npm start
   ```

4. Check `http://localhost:3000/health`. A healthy response is
   `{"status":"ok","database":"ok"}`.

Run backend tests with `npm test` from the `backend` directory.