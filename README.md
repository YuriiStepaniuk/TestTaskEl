# Events Management Fullstack Project

This is a fullstack project for managing events, including an events board, event registration, and participant viewing. The project covers both basic and intermediate levels of functionality.

## Features

### Base Level

- **Events Board Page**:
  - Displays a paginated list of available events.
  - Each event consists of:
    - Title
    - Description
    - Event Date
    - Organizer
  - Events can be pre-populated manually or via a seed script.
- **Event Registration Page**:

  - Clicking on “Register” redirects users to the event registration page.
  - The registration form includes fields for:
    - Full Name
    - Email
    - Date of Birth
    - "Where did you hear about this event?"
  - Form submissions are stored in the database.

- **Event Participants Page**:
  - Clicking on “View” allows users to see a list of registered participants for an event.

### Middle Level

- **Everything from Base Level** plus:
- **Events Board Page**:

  - Ability to sort events by:
    - Title
    - Event Date
    - Organizer

- **Event Registration Page**:

  - Added form validation for all fields (customized validity requirements).
  - Integrated DatePicker for the Date of Birth input.

- **Event Participants Page**:
  - Added search functionality to filter participants by:
    - Full Name
    - Email

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/YuriiStepaniuk/TestTaskEl.git
   ```
2. Install dependencies:
   cd backend
   npm install
   cd ../
   npm install
3. Start the backend and frontend servers:
   cd ../
   npm start
   cd ./backend
   npx tsx app.ts

## Technologies Used

### Frontend:

- React
- TypeScript
- Tailwind CSS

### Backend:

- Node.js
- Express
- MongoDB
