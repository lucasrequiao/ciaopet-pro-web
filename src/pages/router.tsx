import { createBrowserRouter } from "react-router"
import { LoginPage } from "./LoginPage"
import { DashboardPage } from "./DashboardPage"
import { GalleryPage } from "./GalleryPage"

export const router = createBrowserRouter([
    {path: "/", element: <DashboardPage />},
    {path: "/login", element: <LoginPage />},
    {path: "/gallery", element: <GalleryPage />},
]) 