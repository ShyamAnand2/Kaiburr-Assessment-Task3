# Kaiburr Assessment - Task 3: Web UI Forms

## Task Description

Develop a web application UI to interact with the Task Manager REST API using React, TypeScript, and Ant Design. The application provides a modern, responsive interface for managing tasks with full CRUD operations and command execution capabilities.

---

## Features Implemented

### Core Functionality
✅ **View All Tasks** - Display tasks in a responsive table with pagination  
✅ **Create Tasks** - Modal form to add new tasks  
✅ **Search Tasks** - Real-time search by task name  
✅ **Execute Commands** - Run task commands and view output  
✅ **View Execution History** - Expandable rows showing execution details  
✅ **Delete Tasks** - Remove tasks with confirmation dialog  

### UI/UX Features
✅ **Dark Theme** - Professional Perplexity-inspired design  
✅ **Responsive Layout** - Works on desktop, tablet, and mobile  
✅ **Real-time Updates** - Automatic refresh after operations  
✅ **Loading States** - Visual feedback during API calls  
✅ **Error Handling** - User-friendly error messages  
✅ **Form Validation** - Required field validation  

---

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.x | UI Framework |
| **TypeScript** | 5.x | Type Safety |
| **Ant Design** | 5.x | Component Library |
| **Axios** | 1.x | HTTP Client |
| **Node.js** | 20+ | Runtime |
| **CSS3** | - | Custom Styling |

---

## Project Structure
```
src/
├── components/
│ ├── TaskList.tsx # Main table component
│ ├── CreateTaskModal.tsx # Task creation form
│ ├── SearchBar.tsx # Search and create button
│ └── ExecutionHistory.tsx # Expandable execution display
├── services/
│ └── taskService.ts # API integration
├── types/
│ └── Task.ts # TypeScript interfaces
├── App.tsx # Main application
└── App.css # Custom styling
```
---

## Design Specifications

#### UI Design & Color System

Our Task Manager frontend features a modern, glass-inspired layout with soft gradients and rich purple-blue accents. Key sections are arranged in rounded cards with translucent, frosted glass effects, floating above a gentle background gradient. The primary palette uses vivid violet (#7b52ff) and lavender (#c288fe), paired with a relaxing blue-cyan base (#e8eafc → #c2e9fb).

The design is fully responsive—buttons, tables, and forms resize fluidly from mobile to desktop. Input controls and active elements carry subtle glows and color transitions for a premium, accessible feel. Empty tasks are created to display friendly icons within glassy cards to give it a professional feel.

---

## Setup and Installation

### Prerequisites

#### Ensure Node.js 20+ is installed
node --version

#### Ensure backend is running on localhost:8080
Test: http://localhost:8080/tasks

### Installation Steps

**1. Clone the repository:**
git clone https://github.com/ShyamAnand2/Kaiburr-Assessment-Task3.git
cd Kaiburr-Assessment-Task3

**2. Install dependencies:**
npm install

**3. Start development server:**
npm start

**4. Access the application:**
http://localhost:3000

---

## API Integration

### Backend Connection
// src/services/taskService.ts
const API_BASE_URL = 'http://localhost:8080/tasks';

### API Endpoints Used

| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/tasks` | Fetch all tasks |
| **POST** | `/tasks` | Create new task |
| **PUT** | `/tasks/{id}` | Update task |
| **DELETE** | `/tasks/{id}` | Delete task |
| **PUT** | `/tasks/{id}/execute` | Execute task command |
| **GET** | `/tasks/search?name={name}` | Search tasks |

### CORS Configuration
Backend must have CORS enabled for `http://localhost:3000`:
@CrossOrigin(origins = "http://localhost:3000")

---

## 📸 Screenshots

### 1. Main Task List View
<img width="1918" height="1078" alt="Task-3-localhost" src="https://github.com/user-attachments/assets/7e4fcbda-61c1-47d9-80f6-0b549e9545ad" />


### 2. Create Task Modal
<img width="1918" height="1078" alt="Task-3-TaskModal" src="https://github.com/user-attachments/assets/a6a78c96-3808-4bcc-8dd8-b385fe993462" />


### 3. Task Execution History
<img width="1918" height="1078" alt="Task-3-EXECUTE" src="https://github.com/user-attachments/assets/e81976b6-c70e-4d31-9db3-f0f845e45ca9" />


### 4. Search Functionality
<img width="1918" height="1077" alt="Task-3-SEARCH" src="https://github.com/user-attachments/assets/0ab656cd-bfe3-4091-a2df-979bcad1de90" />


### 5. Full-Stack Activation (Back-End and Front-End)
<img width="1918" height="1078" alt="Tas-3-FullStack" src="https://github.com/user-attachments/assets/af0d7c41-9bbb-4e6a-ba55-37821cdde0e8" />

---

## Usage Guide

### Creating a Task
1. Click **"New Task"** button (top right)
2. Fill in the form:
   - **Task Name:** Descriptive name
   - **Owner:** Owner's name
   - **Command:** Shell command (must start with `echo`)
3. Click **"Create"**

### Executing a Task
1. Click **"Execute"** button on any task
2. Wait for success message
3. Click **► arrow** to view execution history
4. See timestamps and command output

### Searching Tasks
1. Type task name in search bar
2. Press Enter or click search icon
3. View filtered results
4. Clear search to see all tasks

### Deleting a Task
1. Click **"Delete"** button
2. Confirm in the popup dialog
3. Task is removed from the list

---

## Build for Production

Create optimized production build
npm run build

Build output in /build directory
Deploy build/ folder to web server

---

## Testing

Run tests
npm test

Run tests with coverage
npm test -- --coverage

---

## Configuration

### Changing Backend URL
Edit `src/services/taskService.ts`:
const API_BASE_URL = 'http://your-backend-url:port/tasks';

### Customizing Theme
Edit `src/App.css` to change colors:
.app-layout {
background: #1e1e1e; /* Change background color */
}

---

## Dependencies

{
"dependencies": {
"react": "^19.0.0",
"react-dom": "^19.0.0",
"typescript": "^5.0.0",
"antd": "^5.0.0",
"axios": "^1.0.0"
}
}

---

## Key Highlights

1. **Modern React 19** - Latest features and performance
2. **Type Safety** - Full TypeScript implementation
3. **Professional UI** - Ant Design components
4. **Dark Theme** - Comfortable viewing experience
5. **Responsive** - Works on all devices
6. **Real-time** - Instant feedback on operations
7. **Error Handling** - Graceful error management
8. **Clean Code** - Well-organized component structure

---

## Notes

- All screenshots include **system datetime** and **user name** as per submission requirements
- Backend must be running before starting frontend
- Commands must start with `echo` for security (backend validation)
- Node modules (~500MB) not included in repo - run `npm install`

---

## Author

**Shyam Anand**  
Final Year Computer and Communication Engineering Student  
Amrita Vishwa Vidyapeetham, Madurai Campus  

**Date:** October 20, 2025  
**Assessment:** Kaiburr 2025 - Task 3

## Related Repositories

- **Task 1:** [REST API with Spring Boot](https://github.com/ShyamAnand2/Kaiburr-Assessment-Task1)
- **Task 2:** [Kubernetes Deployment](https://github.com/ShyamAnand2/Kaiburr-Assessment-Task2)

