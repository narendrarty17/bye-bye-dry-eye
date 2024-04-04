import React from "react";

const Suggested = () => {
  return (
    <div className="flex flex-col gap-10 md:flex-row">
      <img
        className="max-w-xl"
        src="/images/homepage/suggested/moisture_chamber.webp"
      />
      <div className="flex flex-col gap-5 max-w-lg">
        <h4 className="text-dark-green">Bye Bye Dry Eye Partners</h4>
        <div className="flex flex-col gap-4">
          <h2 className="font-baskerville text-4xl leading-[55px] text-dark-brown">
            Your trusted partner in pharmacy fulfillment
          </h2>
          <p className="text-medium-gray text-lg">
            We work with patients and partners.
            Whether you are an experienced telehealth platform or a new Company
            or practitioner, our team will guide you every step of the way.
            Once we get your patient's prescribtions, we will take care of the rest.
          </p>
        </div>
        <button
          className="border border-medium-blue text-medium-blue hover:bg-gray-100 text-sm w-28 h-8 rounded-md"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Suggested;
