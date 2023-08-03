import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface AccordionMenuSItemType {
  id: string;
  title: string;
  isOpen: boolean;
}

const AccordionMenuAboutUs = (): JSX.Element => {
  const accordionMenuContentItems: AccordionMenuSItemType[] = [
    { id: crypto.randomUUID(), title: "عنوان آکاردئون 1 ", isOpen: false },
    { id: crypto.randomUUID(), title: "عنوان آکاردئون 2 ", isOpen: false },
    { id: crypto.randomUUID(), title: "عنوان آکاردئون 3 ", isOpen: false },
  ];

  const [accordionMenuItems, setAccordionMenuItems] = useState<
    AccordionMenuSItemType[]
  >(accordionMenuContentItems);

  const handleClick = (indexAccordion: number) => {
    const updatedAccordionMenuItems = accordionMenuItems.map((item, index) => {
      if (index === indexAccordion) {
        return { ...item, isOpen: !item.isOpen };
      } else {
        return { ...item, isOpen: false };
      }
    });

    setAccordionMenuItems(updatedAccordionMenuItems);
  };

  return (
    <>
      {accordionMenuItems.map((item, index) => (
        <div
          key={item.id}
          className="bg-white rounded-lg p-4 mt-4 shadow-[0_1px_8px_rgba(0,0,0,0.1)] cursor-pointer group "
        >
          <div
            className="flex justify-between items-center py-2 transition-all"
            onClick={() => {
              handleClick(index);
            }}
          >
            <h6
              className={`text-base group-hover:text-primary ${
                item.isOpen ? "text-primary" : ""
              }`}
            >
              {item.title}
            </h6>
            <IoIosArrowDown
              className={`w-5 h-5 transform ${item.isOpen ? "rotate-180" : ""}`}
            />
          </div>
          <p
            className={`py-3 transition-all duration-200 ${
              item.isOpen ? "block visible" : "hidden invisible"
            }`}
          >
            لورم ایپسوم متن ساختگی....
          </p>
        </div>
      ))}
    </>
  );
};

export default AccordionMenuAboutUs;
