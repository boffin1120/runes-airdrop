import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

// pages
const Home = lazy(() => import("./pages/Home"));

// Create router object with RouteObject array type for type safety
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
  },
]);
