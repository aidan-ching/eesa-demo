import Image from "next/image";

export default function ConversationCard({
  name,
  profilePictureSrc,
  logoSrc,
  body,
}) {
  return (
    <div className="w-[400px] h-[200px] shadow-xl p-6 flex flex-col rounded">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-5">
          <Image
            src={profilePictureSrc}
            width={60}
            height={60}
            alt="profile picture"
            className="rounded-full w-[60px] h-[60px] object-cover"
          />

          <div className="font-medium text-[13pt] text-[#666666]">{name}</div>
        </div>
        <div className="grow flex justify-end items-start">
            <Image src={logoSrc} width={30} height={30} alt="Company logo"/>
        </div>
      </div>

      <div className="grow"/>
      <div className="mt-5 font-medium text-[10pt] text-[#5F6384] whitespace-pre-line">
        {body}
      </div>
    </div>
  );
}
