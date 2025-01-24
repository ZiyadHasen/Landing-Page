"use client";

import assets from "@/assets";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Choices = () => {
  const [selectedCourse, setSelectedCourse] = React.useState(
    new Set(["Software"])
  );
  const [selectedMemberCount, setSelectedMemberCount] = React.useState(
    new Set(["100"])
  );

  const selectedCourseValue = React.useMemo(
    () => Array.from(selectedCourse).join(", ").replaceAll("_", " "),
    [selectedCourse]
  );

  const selectedMemberCountValue = React.useMemo(
    () => Array.from(selectedMemberCount).join(", ").replaceAll("_", " "),
    [selectedMemberCount]
  );

  return (
    <div className="mt-10 flex justify-center items-center w-full max-w-[1012px] mx-auto">
      <div className="flex justify-center items-center gap-[12px] border-[3px] border-[#d4d2cf] rounded-3xl py-[4px] px-[20px]">
        <p className="font-medium text-base leading-[19.54px] text-[#003119] opacity-[60%]">
          I provide courses on
        </p>

        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="bordered"
              className=" border border-[#003119] border-opacity-[20%] flex justify-center items-center gap-2 rounded-xl"
            >
              <Image src={assets.software} alt="Software" />
              <span className="font-semibold text-[#003119] text-base">
                {selectedCourseValue}
              </span>
              <Image src={assets.more} alt="more" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Course selection"
            variant="flat"
            // selectionMode='multiple' // Enable multi-select
            selectedKeys={new Set<string>(selectedCourse)}
            onSelectionChange={(keys) => {}}
            classNames={{
              base: ["bg-[#003119] rounded-[10px]"],
            }}
          >
            <DropdownItem key="Software" className="bg-black text-white">
              <div className="flex items-center gap-2">
                <Image src={assets.software} alt="Software" />
                <span className="font-semibold text-white opacity-[80%] text-base">
                  Software
                </span>
              </div>
            </DropdownItem>
            <DropdownItem key="Entertainment" className="bg-black text-white">
              <div className="flex items-center gap-2">
                <Image src={assets.entertainment} alt="Entertainment" />
                <span className="font-semibold text-white opacity-[80%] text-base">
                  Entertainment
                </span>
              </div>
            </DropdownItem>
            <DropdownItem key="Mathematics" className="bg-black text-white">
              <div className="flex items-center gap-2">
                <Image src={assets.maths} alt="Mathematics" />
                <span className="font-semibold text-white opacity-[80%] text-base">
                  Mathematics
                </span>
              </div>
            </DropdownItem>
            <DropdownItem key="Culture" className="bg-black text-white">
              <div className="flex items-center gap-2">
                <Image src={assets.culture} alt="Culture" />
                <span className="font-semibold text-white opacity-[80%] text-base">
                  Culture
                </span>
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <p className="font-medium text-base leading-[19.54px] text-[#003119] opacity-[60%]">
          for
        </p>

        <div>
          <Button
            variant="bordered"
            className="bg-opacity-[8%] border border-[#003119] border-opacity-[10%] flex justify-center items-center gap-2 rounded-xl"
          >
            <Image src={assets.people} alt="People" />
            <span className="font-semibold text-[#003119] text-base">
              {selectedMemberCountValue}
            </span>
            <Image src={assets.more} alt="more" />
          </Button>
        </div>

        <p className="font-medium text-base leading-[19.54px] text-[#003119] opacity-[60%]">
          members
        </p>

        <button className="flex justify-center items-center size-[40px] rounded-full bg-[#003119]">
          <Image src={assets.next} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Choices;
