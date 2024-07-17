"use client";
import React, { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { SparklesPreview } from "../common/heading-sparkle";
import { FlipWordsDemo } from "./heading-common";
import { contactUsJson } from "../json/contact-us-json";

export function SignupFormDemo() {
  const [inputState, setInputState] = useState([]);
  const wordsArray = [
    "Contact Us",
    "संपर्क करें",
    "お問い合わせ",
    "联系我们",
    "связаться с нами",
    "सम्पर्कः"
  ]

  // handle the input changes events.
  const handleInputChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputState({ ...inputState, [name]: value });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (<>
    <div className=''>   
        <SparklesPreview>
            <FlipWordsDemo wordsArray={wordsArray} />
          </SparklesPreview>
    </div>
    <div className="w-full mt-[3rem]">
    <div className="max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input border-[0.01rem] borer-gray-200 bg-transparent dark:bg-black">
      <p className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300 font-ubuntu">
        Feel free to send me a message using the form below. I will get back to you as soon as possible.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        {
        contactUsJson?.length > 0 && contactUsJson?.map((item, index)=>{

          if(item?.input_type_elemnent == "textarea"){
            return <>
            <div key={index} className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
            <Label className="text-white" htmlFor={item?.input_name}>{item?.label_name}</Label>
              <textarea onChange={handleInputChange} name={item?.input_name} id="" placeholder={item?.placeholder_text} className="w-full h-[8rem] rounded-lg bg-transparent resize-none border-[0.01rem] border-white px-3 py-2 placeholder:text-sm">
              </textarea>
              <BottomGradient/>
              </LabelInputContainer>
              </div>
            </>
          }

          return <>
            
        <div key={index} className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label className="text-white" htmlFor={item?.input_name}>{item?.label_name}</Label>
            <Input onChange={handleInputChange} id={item?.input_name} name={item?.input_name} required={item?.required} className="bg-transparent caret-white text-white" placeholder={item?.placeholder_text} type={item?.input_type} />
          </LabelInputContainer>
        </div>
          </>
        })
        }

        <button
          className="bg-gradient-to-br relative font-ubuntu group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send Message &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
    </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
                                                                       