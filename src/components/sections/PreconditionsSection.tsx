import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/Button";
import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

export function PreconditionsSection() {
  const [isaccepted, setIsaccepted] = useState(false);
  const [openItem, setOpenItem] = useState<string>("");
  console.log(openItem);

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border border-[#EAEAEA] px-6"
      value={openItem}
      onValueChange={setOpenItem}
    >
      <AccordionItem value="item" className="">
        <AccordionTrigger className="font-['Inter'] flex justify-between items-center relative">
          <p>Hey, Accept Preconditions before you start the listing!</p>
          {openItem !== "item" && (
            <div className="flex space-x-2 items-center">
              {isaccepted ? (
                <button className="bg-[#34C7591A] text-xs px-4 py-2 rounded-full flex items-center gap-1">
                  <RightIcon />
                  <p>Accepted</p>
                </button>
              ) : (
                <button className="bg-[#FF95001A] text-xs px-4 py-2 rounded-full flex items-center gap-1">
                  <div className="bg-[#FF9500] w-2 h-2 rounded-full"></div>
                  <p>Panding</p>
                </button>
              )}
              <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
            </div>
          )}
          {openItem === "item" && (
            <p className="pt-2">
              <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 rotate-180" />
            </p>
          )}
        </AccordionTrigger>
        <AccordionContent className="space-y-2 w-full font-['Inter']">
          <p className="text-[#0F0C1B99] text-left">
            Before you can proceed with your listing, please make sure to review
            all required preconditions. Accepting these is mandatory to
            continue. It ensures your submission meets our platformstandards and
            avoids delays. Listings that don’t meet these terms may be rejected.
            Take a moment to go through them carefully before moving ahead. Once
            accepted, you’ll be able to start listing right away.
          </p>
          <div className="w-full flex justify-start py-2">
            {isaccepted ? (
              <button
                className="bg-[#34C7591A] px-4 py-2 rounded-full flex items-center gap-1"
                onClick={() => setIsaccepted(!isaccepted)}
              >
                <RightIcon />
                <p>Accepted</p>
              </button>
            ) : (
              <Button
                size="sm"
                className="bg-[#613FDD] text-white px-16 py-2"
                onClick={() => setIsaccepted(!isaccepted)}
              >
                Accept
              </Button>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function RightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3332 4L5.99984 11.3333L2.6665 8"
        stroke="#34C759"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
