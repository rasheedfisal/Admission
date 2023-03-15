import React from "react";

import GardianSearch from "./GardianSearch";
import FatherInfo from "./FatherInfo";
import MotherInfo from "./MotherInfo";
import GardianInfo from "./GardianInfo";
import { default as useFormContext } from "../../hooks/useUpdateFormContext";
import ManageStd from "./ManageStd";
import EmergencyInfo from "./EmergencyInfo";
import MartialStatus from "./MartialStatus";

const FormInput = () => {
  const { page } = useFormContext();

  const display = {
    0: <GardianSearch />,
    1: <GardianInfo />,
    2: <EmergencyInfo />,
    3: <MartialStatus />,
    4: <FatherInfo />,
    5: <MotherInfo />,
    6: <ManageStd />,
  };

  const content = <div className="flex flex-col">{display[page]}</div>;

  return content;
};

export default FormInput;
