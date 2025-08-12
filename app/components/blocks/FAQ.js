"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { PlusIcon, MinusIcon } from "@phosphor-icons/react";

const FAQ = ({ question, answer }) => {
  return (
    <Disclosure
      as="div"
      className="p-5 bg-white/5 border border-white/10 rounded-[20px]"
    >
      {({ open }) => (
        <>
          <DisclosureButton className="w-full flex justify-between items-center">
            <span className="font-geist text-start font-normal text-base leading-[160%] text-white">
              {question}
            </span>
            {!open && (
              <PlusIcon
                weight="bold"
                className="w-4 h-4 text-white tracking-tight"
              />
            )}
            {open && (
              <MinusIcon
                weight="bold"
                className="w-4 h-4 text-white tracking-tight"
              />
            )}
          </DisclosureButton>
          <DisclosurePanel
            transition
            className="pt-3 origin-top transition duration-150 ease-out data-[closed]:-translate-y-2 data-[closed]:opacity-0"
          >
            <span className="font-geist font-normal text-base text-white/80 leading-[160%]">
              {answer}
            </span>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default FAQ;
