import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT "} text2={" US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt="About Forever"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever was founded with a simple goal — to bring high-quality,
            stylish, and affordable fashion to everyone. We are passionate about
            helping our customers express their individuality through
            thoughtfully designed clothing and accessories.
          </p>
          <p>
            Our collections are curated with care, blending modern trends with
            timeless pieces that never go out of style. Whether you’re dressing
            up for an event or looking for something casual and comfortable, we
            aim to be your go-to fashion destination.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Forever, our mission is to make fashion more inclusive and
            accessible. We believe style shouldn't come at the cost of comfort,
            quality, or affordability. We strive to create an inspiring shopping
            experience that leaves our customers feeling confident and
            empowered.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY "} text2={" CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Premium Quality</b>
          <p className="text-gray-600">
            Every item we offer goes through rigorous quality checks to ensure
            it meets our high standards for durability, comfort, and design.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Effortless Shopping</b>
          <p className="text-gray-600">
            Our intuitive website, fast delivery, and secure checkout process
            make your shopping experience simple and stress-free.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Customer-First Approach</b>
          <p className="text-gray-600">
            We care deeply about our customers and are always here to help.
            Whether it’s a sizing question or a return, our support team has
            your back.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;