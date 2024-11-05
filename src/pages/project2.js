import PageHeader from "@/components/base/PageHeader";
import ApplyToLaunchTwo from "@/components/common/ApplyToLaunchTwo";
import CompletedTwo from "@/components/modules/project2/CompletedTwo";
import UpcommingTwo from "@/components/modules/project2/UpcommingTwo";

const Project2 = () => {
  return (
    <>
      <PageHeader title="Project Style 2" text="Project 2" />
      <UpcommingTwo />
      <CompletedTwo />
      <ApplyToLaunchTwo />
    </>
  );
};

export default Project2;
