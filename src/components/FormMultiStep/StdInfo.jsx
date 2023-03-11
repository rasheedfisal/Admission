import React, { useState } from "react";
import useFormContext from "../../hooks/useFormContext";
const StdInfo = () => {
  const { data, handleChange } = useFormContext();
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [className, setClassName] = useState("");
  const [gender, setGender] = useState("");
  const [img, setImg] = useState(null);
  const [passport, setPassport] = useState(null);
  const [docOne, setDocOne] = useState(null);
  const [docTwo, setDocTwo] = useState(null);
  const content = (
    <div className="flex flex-col">
      <label htmlFor="std_firstName">First Name</label>
      <input
        type="text"
        className="form-textbox"
        id="std_firstName"
        name="std_firstName"
        placeholder="Jane"
        pattern="([A-Z])[\w+.]{1,}"
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="std_dateofbirth">Birth Date</label>
      <input
        type="date"
        className="form-textbox"
        id="std_dateofbirth"
        name="std_dateofbirth"
        onChange={(e) => setBirthDate(e.target.value)}
      />

      <div className="flex items-center justify-between gap-5 flex-wrap">
        <div className="flex flex-col w-full">
          <label htmlFor="std_phone1">Phone 1</label>
          <input
            type="text"
            className="form-textbox"
            id="std_phone1"
            name="std_phone1"
            placeholder="Phone 1"
            value={data.std_phone1}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="std_phone1">Phone 2</label>
          <input
            type="text"
            className="form-textbox"
            id="std_phone1"
            name="std_phone1"
            placeholder="Phone 2"
            value={data.std_phone1}
            onChange={handleChange}
          />
        </div>
      </div>

      <label htmlFor="std_address">Address</label>
      <input
        type="text"
        className="form-textbox"
        id="std_address"
        name="std_address"
        placeholder="Address"
        value={data.std_address}
        onChange={handleChange}
      />

      <label htmlFor="std_religion">Religion</label>
      <select
        id="std_religion"
        className="form-textbox"
        name="std_religion"
        value={data.std_religion}
        onChange={handleChange}
      >
        <option value="Muslim">Muslim</option>
        <option value="Christian">Christian</option>
        <option value="jows">jows</option>
      </select>

      <label htmlFor="std_country">Country</label>
      <select
        id="std_country"
        className="form-textbox"
        name="std_country"
        value={data.std_country}
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

export default StdInfo;
