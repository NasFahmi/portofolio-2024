import { dataAbout } from "@/data/about";
import imageCard from "@/public/image_card.png";
import imageSectionInput from "@/public/image_section_input.png";
import icCopy from "@/public/ic_copy.png";
import Image from "next/image";
import imageDownload from "@/public/ic_download.png";
import icExperience from "@/public/ic_badge.png";
import icProject from "@/public/ic_briftcase.png";
import icProgress from "@/public/ic_progress.png";
export default function About() {
  return (
    <div className="mt-[100px] mb-[100px]">
      <h1 className="text-3xl font-semibold text-center text-text-primary">
        {dataAbout.title}
      </h1>
      <h1 className="text-center text-text-secoundary">{dataAbout.subtitle}</h1>
      <div className="mt-[50px]">
        <div className="grid grid-cols-16 gap-10 grid-rows-[50px_minmax(25px,_1fr)_100px] ">
          <div className="relative col-span-9 overflow-hidden border row-span-7 border-stroke-btn bg-bg-primary rounded-2xl">
            <div className="absolute inset-0 z-10 flex items-end justify-start px-10 py-5 font-semibold">
              <p className="text-3xl text-text-primary ">
                {dataAbout.card.card_team}
              </p>
            </div>
            <Image
              src={imageCard}
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
          <div className="h-full col-span-7 row-span-4 py-8 border min-h-10 px-7 bg-bg-primary border-stroke-btn rounded-2xl">
            <p className="text-sm text-text-primary ">
              {dataAbout.card.card_introduction}
            </p>
          </div>
          <div className="relative flex items-center justify-center h-full col-span-7 row-span-3 py-8 border px-7 min-h-10 bg-bg-primary border-stroke-btn rounded-2xl">
            <Image
              src={imageSectionInput}
              alt=""
              className="absolute bottom-0 w-36 right-10"
            />
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex items-center justify-center gap-2 p-4 py-3 duration-300 ease-in-out rounded-lg cursor-pointer w-fit bg-btn-secoundary hover:bg-btn-secoundary-hover">
                <Image src={icCopy} alt="" className="w-3" />
                <p className="text-sm">
                  {dataAbout.card.card_project.cta_email}
                </p>
              </div>
              <p className="mt-2 text-sm font-medium">
                {dataAbout.card.card_project.card_project_heading}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center col-span-6 row-span-2 py-8 border min-h-10 px-7 bg-bg-primary border-stroke-btn rounded-2xl">
            <h1 className="mb-3 text-xl font-semibold text-center">
              {dataAbout.card.card_resume.title}
            </h1>
            <div className="flex items-center justify-center gap-2 p-4 py-3 duration-300 ease-in-out rounded-lg cursor-pointer w-fit bg-btn-secoundary hover:bg-btn-secoundary-hover">
              <Image src={imageDownload} alt="" className="w-5" />
              <p className="text-sm">{dataAbout.card.card_resume.cta_resume}</p>
            </div>
          </div>
          <div className="flex items-center justify-center col-span-10 row-span-2 gap-10 py-8 border min-h-10 px-7 bg-bg-primary border-stroke-btn rounded-2xl">
            <div className="flex flex-col items-center justify-center ">
              <Image src={icExperience} alt="" className="w-12 h-auto mb-5" />
              <h1 className="mb-2 text-text-primary">
                {dataAbout.card.card_experience.section_experience.title}
              </h1>
              <p className="text-text-secoundary">
                {dataAbout.card.card_experience.section_experience.subtitle}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <Image src={icProject} alt="" className="w-12 h-auto mb-5" />
              <h1 className="mb-2 text-text-primary">
                {dataAbout.card.card_experience.section_experience.title}
              </h1>
              <p className="text-text-secoundary">
                {dataAbout.card.card_experience.section_experience.subtitle}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <Image src={icProgress} alt="" className="w-12 h-auto mb-5" />
              <h1 className="mb-2 text-text-primary">
                {dataAbout.card.card_experience.section_experience.title}
              </h1>
              <p className="text-text-secoundary">
                {dataAbout.card.card_experience.section_experience.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}