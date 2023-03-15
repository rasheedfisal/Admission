import { HomePage, Layout, Form, UpdateForm } from "./components/index";

import { Routes, Route } from "react-router-dom";
import { FormProvider } from "./context/FormContext";
import { UpdateFormProvider } from "./context/FormUpdateContext";
import "react-toastify/dist/ReactToastify.css";

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

        <Route
          path="/old"
          element={
            <UpdateFormProvider>
              <UpdateForm />
            </UpdateFormProvider>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
