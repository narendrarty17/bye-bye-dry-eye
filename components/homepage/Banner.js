import React, { useState, useEffect } from "react";
import bannerList from "@/public/data/homepage/bannerList.json";

const Banner = () => {
  const [selectedBanner, setSelectedBanner] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  // Function to update screen size state
  const updateScreenSize = () => {
    setIsLargeScreen(window.innerWidth >= 992); // Assuming 'lg
  }

  useEffect(() => {
    // Update screen size state on initial render
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

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
      window.removeEventListener('resize', updateScreenSize)
    };
  }, [selectedBanner]);

  return (
    <div className="w-full">
      {bannerList
        .filter((_, index) => index === selectedBanner)
        .map((banner) => {

          const imageUrl = isLargeScreen
            ? banner.url
            : banner.url.replace(".png", "_mobile.png");

          return (
            <div key={banner.id} onClick={() => setSelectedBanner(banner.id)}>
              <img className="w-[100vw]" src={imageUrl} />
            </div>
          )
        })}
    </div>
  );
};

export default Banner;