import PageHeader from "@/components/base/PageHeader";
import SignUpCard from "@/components/modules/signup/SignUpCard";
import NewsLetterTwo from "@/components/partials/NewsLetterTwo";
const SignUp = () => {
  return (
    <>
      <PageHeader title="Sign Up Page" text="Sign up" />
      <SignUpCard />
      <NewsLetterTwo />
    </>
  );
};
export default SignUp;
