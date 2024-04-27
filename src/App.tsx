import React from "react";
import { RouterProvider } from "react-router-dom";
import Layouts from "./layouts";
import { router } from "./router"; // Ensure PageRouter is a correctly configured router object

const App: React.FC = () => {

  return (
    <Layouts>
      <RouterProvider router={router} />
    </Layouts>
  );
};

export default App;
