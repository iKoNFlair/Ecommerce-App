import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contact.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Connect with us on social media to stay updated on the latest
            products, promotions, and community news:
          </p>
          <h4>Customer Support</h4>
          <p>
            Our dedicated customer support team is ready to assist you. For any
            questions, concerns, or assistance with your order, please contact
            us:
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecomflair.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 0 9888786858
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-1800-1818 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
