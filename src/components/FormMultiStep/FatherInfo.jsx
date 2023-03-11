import React from "react";
import useFormContext from "../../hooks/useFormContext";
const FatherInfo = () => {
  const { data, handleChange } = useFormContext();

  const content = (
    <div className="flex flex-col">
      <label htmlFor="f_title">Title</label>
      <select
        id="f_title"
        className="form-textbox"
        name="f_title"
        value={data.f_title}
        onChange={handleChange}
      >
        <option value="Mr">Mr.</option>
        <option value="Mrs">Mrs.</option>
        <option value="Ms">Ms.</option>
      </select>

      <div className="flex items-center justify-between gap-5 flex-wrap">
        <div className="flex flex-col w-full">
          <label htmlFor="f_firstName">First Name</label>
          <input
            type="text"
            className="form-textbox"
            id="f_firstName"
            name="f_firstName"
            placeholder="Jane"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.f_firstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="f_secondName">Second Name</label>
          <input
            type="text"
            className="form-textbox"
            id="f_secondName"
            name="f_secondName"
            placeholder="Doe"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.f_secondName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 flex-wrap">
        <div className="flex flex-col w-full">
          <label htmlFor="f_middleName">Middle Name</label>
          <input
            type="text"
            className="form-textbox"
            id="f_middleName"
            name="f_middleName"
            placeholder="Middle Name"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.f_middleName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="f_surname">Surname Name</label>
          <input
            type="text"
            className="form-textbox"
            id="f_surname"
            name="f_surname"
            placeholder="Surname Name"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.f_surname}
            onChange={handleChange}
          />
        </div>
      </div>

      <label htmlFor="f_email">Email</label>
      <input
        type="email"
        className="form-textbox"
        id="f_email"
        name="f_email"
        placeholder="email"
        value={data.f_email}
        onChange={handleChange}
      />

      <div className="flex items-center justify-between gap-5 flex-wrap">
        <div className="flex flex-col w-full">
          <label htmlFor="f_phone1">Phone 1</label>
          <input
            type="text"
            className="form-textbox"
            id="f_phone1"
            name="f_phone1"
            placeholder="Phone 1"
            value={data.f_phone1}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="f_phone1">Phone 2</label>
          <input
            type="text"
            className="form-textbox"
            id="f_phone1"
            name="f_phone1"
            placeholder="Phone 2"
            value={data.f_phone1}
            onChange={handleChange}
          />
        </div>
      </div>

      <label htmlFor="f_address">Address</label>
      <input
        type="text"
        className="form-textbox"
        id="f_address"
        name="f_address"
        placeholder="Address"
        value={data.f_address}
        onChange={handleChange}
      />

      <label htmlFor="f_religion">Religion</label>
      <select
        id="f_religion"
        className="form-textbox"
        name="f_religion"
        value={data.f_religion}
        onChange={handleChange}
      >
        <option value="Muslim">Muslim</option>
        <option value="Christian">Christian</option>
        <option value="jows">jows</option>
      </select>

      <label htmlFor="f_country">Country</label>
      <select
        id="f_country"
        className="form-textbox"
        name="f_country"
        value={data.f_country}
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

export default FatherInfo;
