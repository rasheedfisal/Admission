import React, { useState } from "react";

import FormInput from "./FormInput";
import useFormContext from "../../hooks/useFormContext";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Form = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    console.log(JSON.stringify(data));
    setLoading(false);

    toast.success("Information Submitted Successfully.");

    setTimeout(() => navigate("/"), 6000);
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

              <div className="flex justify-between items-center flex-wrap">
                <div className="flex justify-start">
                  <label className={`text-red-600 ${prevHide ? "hidden" : ""}`}>
                    Required: *
                  </label>
                </div>

                <div className="flex items-center justify-end gap-5">
                  <button
                    type="button"
                    className={`bg-transparent hover:bg-Teal text-blue-dark font-semibold hover:text-white text-sm py-1 px-1 border border-blue hover:border-transparent rounded disabled:opacity-25 ${prevHide}`}
                    onClick={handlePrev}
                    disabled={disablePrev}
                  >
                    <AiOutlineLeft
                      className={`w-5 h-5 text-Teal hover:text-white cursor-pointer`}
                    />
                  </button>

                  <p>
                    Page {page + 1} of {Object.keys(title).length}
                  </p>

                  <button
                    type="button"
                    className={`bg-transparent hover:bg-Teal text-blue-dark font-semibold hover:text-white py-1 px-1 border border-blue hover:border-transparent rounded disabled:opacity-25 ${nextHide}`}
                    onClick={handleNext}
                    disabled={disableNext}
                  >
                    <AiOutlineRight
                      className={`w-5 h-5 text-Teal hover:text-white cursor-pointer`}
                    />
                  </button>

                  <button
                    type="submit"
                    className={`bg-transparent hover:bg-Teal text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded cursor-pointer ${submitHide}`}
                    disabled={!canSubmit}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="w-6 h-6 mr-3 -ml-1 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <div className="font-bold">Submitting...</div>
                      </>
                    ) : (
                      <>
                        <div className="font-bold">Submit</div>
                      </>
                    )}
                  </button>
                </div>
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
