import { createContext, useState, useEffect } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const title = {
    0: "Terms And Conditions",
    1: "Father Information",
    2: "Mother Information",
    3: "Gardian Information",
    4: "Student Information",
  };

  const [page, setPage] = useState(0);

  const [data, setData] = useState({
    t_agreed: false,
    f_title: "",
    f_firstName: "",
    f_secondName: "",
    f_middleName: "",
    f_surname: "",
    f_email: "",
    f_phone1: "",
    f_phone2: "",
    f_address: "",
    f_religion: "",
    f_country: "",
    //////////////
    m_title: "",
    m_firstName: "",
    m_secondName: "",
    m_middleName: "",
    m_surname: "",
    m_email: "",
    m_phone1: "",
    m_phone2: "",
    m_address: "",
    m_religion: "",
    m_country: "",
    ///////////////
    sameAsFather: false,
    sameAsMother: false,
    g_title: "",
    g_firstName: "",
    g_secondName: "",
    g_middleName: "",
    g_surname: "",
    g_email: "",
    g_phone1: "",
    g_phone2: "",
    g_address: "",
    g_religion: "",
    g_country: "",
    /////////////
    s_info: [],
  });

  useEffect(() => {
    if (data.sameAsFather) {
      setData((prevData) => ({
        ...prevData,
        sameAsMother: false,
        f_title: prevData.f_title,
        f_secondName: prevData.f_secondName,
        f_middleName: prevData.f_middleName,
        f_surname: prevData.f_surname,
        f_email: prevData.f_email,
        f_phone1: prevData.f_phone1,
        f_phone2: prevData.f_phone2,
        f_address: prevData.f_address,
        f_religion: prevData.f_religion,
        f_country: prevData.f_country,
      }));
    } else if (data.sameAsMother) {
      setData((prevData) => ({
        ...prevData,
        sameAsFather: false,
        m_title: prevData.m_title,
        m_secondName: prevData.m_secondName,
        m_middleName: prevData.m_middleName,
        m_surname: prevData.m_surname,
        m_email: prevData.m_email,
        m_phone1: prevData.m_phone1,
        m_phone2: prevData.m_phone2,
        m_address: prevData.m_address,
        m_religion: prevData.m_religion,
        m_country: prevData.m_country,
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        g_title: "",
        g_firstName: "",
        g_secondName: "",
        g_middleName: "",
        g_surname: "",
        g_email: "",
        g_phone1: "",
        g_phone2: "",
        g_address: "",
        g_religion: "",
        g_country: "",
      }));
    }
  }, [data.sameAsMother, data.sameAsFather]);

  const handleChange = (e) => {
    const type = e.target.type;

    const name = e.target.name;

    const value = type === "checkbox" ? e.target.checked : e.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const {
    f_phone2,
    m_phone2,
    g_phone2,
    sameAsFather,
    sameAsMother,
    ...requiredInputs
  } = data;

  const canSubmit =
    [...Object.values(requiredInputs)].every(Boolean) &&
    page === Object.keys(title).length - 1;

  const canNextPage0 = Object.keys(data)
    .filter((key) => key.startsWith("t_"))
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage1 = Object.keys(data)
    .filter((key) => key.startsWith("f_") && key !== "f_phone2")
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage2 = Object.keys(data)
    .filter((key) => key.startsWith("m_") && key !== "m_phone2")
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage3 = Object.keys(data)
    .filter((key) => key.startsWith("g_") && key !== "g_phone2")
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage4 = Object.keys(data)
    .filter((key) => key.startsWith("std_"))
    .map((key) => data[key])
    .every(Boolean);

  const disablePrev = page === 0;

  const disableNext =
    page === Object.keys(title).length - 1 ||
    (page === 0 && !canNextPage0) ||
    (page === 1 && !canNextPage1) ||
    (page === 2 && !canNextPage2) ||
    (page === 3 && !canNextPage3) ||
    (page === 4 && !canNextPage4);

  const prevHide = page === 0 && "hidden";

  const nextHide = page === Object.keys(title).length - 1 && "hidden";

  const submitHide = page !== Object.keys(title).length - 1 && "hidden";

  return (
    <FormContext.Provider
      value={{
        title,
        page,
        setPage,
        data,
        setData,
        canSubmit,
        handleChange,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
