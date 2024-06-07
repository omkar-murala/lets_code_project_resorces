"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var bg-gray-100">
      <CardBody className="bg-darkgray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-blue dark:border-white/[0.2] border-black/[0.1] w-[20rem] sm:w-[25rem] h-[20rem] rounded-xl p-6 border">
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://cdn3d.iconscout.com/3d/premium/thumb/students-doing-group-study-10332952-8539155.png?f=webp"
            height="1000"
            width="1000"
            className="h-50 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}