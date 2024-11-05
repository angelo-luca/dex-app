import NewsLetter from "@/components/partials/NewsLetter";
import PageHeader from "@/components/base/PageHeader";
import ResetCard from "@/components/modules/reset-password/ResetCard";

const ResetPass = () => {
  return (
    <>
      <PageHeader title="Reset Password" text="Reset Pass" />
      <ResetCard />
      <NewsLetter />
    </>
  );
};
export default ResetPass;
