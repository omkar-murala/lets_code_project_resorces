"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var bg-slate-950 ">
      <CardBody className="bg- relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-blue dark:border-white/[0.2] border-black/[0.1] w-[20rem] sm:w-[25rem] h-[20rem] rounded-xl p-6 border">
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://utfs.io/f/9ca92ff6-9969-4023-adbb-8a3837074186-914zog.png"
            height="1000"
            width="1000"
            className="h-[20rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}