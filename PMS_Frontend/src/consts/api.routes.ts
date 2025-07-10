const API_URL = import.meta.env.API_URL || "http://localhost:5254/api";

export const PUBLIC_ROUTES = {
  HOME: "/",
  LOGIN: `${API_URL}/Auth/login`,
  FORGOTPASSWORD: `${API_URL}/Auth/forgotpassword`,
  RESETPASSWORD: `${API_URL}/Auth/resetpassword/:token`,
  SUBMITRESETPASSWORD: `${API_URL}/Auth/reset-password`,
};

export const PRIVATE_ROUTES = {
  DASHBOARD: "/dashboard",
  USER_ROUTES: {
    CREATE: "/user/create",
    EDIT: "/user/update/:id",
    LIST: "/user/list",
  },
  PROJECT_ROUTES: {
    CREATE: "/project/create",
    EDIT: "/project/update/:id",
    LIST: "/project/list",
  },
  SPRINT_ROUTES: {
    CREATE: "/sprint/create",
    EDIT: "/sprint/update/:id",
    LIST: "/sprint/list",
  },
  TASK_ROUTES: {
    CREATE: "/task/create",
    EDIT: "/task/update/:id",
    LIST: "/task/list",
  },
  USER: "/user",
  PROJECT: "/project",
  SPRINT: "/sprint/:id",
  TASK: "/task/:id",
  PROFILE: "/profile",
};
