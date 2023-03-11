import React from "react";

import FormInput from "./FormInput";
import useFormContext from "../../hooks/useFormContext";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Form = () => {
  const {
    page,
    setPage,
    data,
    title,
    canSubmit,
    disablePrev,
    disableNext,
    prevHide,
    nextHide,
    submitHide,
  } = useFormContext();

  const handlePrev = () => setPage((prev) => prev - 1);

  const handleNext = () => setPage((prev) => prev + 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
  };

  const content = (
    <div className="section" id="admission">
      <div className="md:flex items-center justify-center">
        <div className="w-full px-4 py-6 space-y-6 bg-white rounded-md dark:bg-darker">
          <form
            className="space-y-6"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <header className="form-header">
              <h2 className="text-xl font-semibold text-center mb-2">
                {title[page]}
              </h2>

              <div className="flex items-center justify-end gap-5">
                {/* <button
              type="button"
              className={`bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded ${prevHide}`}
              onClick={handlePrev}
              disabled={disablePrev}
            >
              Prev
            </button> */}
                <AiOutlineLeft
                  className={`w-5 h-5 text-Teal cursor-pointer ${prevHide}`}
                  disabled={disablePrev}
                  onClick={handlePrev}
                />

                <p>Page 1 of 3</p>

                <AiOutlineRight
                  className={`w-5 h-5 text-Teal cursor-pointer ${nextHide}`}
                  disabled={disableNext}
                  onClick={handleNext}
                />

                {/* <button
              type="button"
              className={`bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded ${nextHide}`}
              onClick={handleNext}
              disabled={disableNext}
            >
              Next
            </button> */}

                <button
                  type="submit"
                  className={`bg-transparent hover:bg-Teal text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded cursor-pointer ${submitHide}`}
                  disabled={!canSubmit}
                >
                  Submit
                </button>
              </div>
            </header>

            <FormInput />
          </form>
        </div>
      </div>
    </div>
  );

  return content;
};

export default Form;
