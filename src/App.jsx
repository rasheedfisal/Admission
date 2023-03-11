import { HomePage, Layout, Form } from "./components/index";

import { Routes, Route } from "react-router-dom";
import { FormProvider } from "./context/FormContext";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/admission"
          element={
            <FormProvider>
              <Form />
            </FormProvider>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
