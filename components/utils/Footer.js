const socialMediaIconsList = [
    "instagram",
    "linkedin",
    "facebook",
    "twitter"
]

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
        <section className="flex flex-col gap-4">
            <h2 className="font-semibold text-xl">{title}</h2>
            <ul className="flex flex-col gap-2">
                {itemList.map((item) => (
                    <li className="text-dark-gray text-md">{item}</li>
                ))}
            </ul>
        </section>
    )
}

const Footer = () => {
    return (
        <div className="mt-16 py-16 px-16 bg-gray-100 text-dark-gray flex flex-col gap-10">
            <div className="flex justify-between items-start">
                <section>
                    <div className="flex items-center ml-0 lg:ml-5">
                        <img className="w-16" src="/images/utils/header/logo.png" />
                        <div className="flex flex-col justify-center items-center font-alegreya">
                            <span className="text-[16px] mb-[-8px] font-semibold">ByeBye</span>
                            <span className="text-[22px] font-bold">Dry Eye</span>
                        </div>
                    </div>
                </section>
                {sectionsData.map((sectionData) => (
                    <Section
                        title={sectionData.title}
                        itemList={sectionData.itemList}
                    />
                ))
                }
            </div>
            <section className="flex flex-row justify-end gap-3 border-b-2 border-gray-300">
                {socialMediaIconsList.map((icon) => (
                    <img
                        className="w-6 mb-6"
                        src={`/images/utils/footer/socialMediaIcons/${icon}.svg`}
                    />
                ))}
            </section>
            <section className="flex justify-between text-sm">
                <p>copyright &copy; 2024 Honeybee Health Inc.</p>
                <ul className="flex flex-row gap-4">
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Accessibility Statement</li>
                </ul>
            </section>
        </div>
    )
}
export default Footer;