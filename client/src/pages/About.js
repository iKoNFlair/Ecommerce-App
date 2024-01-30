import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1>Welcome to EcomFlair</h1>
          <p className="text-justify mt-2">
            At EcomFlair, we bring a touch of flair to your online shopping
            experience. Established with a vision to redefine the way you shop,
            EcomFlair is your go-to destination for [your product category]. Our
            journey began with a simple yet powerful idea – to infuse style,
            convenience, and affordability into every aspect of your shopping
            adventure.
          </p>
          <h3>Our Flair Philosophy</h3>
          <p>
            EcomFlair is not just an ecommerce platform; it's a celebration of
            individuality and style. We believe in curating a collection that
            not only meets your needs but also reflects your unique taste. Our
            products are carefully selected to add flair to your lifestyle,
            making every purchase a statement of personal expression.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
