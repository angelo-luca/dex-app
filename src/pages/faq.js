import ApplyToLaunch from "@/components/common/ApplyToLaunch";
import PageHeader from "@/components/base/PageHeader";
import FaqCard from "@/components/modules/faq/FaqCard";
const Faq = () => {
  return (
    <>
      <PageHeader title="Frequently Asked Questions" text="faq" />
      <FaqCard />
      <ApplyToLaunch />
    </>
  );
};
export default Faq;
