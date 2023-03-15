import React from "react";
import { default as useFormContext } from "../../hooks/useUpdateFormContext";

const MartialStatus = () => {
  const { data, handleChange, handleCustomElementChange } = useFormContext();

  const content = (
    <div className="flex flex-col">
      <label htmlFor="mr_status">
        Martial Status <span className="text-red-600">*</span>
      </label>
      <select
        id="mr_status"
        className="form-textbox"
        name="mr_status"
        value={data.mr_status}
        onChange={handleChange}
      >
        <option value="">[Select]</option>
        <option value="married">Married</option>
        <option value="divorced">Divorced</option>
        <option value="seperated">Seperated</option>
        <option value="widowed">Widowed</option>
        <option value="single_parent">Single Parent</option>
      </select>
    </div>
  );
  return content;
};

export default MartialStatus;
