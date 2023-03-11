import React from "react";

import TermsAndConditions from "./TermsAndConditions";
import FatherInfo from "./FatherInfo";
import MotherInfo from "./MotherInfo";
import GardianInfo from "./GardianInfo";
import useFormContext from "../../hooks/useFormContext";

const FormInput = () => {
  const { page } = useFormContext();

  const display = {
    0: <TermsAndConditions />,
    1: <FatherInfo />,
    2: <MotherInfo />,
    3: <GardianInfo />,
  };

  const content = <div className="flex flex-col">{display[page]}</div>;

  return content;
};

export default FormInput;
