import React from "react";

import TermsAndConditions from "./TermsAndConditions";
import FatherInfo from "./FatherInfo";
import MotherInfo from "./MotherInfo";
import GardianInfo from "./GardianInfo";
import useFormContext from "../../hooks/useFormContext";
import ManageStd from "./ManageStd";

const FormInput = () => {
  const { page } = useFormContext();

  const display = {
    0: <TermsAndConditions />,
    1: <GardianInfo />,
    2: <FatherInfo />,
    3: <MotherInfo />,
    4: <ManageStd />,
  };

  const content = <div className="flex flex-col">{display[page]}</div>;

  return content;
};

export default FormInput;
