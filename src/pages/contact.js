import PageHeader from "@/components/base/PageHeader";
import ContactCard from "./../components/modules/contact/ContactCard";
import ApplyToLaunchTwo from "@/components/common/ApplyToLaunchTwo";

const Contact = () => {
  return (
    <>
      <PageHeader title="Contact Us" text="Contact" />
      <ContactCard />
      <ApplyToLaunchTwo />
    </>
  );
};

export default Contact;
