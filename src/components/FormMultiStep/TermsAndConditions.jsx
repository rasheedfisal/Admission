import React from "react";
import useFormContext from "../../hooks/useFormContext";
const TermsAndConditions = () => {
  const { data, handleChange } = useFormContext();
  return (
    <div>
      <p>
        The following the terms and conditions are the key protect of your
        personal data and the rights to hold these data and submit it to higher
        education authorities:
      </p>
      <p>
        a. I allow the admission website to submit my personal information to
        anybodies that is related or a third party in the higher education
        process.{" "}
      </p>
      <p>
        b. I confirm the that personal information are all correct and the
        attached documents are copy of the original and that I applied for the
        course of my choice.{" "}
      </p>
      <p>
        c. I am aware that the school might request additional documents at any
        admission or registration stage , So, I will confirm any other documents
        to the school whenever asked to do so.{" "}
      </p>
      <p>
        d. I confirm that I will submit the original of the documents attached
        at the registration process.{" "}
      </p>
      <p>
        e. I am aware that submitting my application does not mean that will
        offer me a place unless I receive a confirmation from the School
      </p>
      <p>
        f. If at any stage of my application, registration and academic study
        appears that there is any incorrect of my personal data or the documents
        attached has no original copy or beingforged, I confirm that the School
        has no involvement with such action and that is my personal
        responsibility.{" "}
      </p>
      <p>
        g. I read and understand the regulations & policies of the School and
        will respect and abide by these regulations & policies.
      </p>

      <div className="form-check">
        <input
          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="checkbox"
          onChange={handleChange}
          checked={data.t_agreed}
        />
        <label className="form-check-label inline-block text-gray-800 dark:text-gray-100">
          I Agree
        </label>
      </div>
    </div>
  );
};

export default TermsAndConditions;
