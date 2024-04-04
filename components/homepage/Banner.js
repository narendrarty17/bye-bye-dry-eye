import React, { useState, useEffect } from "react";
import bannerList from "@/public/data/homepage/bannerList.json";

const Banner = () => {
  const [selectedBanner, setSelectedBanner] = useState(0);

  useEffect(() => {
    // Auto-swipe
    let swipeInterval;

    const handleSwipe = () => {
      if (selectedBanner === bannerList.length - 1) {
        setSelectedBanner(0);
      } else {
        setSelectedBanner((prevBanner) => prevBanner + 1);
      }
    };

    swipeInterval = setInterval(handleSwipe, 4000);

    return () => {
      if (swipeInterval) {
        clearInterval(swipeInterval);
      }
    };
  }, [selectedBanner]);

  return (
    <div className="w-full">
      {bannerList
        .filter((_, index) => index === selectedBanner)
        .map((banner) => (
          <div key={banner.id} onClick={() => setSelectedBanner(banner.id)}>
            <img className="w-[100vw]" src={banner.url} />
          </div>
        ))}
    </div>
  );
};

export default Banner;