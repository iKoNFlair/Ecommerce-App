import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacypolicy.jpeg"
            alt="policies"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h2>Privacy Policy:</h2>
          <p>
            Thank you for visiting EcomFlair. Your privacy is important to us,
            and we are committed to protecting and safeguarding your personal
            information. This Privacy Policy outlines how we collect, use,
            disclose, and manage your information when you use our website or
            services.
          </p>
          <h4>Information We Collect:</h4>
          <h6>a. Personal Information:</h6>
          <p>
            Name Email address Contact information Billing and shipping address
            Payment details
          </p>
          <h6>b. Non-Personal Information: </h6>
          <p>
            IP address Browser type Device information Cookies and tracking
            technologies
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
