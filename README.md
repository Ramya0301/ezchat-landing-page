
  # EZCHAT Landing Page Blueprint

  This is a code bundle for EZCHAT Landing Page Blueprint. The original project is available at https://www.figma.com/design/Ku97kRTMXn9sl0PqVE6rT3/EZCHAT-Landing-Page-Blueprint.

  ## Running the code

  Run `npm i` to install the dependencies.

  ### Development Mode

  You need to run both the frontend and backend servers:

  **Option 1: Run both together (recommended)**
  ```bash
  npm run dev:all
  ```

  **Option 2: Run separately**

  Terminal 1 - Backend Server:
  ```bash
  npm run server
  ```

  Terminal 2 - Frontend:
  ```bash
  npm run dev
  ```

  ## Email Configuration (Demo Form)

  The demo booking form sends emails to `` using Gmail SMTP. The backend server (`server.js`) handles email sending.

  ### Gmail SMTP Setup

  1. **Gmail Account Setup:**
     - Use the Gmail account: ``
     - Enable 2-Factor Authentication on your Google Account
     - Generate an App Password:
       - Go to Google Account → Security → 2-Step Verification → App Passwords
       - Create a new app password for "Mail"
       - Use this 16-character password (not your regular Gmail password)

  2. **Environment Variables:**
     Create a `.env` file in the root directory:
     ```
     EMAIL_USER=''
     EMAIL_PASSWORD=
     PORT=5001
     ```
     
     **Note:** The password `` is already configured as an App Password.

  3. **Frontend Configuration (optional):**
     If your backend runs on a different port or domain, add to `.env`:
     ```
     VITE_API_URL=http://localhost:5001
     ```

  ### How It Works

  - **Frontend** (React/Vite): Runs on `http://localhost:5173`
  - **Backend** (Express/Node.js): Runs on `http://localhost:5001`
  - When a user submits the demo form, the frontend sends data to the backend API
  - The backend uses Gmail SMTP to send a formatted email to ``
  - The user sees a success message after the email is sent

  ### Troubleshooting

  - If emails aren't sending, check that:
    - Both servers are running
    - The Gmail App Password is correct
    - The backend server logs show no errors
  - Check backend server logs at `http://localhost:5001/api/health` for status
  