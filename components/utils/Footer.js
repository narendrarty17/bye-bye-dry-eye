import { useState, useEffect } from "react";

const socialMediaIconsList = [
    "instagram",
    "linkedin",
    "facebook",
    "twitter"
];

const sectionsData = [
    {
        "title": "Patients",
        "itemList": [
            "FAQs",
            "Doctors",
            "+91-9919748714",
            "support@honeybeehealth.com"
        ]
    },
    {
        "title": "Partners",
        "itemList": [
            "Partner Overview",
            "API Documentation",
            "Partner Login"
        ]
    },
    {
        "title": "Company",
        "itemList": [
            "About Us",
            "Press",
            "Reviews",
            "Online Pharmacy"
        ]
    }
]

const Section = ({ title, itemList }) => {
    console.log(itemList);
    return (
        <section className="flex flex-col gap-4 items-center lg:items-start">
            <h2 className="font-semibold text-xl hidden lg:flex">{title}</h2>
            <ul className="flex flex-col gap-2 items-center lg:items-start">
                {itemList.map((item) => (
                    <li className="text-dark-gray text-md">{item}</li>
                ))}
            </ul>
        </section>
    )
}

const Footer = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(true);

    // Function to update screen size state
    const updateScreenSize = () => {
        setIsLargeScreen(window.innerWidth >= 992); // Assuming 'lg
    }

    useEffect(() => {
        // Update screen size state on initial render
        updateScreenSize();
        window.addEventListener('resize', updateScreenSize);
        return () => window.removeEventListener('resize', updateScreenSize)
    }, []);

    // Filter sectionsData based on screen size
    const filteredSectionsData = !isLargeScreen ? [sectionsData[0]] : sectionsData;

    return (
        <div className="mt-16 py-16 px-16 bg-gray-100 text-dark-gray flex flex-col gap-10">
            <div className="flex flex-col items-center gap-10 lg:gap-0 lg:items-start lg:flex-row justify-between ">
                <section>
                    <div className="flex items-center ml-0 lg:ml-5">
                        <img className="w-16" src="/images/utils/header/logo.png" />
                        <div className="flex flex-col justify-center items-center font-alegreya">
                            <span className="text-[16px] mb-[-8px] font-semibold">ByeBye</span>
                            <span className="text-[22px] font-bold">Dry Eye</span>
                        </div>
                    </div>
                </section>
                {filteredSectionsData.map((sectionData, index) => (
                    <Section
                        key={index}
                        title={sectionData.title}
                        itemList={sectionData.itemList}
                    />
                ))}
            </div>
            <section className="flex flex-row justify-center lg:justify-end gap-3 border-b-2 border-gray-300">
                {socialMediaIconsList.map((icon) => (
                    <img
                        className="w-6 mb-6"
                        src={`/images/utils/footer/socialMediaIcons/${icon}.svg`}
                    />
                ))}
            </section>
            <section className="flex justify-between text-sm">
                <p className="mx-auto lg:mx-0">
                    <span>copyright &copy;</span>
                    <span>2024 Honeybee Health Inc.</span>
                </p>
                <ul className="hidden lg:flex lg:flex-row gap-4">
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Accessibility Statement</li>
                </ul>
            </section>
        </div >
    )
}
export default Footer;