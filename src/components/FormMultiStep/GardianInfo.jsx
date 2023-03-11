import React from "react";
import useFormContext from "../../hooks/useFormContext";
const GardianInfo = () => {
  const { data, handleChange } = useFormContext();

  const content = (
    <div className="flex flex-col">
      <div className="flex items-center justify-start gap-5 flex-wrap">
        <div className="form-check">
          <input
            className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            onChange={handleChange}
            checked={data.sameAsFather}
          />
          <label className="form-check-label inline-block text-gray-800 dark:text-gray-100">
            Same As Father
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            onChange={handleChange}
            checked={data.sameAsMother}
          />
          <label className="form-check-label inline-block text-gray-800 dark:text-gray-100">
            Same As Mother
          </label>
        </div>
      </div>

      <label htmlFor="g_title">Title</label>
      <select
        id="g_title"
        className="form-textbox"
        name="g_title"
        value={data.g_title}
        onChange={handleChange}
      >
        <option value="Mr">Mr.</option>
        <option value="Mrs">Mrs.</option>
        <option value="Ms">Ms.</option>
      </select>

      <div className="flex items-center justify-between gap-5 flex-wrap">
        <div className="flex flex-col w-full">
          <label htmlFor="g_firstName">First Name</label>
          <input
            type="text"
            className="form-textbox"
            id="g_firstName"
            name="g_firstName"
            placeholder="Jane"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.g_firstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="g_secondName">Second Name</label>
          <input
            type="text"
            className="form-textbox"
            id="g_secondName"
            name="g_secondName"
            placeholder="Doe"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.g_secondName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 flex-wrap">
        <div className="flex flex-col w-full">
          <label htmlFor="g_middleName">Middle Name</label>
          <input
            type="text"
            className="form-textbox"
            id="g_middleName"
            name="g_middleName"
            placeholder="Middle Name"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.g_middleName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="g_surname">Surname Name</label>
          <input
            type="text"
            className="form-textbox"
            id="g_surname"
            name="g_surname"
            placeholder="Surname Name"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.g_surname}
            onChange={handleChange}
          />
        </div>
      </div>

      <label htmlFor="g_email">Email</label>
      <input
        type="email"
        className="form-textbox"
        id="g_email"
        name="g_email"
        placeholder="email"
        value={data.g_email}
        onChange={handleChange}
      />

      <div className="flex items-center justify-between gap-5 flex-wrap">
        <div className="flex flex-col w-full">
          <label htmlFor="g_phone1">Phone 1</label>
          <input
            type="text"
            className="form-textbox"
            id="g_phone1"
            name="g_phone1"
            placeholder="Phone 1"
            value={data.g_phone1}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="g_phone1">Phone 2</label>
          <input
            type="text"
            className="form-textbox"
            id="g_phone1"
            name="g_phone1"
            placeholder="Phone 2"
            value={data.g_phone1}
            onChange={handleChange}
          />
        </div>
      </div>

      <label htmlFor="g_address">Address</label>
      <input
        type="text"
        className="form-textbox"
        id="g_address"
        name="g_address"
        placeholder="Address"
        value={data.g_address}
        onChange={handleChange}
      />

      <label htmlFor="g_religion">Religion</label>
      <select
        id="g_religion"
        className="form-textbox"
        name="g_religion"
        value={data.g_religion}
        onChange={handleChange}
      >
        <option value="Muslim">Muslim</option>
        <option value="Christian">Christian</option>
        <option value="jows">jows</option>
      </select>

      <label htmlFor="g_country">Country</label>
      <select
        id="g_country"
        className="form-textbox"
        name="g_country"
        value={data.g_country}
        onChange={handleChange}
      >
        <option value="Sudan">Sudan</option>
        <option value="Egypt">Egypt</option>
        <option value="UAE">UAE</option>
      </select>
    </div>
  );

  return content;
};

export default GardianInfo;
