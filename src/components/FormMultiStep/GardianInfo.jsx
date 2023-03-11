import React, { useState, useEffect } from "react";
import useFormContext from "../../hooks/useFormContext";
import PhoneInput from "react-phone-number-input";

import MapPicker from "react-google-map-picker";
// import LocationPicker from "react-leaflet-location-picker";

const DefaultLocation = { lat: 15.500654, lng: 32.559898 };
const DefaultZoom = 10;

// const pointVals = [
//   [50, 2],

// ];
// const pointMode = {
//   banner: true,
//   control: {
//     values: pointVals,
//     onClick: (point) =>
//       console.log("I've just been clicked on the map!", point),
//     onRemove: (point) =>
//       console.log("I've just been clicked for removal :(", point),
//   },
// };
// const circleMode = {
//   banner: false,
// };

const GardianInfo = () => {
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  // useEffect(() => {
  //   handleCustomElementChange(location.lat + "," + location.lng, "g_location");
  // }, [location]);

  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat, lng: lng });
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }

  function handleResetLocation() {
    setDefaultLocation({ ...DefaultLocation });
    setZoom(DefaultZoom);
  }
  const { data, handleChange, handleCustomElementChange } = useFormContext();

  const content = (
    <div className="flex flex-col">
      {/* <div className="flex items-center justify-start gap-5 flex-wrap">
        
       
      </div> */}

      <label htmlFor="g_title">
        Title <span className="text-red-600">*</span>
      </label>
      <select
        id="g_title"
        className="form-textbox"
        name="g_title"
        value={data.g_title}
        onChange={handleChange}
      >
        <option value="">[Select]</option>
        <option value="Mr">Mr.</option>
        <option value="Mrs">Mrs.</option>
        <option value="Ms">Ms.</option>
      </select>

      <div className="flex items-center justify-between gap-5 flex-wrap">
        <div className="flex flex-col w-full">
          <label htmlFor="g_firstName">
            1st Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="form-textbox"
            id="g_firstName"
            name="g_firstName"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.g_firstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="g_secondName">
            2nd Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="form-textbox"
            id="g_secondName"
            name="g_secondName"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.g_secondName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 flex-wrap">
        <div className="flex flex-col w-full">
          <label htmlFor="g_middleName">
            3rd Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="form-textbox"
            id="g_middleName"
            name="g_middleName"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.g_middleName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="g_surname">
            4th Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="form-textbox"
            id="g_surname"
            name="g_surname"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.g_surname}
            onChange={handleChange}
          />
        </div>
      </div>

      <label htmlFor="g_email">
        Email <span className="text-red-600">*</span>
      </label>
      <input
        type="email"
        className="form-textbox"
        id="g_email"
        name="g_email"
        value={data.g_email}
        onChange={handleChange}
      />

      <div className="flex items-center justify-between gap-5 flex-wrap">
        <div className="flex flex-col w-full">
          <label htmlFor="g_phone1">
            Phone 1 <span className="text-red-600">*</span>
          </label>
          <PhoneInput
            placeholder="Enter phone number"
            className="form-textbox"
            id="g_phone1"
            name="g_phone1"
            value={data.g_phone1}
            onChange={(e) => handleCustomElementChange(e, "g_phone1")}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="g_phone2">Phone 2</label>
          <PhoneInput
            placeholder="Enter phone number"
            className="form-textbox"
            id="g_phone2"
            name="g_phone2"
            value={data.g_phone2}
            onChange={(e) => handleCustomElementChange(e, "g_phone2")}
          />
        </div>
      </div>

      <label htmlFor="g_address">
        Address <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        className="form-textbox"
        id="g_address"
        name="g_address"
        value={data.g_address}
        onChange={handleChange}
      />

      {/* <label htmlFor="g_religion">Religion</label>
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
      </select> */}

      {/* <label htmlFor="g_country">Country</label>
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
      </select> */}

      <label htmlFor="g_location">
        Location <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        className="form-textbox"
        id="g_location"
        name="g_location"
        disabled
        value={data.g_location}
      />

      <button
        type="button"
        className="bg-transparent block mt-3 mb-3 hover:bg-Teal text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded cursor-pointer"
        onClick={handleResetLocation}
      >
        Reset Location
      </button>
      <div>
        <MapPicker
          defaultLocation={defaultLocation}
          zoom={zoom}
          mapTypeId="roadmap"
          style={{ height: "700px" }}
          onChangeLocation={(lat, lng) =>
            handleCustomElementChange(lat + "," + lng, "g_location")
          }
          onChangeZoom={handleChangeZoom}
          apiKey="AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"
        />
        {/* <LocationPicker pointMode={pointMode} circleMode={circleMode} />; */}
      </div>
    </div>
  );

  return content;
};

export default GardianInfo;
