"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import ButtonCommon from "../components/button-common";
import { CodeXml, MoveRight } from "lucide-react";

interface ThreeDCardDemo{
    data : {
        id ?: number | string,
        project_name ?: string,
        project_description ?: string,
        project_image ?: string,
        project_url ?: string,
        github_url ?: string,
        new_tagged ?: boolean
    }
}

export default function ThreeDCardDemo({data}:ThreeDCardDemo) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-[#222] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[26rem] h-auto rounded-xl p-6 border  ">
        {data?.project_name &&<CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          {data?.project_name}
        </CardItem>}
        {data?.project_description && <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300 line-clamp-2 "
        >
          {data?.project_description}
        </CardItem>}
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/1000x1000")}
            width="1000"
            className="h-[13rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:bg-white hover:text-[#222] flex gap-x-3 items-center"
          >
            GoTo Code <span><CodeXml className="h-4 w-4" /></span>
          </CardItem>
          {/* <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem> */}
          <ButtonCommon iconJsx={<MoveRight />} className="w-1/2 hover:bg-white hover:text-[#222]">Visit Now </ButtonCommon>
        </div>
      </CardBody>
    </CardContainer>
  );
}