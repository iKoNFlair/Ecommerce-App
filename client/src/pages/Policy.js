import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            This Privacy Policy outlines how we collect, use, disclose, and
            protect the personal information of users of our e-commerce website
            ("Website"). We are committed to protecting your privacy and
            ensuring the security of your personal information. By using our
            Website, you consent to the practices described in this Privacy
            Policy.
          </p>
          <p>
            Information We Collect
            <br /> 1.1 Personal Information: We may collect personal information
            that you provide directly to us when using our Website. This may
            include your name, email address, contact information, billing and
            shipping addresses, payment information, and any other information
            you provide during the registration, purchase, or communication
            process.
            <br /> 1.2 Usage Data: We automatically collect certain information
            about your interactions with our Website. This may include your IP
            address, browser type, operating system, referring URLs, pages
            viewed, links clicked, and other similar information.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
