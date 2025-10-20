# Kaiburr Assessment - Task 3: Web UI Forms

## 📋 Task Description

Develop a web application UI to interact with the Task Manager REST API using React, TypeScript, and Ant Design. The application provides a modern, responsive interface for managing tasks with full CRUD operations and command execution capabilities.

---

## 🎯 Features Implemented

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

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.x | UI Framework |
| **TypeScript** | 5.x | Type Safety |
| **Ant Design** | 5.x | Component Library |
| **Axios** | 1.x | HTTP Client |
| **Node.js** | 20+ | Runtime |
| **CSS3** | - | Custom Styling |

---

## 📁 Project Structure

task-manager-ui/
├── public/
│ ├── index.html
│ ├── favicon.ico
│ └── manifest.json
├── src/
│ ├── components/
│ │ ├── TaskList.tsx # Main table with CRUD operations
│ │ ├── CreateTaskModal.tsx # Task creation form
│ │ ├── SearchBar.tsx # Search and create button
│ │ └── ExecutionHistory.tsx # Execution history display
│ ├── services/
│ │ └── taskService.ts # API integration layer
│ ├── types/
│ │ └── Task.ts # TypeScript interfaces
│ ├── App.tsx # Main application component
│ ├── App.css # Global styles (dark theme)
│ ├── index.tsx # Application entry point
│ └── index.css # Base styles
├── package.json
├── tsconfig.json
└── README.md

text

---

## 🎨 Design Specifications

### Color Palette
- **Background:** `#1e1e1e` (Dull grey for better visibility)
- **Cards/Tables:** `#2a2a2a`
- **Borders:** `#3a3a3a`
- **Primary Accent:** `#20c997` (Teal)
- **Text:** `#ffffff` / `#e0e0e0` / `#b0b0b0`

### Typography
- **Headings:** Druk Wide Bold
- **Body Text:** System fonts (-apple-system, Roboto, Segoe UI)
- **Code/Commands:** Monospace

### Layout
- **Max Width:** 1400px (centered)
- **Header:** Sticky with centered title
- **Responsive:** Horizontal scrolling tables on mobile
- **Cards:** Glass-morphism effect with subtle borders

---

## 🚀 Setup and Installation

### Prerequisites
Ensure Node.js 20+ is installed
node --version

Ensure backend is running on localhost:8080
Test: http://localhost:8080/tasks
text

### Installation Steps

**1. Clone the repository:**
git clone https://github.com/ShyamAnand2/Kaiburr-Assessment-Task3.git
cd Kaiburr-Assessment-Task3

text

**2. Install dependencies:**
npm install

text

**3. Start development server:**
npm start

text

**4. Access the application:**
http://localhost:3000

text

---

## 🔗 API Integration

### Backend Connection
// src/services/taskService.ts
const API_BASE_URL = 'http://localhost:8080/tasks';

text

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

text

---

## 📸 Screenshots

### 1. Main Task List View
![Main View](screenshots/01-main-view.png)
*Task list with search bar, create button, and responsive table*

### 2. Create Task Modal
![Create Task](screenshots/02-create-task-modal.png)
*Form to create new tasks with validation*

### 3. Task Execution History
![Execution History](screenshots/03-execution-history.png)
*Expandable rows showing execution details with terminal-style output*

### 4. Search Functionality
![Search](screenshots/04-search-functionality.png)
*Real-time task filtering by name*

### 5. Responsive Design
![Responsive](screenshots/05-responsive-design.png)
*Table adapts to different screen sizes*

---

## 🎮 Usage Guide

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

## 🏗️ Build for Production

Create optimized production build
npm run build

Build output in /build directory
Deploy build/ folder to web server
text

---

## 🧪 Testing

Run tests
npm test

Run tests with coverage
npm test -- --coverage

text

---

## 🐛 Troubleshooting

### Issue: "Failed to load tasks"
**Solution:** Ensure backend is running on `http://localhost:8080`

### Issue: CORS errors in console
**Solution:** Add `@CrossOrigin` annotation to backend controller

### Issue: Execute button not working
**Solution:** Check backend logs and Network tab in DevTools

### Issue: Tasks have no execution history
**Solution:** Verify backend `execute` endpoint saves executions to MongoDB

---

## 🔧 Configuration

### Changing Backend URL
Edit `src/services/taskService.ts`:
const API_BASE_URL = 'http://your-backend-url:port/tasks';

text

### Customizing Theme
Edit `src/App.css` to change colors:
.app-layout {
background: #1e1e1e; /* Change background color */
}

text

---

## 📦 Dependencies

{
"dependencies": {
"react": "^19.0.0",
"react-dom": "^19.0.0",
"typescript": "^5.0.0",
"antd": "^5.0.0",
"axios": "^1.0.0"
}
}

text

---

## 🌟 Key Highlights

1. **Modern React 19** - Latest features and performance
2. **Type Safety** - Full TypeScript implementation
3. **Professional UI** - Ant Design components
4. **Dark Theme** - Comfortable viewing experience
5. **Responsive** - Works on all devices
6. **Real-time** - Instant feedback on operations
7. **Error Handling** - Graceful error management
8. **Clean Code** - Well-organized component structure

---

## 📝 Notes

- All screenshots include **system datetime** and **user name** as per submission requirements
- Backend must be running before starting frontend
- Commands must start with `echo` for security (backend validation)
- Node modules (~500MB) not included in repo - run `npm install`

---

## 👨‍💻 Author

**Shyam Anand**  
Final Year Computer and Communication Engineering Student  
Amrita Vishwa Vidyapeetham, Madurai Campus  

**Date:** October 20, 2025  
**Assessment:** Kaiburr 2025 - Task 3

---

## 📄 License

This project is submitted as part of the Kaiburr Assessment 2025.

---

## 🔗 Related Repositories

- **Task 1:** [REST API with Spring Boot](https://github.com/ShyamAnand2/Kaiburr-Assessment-Task1)
- **Task 2:** [Kubernetes Deployment](https://github.com/ShyamAnand2/Kaiburr-Assessment-Task2)