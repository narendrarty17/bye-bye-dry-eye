import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion, useAnimation } from 'framer-motion';
import CentralHeading from '../utils/CentralHeading';

const reviewsData = [
    {
        id: 0,
        rating: 4,
        reviewText: 'No complaints so far. Great price and fast shipping all the way to the east coast. It sure beats standing in line at your local pharmacy.',
        reviewerImage: '/images/homepage/testimonials/reviewer_02.png',
        reviewerName: 'Jane Smith',
        role: 'UX Designer',
        companyName: 'Company B',
    },
    {
        id: 1,
        rating: 5,
        reviewText: 'Excellent service, excellent prices. People are soooo very nice.',
        reviewerImage: '/images/homepage/testimonials/reviewer_01.png',
        reviewerName: 'John Doe',
        role: 'Developer',
        companyName: 'Company A',
    },
    {
        id: 2,
        rating: 5,
        reviewText: '10/10 experience. I was able to get my medications quickly. Thank you honeybee health for keeping costs so low!',
        reviewerImage: '/images/homepage/testimonials/reviewer_03.png',
        reviewerName: 'Alex Johnson',
        role: 'Software Engineer',
        companyName: 'Company C',
    },
    // Add more entries as needed
];

const RatingComponent = ({ rating }) => {
    return (
        <div className="flex">
            {Array.from({ length: rating }, (_, index) => (
                <img
                    key={index + 1}
                    src="/images/homepage/testimonials/star.svg"
                    alt={`Star ${index + 1}`}
                    className="mr-2" // Add some margin between stars (adjust as needed)
                />
            ))}
        </div>
    );
};

const Testimonials = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [selectedReview, setSelectedReview] = useState(0);
    const controls = useAnimation();

    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe('left'),
        onSwipedRight: () => handleSwipe('right'),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    const handleSwipe = (direction) => {
        if (direction === 'left' && selectedReview < reviewsData.length - 1) {
            swipeAnimation('left');
            setSelectedReview((prevReview) => prevReview + 1);
        } else if (direction === 'right' && selectedReview > 0) {
            swipeAnimation('right');
            setSelectedReview((prevReview) => prevReview - 1);
        }
    };

    const swipeAnimation = async (direction) => {
        const cardWidth = 300; // Adjust as needed
        const offset = direction === 'left' ? -cardWidth : cardWidth;

        await controls.start({ x: offset, opacity: 0 });

        // Reset animation
        controls.set({ x: 0, opacity: 1, transition: { duration: 0.2 } });
    }

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 900);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        // Auto-swipe on small screens
        let swipeInterval;

        if (isSmallScreen) {
            swipeInterval = setInterval(() => {
                if (selectedReview === reviewsData.length - 1) {
                    // Reset to the first review when all reviews have been swiped
                    setSelectedReview(0);
                } else {
                    handleSwipe('left');
                }
            }, 4000);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            clearInterval(swipeInterval); // Clear the interval when the component is unmounted or the screen size changes
        };
    }, [isSmallScreen, selectedReview, controls]);

    return (
        <motion.section>
            {/* Part 1: Heading and Description */}
            <CentralHeading>
                Our Patients Love Us
            </CentralHeading>

            {/* Part 2: Review Cards */}
            <motion.div
                className="flex flex-row justify-center mx-auto space-x-4 mb-4 gap-3 overflow-hidden"
                {...handlers}
                animate={controls}
            >
                {reviewsData
                    .filter((_, index) => (isSmallScreen ? index === selectedReview : true))
                    .map((review) => (
                        <motion.div
                            key={review.id}
                            className="bg-white shadow-md w-96 pb-4 rounded-md"
                            onClick={() => setSelectedReview(review.id)}
                            initial={{ x: 0, opacity: 1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* Section 1: Rating */}
                            <div className="p-4 text-2xl text-black font-bold">
                                <RatingComponent rating={review.rating} />
                            </div>

                            {/* Section 2: Review Text */}
                            <p className="px-4 text-gray-600 line-clamp-3 mb-4 h-24 overflow-hidden">
                                {review.reviewText}
                            </p>

                            {/* Section 3: Reviewer Information */}
                            <div className="flex items-center justify-start h-16 p-4">
                                {/* Part 1: Reviewer Image */}
                                <img
                                    src={review.reviewerImage}
                                    alt="Reviewer"
                                    className="w-16 h-16 object-cover rounded-full"
                                />

                                {/* Part 2: Reviewer Name and Company */}
                                <div className="ml-4 flex flex-col items-start">
                                    <p className="font-bold text-gray-500">{review.reviewerName}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
            </motion.div>

            {/* Part 4: View All Button */}

            {!isSmallScreen && (
                <div className="flex justify-center">
                    <button
                        className="border border-medium-blue text-medium-blue hover:bg-gray-100 text-sm w-28 h-8 rounded-md"
                    >
                        See All
                    </button>
                </div>
            )}

        </motion.section>
    );
};

export default Testimonials;