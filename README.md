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

```
C:.
|   .gitattributes
|   .gitignore
|   Dockerfile
|   HELP.md
|   mvnw
|   mvnw.cmd
|   pom.xml
|   structure.txt
|   
+---.mvn
|   \---wrapper
|           maven-wrapper.properties
|           
+---.vscode
|       settings.json
|       
+---Kubernetes_YAML
|       app-deployment.yaml
|       mongodb-deployment.yaml
|       rbac.yaml
|       
+---src
|   +---main
|   |   +---java
|   |   |   \---com
|   |   |       \---platinum
|   |   |           \---task_manager
|   |   |                   CorsConfig.java
|   |   |                   PlatinumTaskManagerApplication.java
|   |   |                   Task.java
|   |   |                   TaskController.java
|   |   |                   TaskExecution.java
|   |   |                   TaskRepository.java
|   |   |                   
|   |   \---resources
|   |       |   application.properties
|   |       |   
|   |       +---static
|   |       \---templates
|   \---test
|       \---java
|           \---com
|               \---platinum
|                   \---task_manager
|                           TaskManagerApplicationTests.java
|                           
\---target
    |   task-manager-0.0.1-SNAPSHOT.jar
    |   task-manager-0.0.1-SNAPSHOT.jar.original
    |   
    +---classes
    |   |   application.properties
    |   |   
    |   \---com
    |       \---platinum
    |           \---task_manager
    |                   CorsConfig.class
    |                   PlatinumTaskManagerApplication.class
    |                   Task.class
    |                   TaskController.class
    |                   TaskExecution.class
    |                   TaskRepository.class
    |                   
    +---generated-sources
    |   \---annotations
    +---generated-test-sources
    |   \---test-annotations
    +---maven-archiver
    |       pom.properties
    |       
    +---maven-status
    |   \---maven-compiler-plugin
    |       +---compile
    |       |   \---default-compile
    |       |           createdFiles.lst
    |       |           inputFiles.lst
    |       |           
    |       \---testCompile
    |           \---default-testCompile
    |                   createdFiles.lst
    |                   inputFiles.lst
    |                   
    \---test-classes
        \---com
            \---platinum
                \---task_manager
                        TaskManagerApplicationTests.class
```

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

## 🚀 Setup and Installation

### Prerequisites
Ensure Node.js 20+ is installed
node --version

Ensure backend is running on localhost:8080
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

## 🔗 API Integration

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
>>>>>>> b303f90a9f850bf7fb828edc9ca05b3be7c7590e

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

---

## 🧪 Testing

Run tests
npm test

Run tests with coverage
npm test -- --coverage

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

### Customizing Theme
Edit `src/App.css` to change colors:
.app-layout {
background: #1e1e1e; /* Change background color */
}

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

## 🔗 Related Repositories

- **Task 1:** [REST API with Spring Boot](https://github.com/ShyamAnand2/Kaiburr-Assessment-Task1)
- **Task 2:** [Kubernetes Deployment](https://github.com/ShyamAnand2/Kaiburr-Assessment-Task2)

