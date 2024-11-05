import ApplyToLaunch from "@/components/common/ApplyToLaunch";
import PageHeader from "@/components/base/PageHeader";
import Link from "next/link";
import Image from 'next/image';



const ErrorPage = () => {
  return (
    <>
      <PageHeader text="404" title="404" />
      {/* ================> Apply error start here <================== */}
      <div className="error padding-top padding-bottom">
        <div className="container">
          <div className="error__wrapper text-center">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="error__content">
                  <Image src="/images/error/404.png"
                    alt="404 Image"
                    width={500}
                    height={500}
                  />
                  <h2>
                    <span className="color--theme-color">Opps !</span> You&apos;re
                    Lost in the Space
                  </h2>
                  <p>
                    The page you&apos;re looking for is not found or unreachable .
                    please try again or go back to home{" "}
                  </p>
                  <Link href="/" className="default-btn">
                    <span>Back to home</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================> Apply error end here <================== */}
      <ApplyToLaunch />
    </>
  );
};

export default ErrorPage;
