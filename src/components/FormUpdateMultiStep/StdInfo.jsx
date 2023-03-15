import React, { useState, useEffect } from "react";

import { default as useFormContext } from "../../hooks/useUpdateFormContext";
import FilePdfUploader from "../FilePdfUploader";
import { toast } from "react-toastify";
const StdInfo = () => {
  const { setData, data } = useFormContext();
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [className, setClassName] = useState("");
  const [gender, setGender] = useState("");
  const [religion, setReligion] = useState("");
  const [img, setImg] = useState(null);
  const [birthCert, setBirthCert] = useState(null);
  const [passport, setPassport] = useState(null);
  const [docOne, setDocOne] = useState(null);
  const [docTwo, setDocTwo] = useState(null);

  useEffect(() => {
    const givenYear = new Date(birthDate).getFullYear();
    const currentYear = new Date().getFullYear();

    if (givenYear !== NaN) {
      const differ = currentYear - givenYear;
      if (differ === 1 || differ === 0) setClassName("Toddler");
      if (differ === 2) setClassName("Nursery");
      if (differ === 3) setClassName("JKG");
      if (differ === 4) setClassName("SKG");
      if (differ === 5) setClassName("Grade 1");
      if (differ === 6) setClassName("Grade 2");
      if (differ === 7) setClassName("Grade 3");
      if (differ === 8) setClassName("Grade 4");
      if (differ === 9) setClassName("Grade 5");
      if (differ === 10) setClassName("Grade 6");
      if (differ === 11) setClassName("Grade 7");
      if (differ === 12) setClassName("Grade 8");
      if (differ === 13) setClassName("Grade 9");
      if (differ === 14) setClassName("Grade 10");
      if (differ === 15) setClassName("Grade 11");
      if (differ === 16) setClassName("Grade 12");
    }
  }, [birthDate]);

  const AddToStudentList = () => {
    if (name === "") {
      toast.error("name is required.");
      return;
    }
    if (birthDate === "") {
      toast.error("birth date is required.");
      return;
    }
    if (className === "") {
      toast.error("class is required.");
      return;
    }
    if (gender === "") {
      toast.error("gender is required.");
      return;
    }
    if (religion === "") {
      toast.error("religion is required.");
      return;
    }
    if (img === null) {
      toast.error("photo is required.");
      return;
    }
    if (birthCert === null) {
      toast.error("birth certificate is required.");
      return;
    }
    if (passport === null) {
      toast.error("passport is required.");
      return;
    }
    const std = {
      std_id: "new",
      name,
      birthDate,
      className,
      gender,
      religion,
      img,
      birthCrt: birthCert,
      passportCrt: passport,
      docOneCrt: docOne,
      docTwoCrt: docTwo,
    };

    setData((prevData) => ({
      ...prevData,
      s_info: [...data.s_info, { ...std }],
    }));

    console.log(data.s_info);

    setName("");
    setBirthDate(new Date());
    setClassName("");
    setGender("");
    setReligion("");
    setBirthCert(null);
    setImg(null);
    setPassport(null);
    setDocOne(null);
    setDocTwo(null);
  };

  const content = (
    <div className="flex flex-col">
      <label htmlFor="std_firstName">
        1st Name <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        className="form-textbox"
        id="std_firstName"
        name="std_firstName"
        value={name}
        pattern="([A-Z])[\w+.]{1,}"
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="std_dateofbirth">
        Birth Date <span className="text-red-600">*</span>
      </label>
      <input
        type="date"
        className="form-textbox"
        id="std_dateofbirth"
        name="std_dateofbirth"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />

      <label htmlFor="std_class">
        Class <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        className="form-textbox"
        id="std_class"
        name="std_class"
        value={className}
        disabled
        onChange={(e) => setClassName(e.target.value)}
      />

      <label htmlFor="std_religion">
        Religion <span className="text-red-600">*</span>
      </label>
      <select
        id="std_religion"
        className="form-textbox"
        name="std_religion"
        value={religion}
        onChange={(e) => setReligion(e.target.value)}
      >
        <option value="">[Select]</option>
        <option value="muslim">Muslim</option>
        <option value="christian">Christian</option>
        <option value="jows">jows</option>
      </select>

      <label htmlFor="std_religion">
        Gender <span className="text-red-600">*</span>
      </label>
      <select
        id="std_gender"
        className="form-textbox"
        name="std_gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="">[Select]</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <label className="mt-5">Uploads</label>
      <hr />

      <div className="flex justify-center items-center gap-5 flex-wrap">
        <FilePdfUploader
          setFileElement={setImg}
          acceptFiles="image/jpg, image/png, image/jpeg"
          defaultUrl=""
          label="Photo"
          required={true}
        />
        <FilePdfUploader
          setFileElement={setBirthCert}
          acceptFiles="*"
          defaultUrl=""
          label="Birth Certificate"
          required={true}
        />
        <FilePdfUploader
          setFileElement={setPassport}
          acceptFiles="*"
          defaultUrl=""
          label="Passport"
          required={true}
        />
        <FilePdfUploader
          setFileElement={setDocOne}
          acceptFiles="*"
          defaultUrl=""
          label="Extra Docs1"
          required={false}
        />
        <FilePdfUploader
          setFileElement={setDocTwo}
          acceptFiles="*"
          defaultUrl=""
          label="Extra Docs2"
          required={false}
        />
      </div>
      <button
        type="button"
        onClick={AddToStudentList}
        className="bg-transparent mt-5 hover:bg-Teal text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded cursor-pointer"
      >
        Add
      </button>
    </div>
  );

  return content;
};

export default StdInfo;
