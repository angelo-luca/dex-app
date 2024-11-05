import { useState } from "react";
import PageHeader from "@/components/base/PageHeader";
import KycCard from "@/components/modules/kyc/KycCard";

const KYC = () => {
  const [activeID, setActiveID] = useState(1);
  const stepForword = () => {
    if (activeID < 3) {
      setActiveID(activeID + 1);
    }
  };
  const stepBackword = () => {
    if (activeID > 0) {
      setActiveID(activeID - 1);
    }
  };
  const submit = () => {
    window.location.reload();
  };

  return (
    <>
      <PageHeader title="KYC Page" text="KYC" />
      <KycCard activeID={activeID} stepForword={stepForword} stepBackword={stepBackword} submit={submit} />
    </>
  );
};
export default KYC;
