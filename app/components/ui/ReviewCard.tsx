import Image from "next/image";

type ReviewCardProps = {
  text: string;
  author: string;
  role: string;
  avatar: string;
};

export default function ReviewCard({
  text,
  author,
  role,
  avatar,
}: ReviewCardProps) {
  const borderColor = "border-[#DBDBDB]";
  const bgColor = "bg-[#F6F6F6]";
  return (
    <div
      className={`${bgColor} max-w-[320px] md:max-w-[412px] p-6 rounded-2xl shadow-sm border border-gray-100 flex-shrink-0 `}
    >
      {/* Texte du témoignage */}
      <p
        className={`border ${borderColor} p-4 mb-6 text-black text-sm md:text-base lg:text-[1.125rem] rounded-[9px]`}
      >
        &quot;{text}&quot;
      </p>
      {/* Avatar, nom et rôle */}
      <div
        className={`flex items-center gap-4 p-4 border ${borderColor} rounded-[9px]`}
      >
        <div className="w-[53px] h-[53px] overflow-hidden flex-shrink-0">
          <Image
            src={avatar}
            width={53}
            height={53}
            alt={`avatar-${author}`}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Auteur et rôle */}
        <div className="">
          <p className="text-base lg:text-xl text-dark capitalize font-medium mb-[4px] ">
            {author}
          </p>
          <p className="text-xs text-dark capitalize">{role}</p>
        </div>
      </div>
    </div>
  );
}
