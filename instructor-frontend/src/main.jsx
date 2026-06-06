import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/HomePage";
import Instructors from "./pages/InstructorListPage";
import InstructorDetailPage from "./pages/InstructorDetailPage";
import Dashboard from "./pages/DashboardPage";
import Login from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProtectedRoute from "./routes/ProtectedRoute";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "instructors/:id",
        element: <InstructorDetailPage />,
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);