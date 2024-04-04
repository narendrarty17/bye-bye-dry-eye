import React from "react";

const itemList = [
  {
    id: 0,
    imgSrc: "/images/homepage/itemList/items/01_Moisture_Chamber_Goggles.jpg",
    category: "Accessory",
    itemName: "Moisture Chamber Goggles",
    price: "2500",
  },
  {
    id: 1,
    imgSrc: "/images/homepage/itemList/items/02_Manuka_Honey_Gel.jpg",
    category: "Medicine",
    itemName: "Manuka Honey Gel",
    price: "2000",
  },
  {
    id: 2,
    imgSrc: "/images/homepage/itemList/items/03_Manuka_Honey_Drops.jpg",
    category: "Medicine",
    itemName: "Manuka Honey Drops",
    price: "800",
  },
  // {
  //   id: 4,
  //   imgSrc: "/images/homepage/itemList/items/04_Omega_3.jpg",
  //   category: "Supplement",
  //   itemName: "Omega 3 Capsules",
  //   price: "600",
  // },
];

const ItemList = () => {
  return (
    <div>
      <h2 className="text-3xl text-dark-gray mb-8 flex justify-center lg:justify-start">Our Products</h2>
      <div className="flex flex-wrap flex-col md:flex-row items-center gap-10 md:justify-between">
        {itemList.map((item) => (
          <div className="font-montserrat w-auto bg-light-gray rounded-md border-gray-200 border-2">
            <img
              className="px-4 pt-2 h-[280px]"
              src={item.imgSrc}
            />
            <div className="px-4 py-2 flex flex-col gap-2">
              <div className="text-medium-gray text-sm">{item.category}</div>
              <div className="font-bold text-lg text-dark-gray">
                {item.itemName}
              </div>
              <div className="flex gap-3 items-center">
                <button className="bg-light-blue hover:bg--blue px-3 py-2 font-semibold rounded-md text-light-gray">
                  Add to Cart
                </button>
                <div className="text-lg font-bold text-medium-blue">
                  {item.price} ₹
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-lg line-through text-medium-gray">400 ₹</div>
                <div className="text-lg font-bold text-medium-red">50% off</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemList;
