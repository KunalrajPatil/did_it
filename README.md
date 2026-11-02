# Did It – Task Management App

Did It is a full-stack task management application that helps users organize and track their tasks in one place. Users can create, view, edit, delete, and update tasks while managing access through Clerk authentication and organization-based permissions.

## Features

- **User Authentication:** Secure authentication using Clerk.
- **Task Management:** Create, view, edit, and delete tasks.
- **Task Status Tracking:** Organize tasks into To Do, In Progress, and Done.
- **Organization-Based Permissions:** Control access to task operations based on user permissions.
- **REST API:** Backend APIs built using FastAPI.
- **Database Integration:** SQLite for storing task data.
- **Frontend Integration:** React frontend connected to the backend through API requests.
- **Protected Endpoints:** Authentication and permission checks for task operations.

## Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React, Vite, JavaScript |
| Backend | Python, FastAPI |
| Database | SQLite |
| Authentication | Clerk |
| API | REST API |
| Package Management | npm, uv |
| Version Control | Git, GitHub |

## Project Structure

```text
Did-It/
│
├── backend/
│   ├── app/
│   │   ├── core/
│   │   │   ├── auth.py
│   │   │   ├── clerk.py
│   │   │   └── config.py
│   │   │
│   │   ├── models/
│   │   ├── routes/
│   │   └── main.py
│   │
│   ├── start.py
│   ├── pyproject.toml
│   ├── uv.lock
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── ...
│   │
│   ├── public/
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── .env.example
│
├── .gitignore
└── README.md
```

## Requirements

Make sure the following tools are installed before running the project:

- Python 3.11 or above
- Node.js and npm
- uv (Python package manager)
- Git
- A Clerk account

## Getting Started

Follow these steps to run the application locally.

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install the Python dependencies:

```bash
uv sync
```

Create a `.env` file inside the backend directory:

```env
FRONTEND_URL=http://localhost:5173
CLERK_SECRET_KEY=your_clerk_secret_key
```

Add your actual Clerk secret key from your Clerk dashboard.

### 3. Start the Backend

Run the following command:

```bash
uv run start.py
```

The backend will start at:

```text
http://localhost:8000
```

### 4. Frontend Setup

Open another terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install the frontend dependencies:

```bash
npm install
```

Create a `.env` file inside the frontend directory:

```env
VITE_API_URL=http://localhost:8000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

Add your Clerk publishable key from the Clerk dashboard.

### 5. Start the Frontend

Run:

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```

Open the URL in your browser to use the application.

## Authentication and Authorization

Did It uses Clerk for user authentication and organization-based access control.

The backend checks the authenticated user's organization permissions before allowing protected task operations.

The application uses the following permissions:

| Permission | Access |
|---|---|
| `org:task:view` | View tasks |
| `org:task:create` | Create tasks |
| `org:task:edit` | Edit tasks |
| `org:task:delete` | Delete tasks |

These permissions must be configured in the Clerk dashboard and assigned to the appropriate organization roles.

## Task Status

Tasks can have three different statuses:

| Status | Description |
|---|---|
| `pending` | Task is yet to be started |
| `started` | Task is currently in progress |
| `completed` | Task has been completed |

## API Endpoints

The backend provides the following task management endpoints:

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/api/tasks` | Retrieve tasks |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/{task_id}` | Update an existing task |
| DELETE | `/api/tasks/{task_id}` | Delete a task |

All task endpoints require authentication and the relevant organization permission.

## Example Task Data

```json
{
  "title": "Complete project",
  "description": "Finish the task management application",
  "status": "pending"
}
```

## Application Workflow

1. A user signs in through Clerk.
2. The frontend obtains an authentication token.
3. API requests are sent from React to FastAPI with the authentication token.
4. FastAPI verifies the user's identity and organization permissions.
5. Authorized requests are processed by the backend.
6. Task data is stored or retrieved from SQLite.
7. The frontend displays the updated task information.

## Environment Variables

For security reasons, API keys and secret credentials are stored in environment files rather than hardcoded into the source code.

| Variable | Location | Purpose |
|---|---|---|
| `FRONTEND_URL` | Backend | Frontend origin for CORS and authentication configuration |
| `CLERK_SECRET_KEY` | Backend | Clerk backend authentication |
| `VITE_API_URL` | Frontend | FastAPI backend URL |
| `VITE_CLERK_PUBLISHABLE_KEY` | Frontend | Clerk frontend authentication |

**Important:** Never upload actual `.env` files or secret keys to GitHub.

## Running Both Servers

The project requires two terminal sessions.

**Terminal 1 – Backend**

```bash
cd backend
uv run start.py
```

**Terminal 2 – Frontend**

```bash
cd frontend
npm run dev
```

Then visit `http://localhost:5173`.

## What I Learned

While developing this project, I worked with:

- Building REST APIs using FastAPI.
- Connecting a React frontend with a Python backend.
- Implementing authentication using Clerk.
- Managing organization-based permissions.
- Performing CRUD operations.
- Working with SQLite databases.
- Handling CORS and API errors.
- Managing dependencies and environment variables.
- Using Git and GitHub for version control.

## Future Improvements

- Task search and filtering.
- Task priority management.
- Due dates and reminders.
- Improved dashboard and task statistics.
- PostgreSQL database support.
- Automated testing.
- Cloud deployment.

## License

This project was developed for learning and personal development purposes.
