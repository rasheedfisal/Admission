import React from "react";
import useFormContext from "../../hooks/useFormContext";
import PhoneInput from "react-phone-number-input";

const EmergencyInfo = () => {
  const { data, handleChange, handleCustomElementChange } = useFormContext();

  const content = (
    <div className="flex flex-col">
      <label htmlFor="e_relation">
        Relationship <span className="text-red-600">*</span>
      </label>
      <select
        id="e_relation"
        className="form-textbox"
        name="e_relation"
        value={data.e_relation}
        onChange={handleChange}
      >
        <option value="">[Select]</option>
        <option value="father">Father</option>
        <option value="mother">Mother</option>
        <option value="uncle">Uncle</option>
        <option value="aunt">Aunt</option>
        <option value="brother">Brother</option>
        <option value="sister">Sister</option>
        <option value="grandfather">GrandFather</option>
        <option value="grandmother">GrandMother</option>
      </select>

      <label htmlFor="e_contact">Phone</label>

      <PhoneInput
        placeholder="Enter phone number"
        className="form-textbox"
        id="e_contact"
        name="e_contact"
        value={data.e_contact}
        onChange={(e) => handleCustomElementChange(e, "e_contact")}
      />

      <label htmlFor="e_email">
        Email <span className="text-red-600">*</span>
      </label>
      <input
        type="email"
        className="form-textbox"
        id="e_email"
        name="e_email"
        value={data.e_email}
        onChange={handleChange}
      />
    </div>
  );

  return content;
};

export default EmergencyInfo;
