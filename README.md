# PMS_Frontend

## Instalation
npm create vite@latest my-project
cd my-project

tailwind
npm install tailwindcss @tailwindcss/vite

vite.config.js
  plugins: [
    tailwindcss(),
  ],

css file
@import "tailwindcss";

redux
npm install @reduxjs/toolkit react-redux

npm install react-router-dom axios react-router
npm install @mui/material


# Folder Structure

src/
│
├── api/                   
│   └── index.ts
│   └── authApi.ts
│   └── userApi.ts
│   └── projectApi.ts
│   └── sprintApi.ts
│   └── taskApi.ts
│
├── app/                  
│   └── store.ts
│   └── rootReducer.ts
│   └── hooks.ts           # Typed redux hooks (useAppDispatch/useAppSelector)
│
├── assets/               
│
├── components/           
│   └── Button/
│       └── Button.tsx
│       └── Button.types.ts
│       └── index.ts
│   └── Table/
│       └── Table.tsx
│       └── Table.types.ts
│       └── index.ts
│
├── features/             
│   ├── auth/             
│   │   └── LoginPage.tsx
│   │   └── ResetPasswordPage.tsx
│   │   └── authSlice.ts
│   │   └── AuthService.ts
│   │   └── types.ts
│   │   └── components/
│   │
│   ├── dashboard/       
│   │   └── DashboardPage.tsx
│   │   └── dashboardSlice.ts
│   │   └── types.ts
│   │   └── components/
│   │
│   ├── users/           
│   │   └── UsersPage.tsx
│   │   └── UserForm.tsx
│   │   └── usersSlice.ts
│   │   └── types.ts
│   │   └── components/
│   │
│   ├── projects/        
│   │   └── ProjectsPage.tsx
│   │   └── ProjectForm.tsx
│   │   └── projectsSlice.ts
│   │   └── types.ts
│   │   └── components/
│   │
│   ├── sprints/         
│   │   └── SprintsPage.tsx
│   │   └── SprintForm.tsx
│   │   └── sprintsSlice.ts
│   │   └── types.ts
│   │   └── components/
│   │
│   └── tasks/           
│       └── TasksPage.tsx
│       └── TaskForm.tsx
│       └── tasksSlice.ts
│       └── types.ts
│       └── components/
│
├── hooks/               
│   └── useAuth.ts
│   └── usePagination.ts
│
├── layouts/             
│   └── MainLayout.tsx
│   └── AuthLayout.tsx
│
├── routes/              
│   └── AppRoutes.tsx
│   └── ProtectedRoute.tsx
│
├── utils/               
│   └── dateUtils.ts
│   └── validateEmail.ts
│
├── App.tsx
├── main.tsx             # (Vite) or index.tsx (CRA)
└── index.css