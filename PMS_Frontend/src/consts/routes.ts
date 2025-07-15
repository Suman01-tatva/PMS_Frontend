export const PUBLIC_ROUTES = {
  HOME: "/",
  NOTFOUND: "*",
  LOGIN: `/login`,
  FORGOTPASSWORD: `/forgot-password`,
  RESETPASSWORD: `/reset-password/:token`,
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
  USER: "/users",
  PROJECT: "/project",
  SPRINT: "/sprint/:id",
  TASK: "/task/:id",
  PROFILE: "/profile",
};
