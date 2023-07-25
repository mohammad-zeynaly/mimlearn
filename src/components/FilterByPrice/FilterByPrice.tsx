import { useState } from "react";
import useNumberPersian from "../../hooks/useNumberPersian";
import Button from "../Button/Button";

const FilterByPrice = (): JSX.Element => {
  const [filteredPricePercent, setFilteredPricePercent] = useState<number>(0);

  return (
    <section className="p-4 border border-fourth relative mt-8">
      <h6 className="text-sm border-b pb-3 after:block after:w-[2px] after:h-6 after:bg-primary after:absolute after:top-3 after:right-0">
        فیلتر براساس قیمت:
      </h6>
      <div className="mt-5 relative w-full">
        <input
          id="filterPrice"
          className="appearance-none h-[7px] relative bg-transparent w-full accent-primary z-30"
          type="range"
          value={filteredPricePercent}
          onInput={(e) => {
            let filterPercent: number = +(e.target as HTMLInputElement).value;

            setFilteredPricePercent(filterPercent);
          }}
          defaultValue={0}
        />

        <span className="block bg-[#d4d4d4] h-[7px] rounded-3xl  absolute top-2 right-[-1px] w-full overflow-hidden z-10">
          <span
            style={{ width: filteredPricePercent + "%" }}
            className="z-20 block bg-[#5d5d5d] h-full"
          ></span>
        </span>

        <div className="text-xs mt-4">
          <span>
            تا {useNumberPersian(filteredPricePercent * 40_000)} تومان
          </span>
        </div>
      </div>

      <Button className="text-white bg-primary py-3 px-4 rounded-md text-sm mt-5">
        فیلتر کن!
      </Button>
    </section>
  );
};

export default FilterByPrice;
