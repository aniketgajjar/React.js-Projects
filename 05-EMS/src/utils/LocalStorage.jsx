const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Login Page UI",
        taskDescription: "Design responsive login page",
        taskDate: "2026-04-10",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Navbar Fix",
        taskDescription: "Fix mobile navbar issue",
        taskDate: "2026-04-09",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Connect",
        taskDescription: "Connect frontend with backend",
        taskDate: "2026-04-08",
        category: "Development"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Dashboard UI",
        taskDescription: "Create dashboard layout",
        taskDate: "2026-04-10",
        category: "UI"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Charts Add",
        taskDescription: "Add charts to dashboard",
        taskDate: "2026-04-09",
        category: "Feature"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Project Setup",
        taskDescription: "Setup project structure",
        taskDate: "2026-04-07",
        category: "Setup"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "REST API",
        taskDescription: "Build API endpoints",
        taskDate: "2026-04-10",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "DB Schema",
        taskDescription: "Design database schema",
        taskDate: "2026-04-08",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Auth System",
        taskDescription: "Create login auth",
        taskDate: "2026-04-06",
        category: "Security"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Testing",
        taskDescription: "Perform unit testing",
        taskDate: "2026-04-10",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Documentation",
        taskDescription: "Write API docs",
        taskDate: "2026-04-09",
        category: "Docs"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "CI/CD",
        taskDescription: "Setup deployment pipeline",
        taskDate: "2026-04-07",
        category: "DevOps"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Discuss requirements",
        taskDate: "2026-04-10",
        category: "Meeting"
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Report",
        taskDescription: "Prepare weekly report",
        taskDate: "2026-04-09",
        category: "Management"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Budget Plan",
        taskDescription: "Estimate project cost",
        taskDate: "2026-04-08",
        category: "Finance"
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
}