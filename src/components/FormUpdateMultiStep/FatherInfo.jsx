import React from "react";
import { default as useFormContext } from "../../hooks/useUpdateFormContext";
import PhoneInput from "react-phone-number-input";
const FatherInfo = () => {
  const { data, handleChange, handleCustomElementChange } = useFormContext();

  const content = (
    <div className="flex flex-col">
      <div className="flex items-center justify-between gap-5 flex-wrap">
        <div className="flex flex-col w-full">
          <label htmlFor="f_firstName">
            1st Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="form-textbox"
            id="f_firstName"
            name="f_firstName"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.f_firstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="f_secondName">
            2nd Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="form-textbox"
            id="f_secondName"
            name="f_secondName"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.f_secondName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 flex-wrap">
        <div className="flex flex-col w-full">
          <label htmlFor="f_middleName">
            3rd Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="form-textbox"
            id="f_middleName"
            name="f_middleName"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.f_middleName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="f_surname">
            4th Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="form-textbox"
            id="f_surname"
            name="f_surname"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.f_surname}
            onChange={handleChange}
          />
        </div>
      </div>

      <label htmlFor="f_email">
        Email <span className="text-red-600">*</span>
      </label>
      <input
        type="email"
        className="form-textbox"
        id="f_email"
        name="f_email"
        value={data.f_email}
        onChange={handleChange}
      />

      <div className="flex items-center justify-between gap-5 flex-wrap">
        <div className="flex flex-col w-full">
          <label htmlFor="f_phone1">
            Phone 1 <span className="text-red-600">*</span>
          </label>

          <PhoneInput
            placeholder="Enter phone number"
            defaultCountry="SD"
            className="form-textbox"
            id="f_phone1"
            name="f_phone1"
            value={data.f_phone1}
            onChange={(e) => handleCustomElementChange(e, "f_phone1")}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="f_phone2">Phone 2</label>

          <PhoneInput
            placeholder="Enter phone number"
            defaultCountry="SD"
            className="form-textbox"
            id="f_phone2"
            name="f_phone2"
            value={data.f_phone2}
            onChange={(e) => handleCustomElementChange(e, "f_phone2")}
          />
        </div>
      </div>

      <label htmlFor="f_address">
        Address <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        className="form-textbox"
        id="f_address"
        name="f_address"
        value={data.f_address}
        onChange={handleChange}
      />

      {/* <label htmlFor="f_religion">Religion</label>
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
      </select> */}

      {/* <label htmlFor="f_country">Country</label>
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
      </select> */}
    </div>
  );

  return content;
};

export default FatherInfo;
