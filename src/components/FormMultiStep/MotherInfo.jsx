import React from "react";
import useFormContext from "../../hooks/useFormContext";
const MotherInfo = () => {
  const { data, handleChange } = useFormContext();

  const content = (
    <div className="flex flex-col">
      <label htmlFor="m_title">Title</label>
      <select
        id="m_title"
        className="form-textbox"
        name="m_title"
        value={data.m_title}
        onChange={handleChange}
      >
        <option value="Mr">Mr.</option>
        <option value="Mrs">Mrs.</option>
        <option value="Ms">Ms.</option>
      </select>

      <div className="flex items-center justify-between gap-5 flex-wrap">
        <div className="flex flex-col w-full">
          <label htmlFor="m_firstName">First Name</label>
          <input
            type="text"
            className="form-textbox"
            id="m_firstName"
            name="m_firstName"
            placeholder="Jane"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.m_firstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="m_secondName">Second Name</label>
          <input
            type="text"
            className="form-textbox"
            id="m_secondName"
            name="m_secondName"
            placeholder="Doe"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.m_secondName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 flex-wrap">
        <div className="flex flex-col w-full">
          <label htmlFor="m_middleName">Middle Name</label>
          <input
            type="text"
            className="form-textbox"
            id="m_middleName"
            name="m_middleName"
            placeholder="Middle Name"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.m_middleName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="m_surname">Surname Name</label>
          <input
            type="text"
            className="form-textbox"
            id="m_surname"
            name="m_surname"
            placeholder="Surname Name"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.m_surname}
            onChange={handleChange}
          />
        </div>
      </div>

      <label htmlFor="m_email">Email</label>
      <input
        type="email"
        className="form-textbox"
        id="m_email"
        name="m_email"
        placeholder="email"
        value={data.m_email}
        onChange={handleChange}
      />

      <div className="flex items-center justify-between gap-5 flex-wrap">
        <div className="flex flex-col w-full">
          <label htmlFor="m_phone1">Phone 1</label>
          <input
            type="text"
            className="form-textbox"
            id="m_phone1"
            name="m_phone1"
            placeholder="Phone 1"
            value={data.m_phone1}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="m_phone1">Phone 2</label>
          <input
            type="text"
            className="form-textbox"
            id="m_phone1"
            name="m_phone1"
            placeholder="Phone 2"
            value={data.m_phone1}
            onChange={handleChange}
          />
        </div>
      </div>

      <label htmlFor="m_address">Address</label>
      <input
        type="text"
        className="form-textbox"
        id="m_address"
        name="m_address"
        placeholder="Address"
        value={data.m_address}
        onChange={handleChange}
      />

      <label htmlFor="m_religion">Religion</label>
      <select
        id="m_religion"
        className="form-textbox"
        name="m_religion"
        value={data.m_religion}
        onChange={handleChange}
      >
        <option value="Muslim">Muslim</option>
        <option value="Christian">Christian</option>
        <option value="jows">jows</option>
      </select>

      <label htmlFor="m_country">Country</label>
      <select
        id="m_country"
        className="form-textbox"
        name="m_country"
        value={data.m_country}
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

export default MotherInfo;
