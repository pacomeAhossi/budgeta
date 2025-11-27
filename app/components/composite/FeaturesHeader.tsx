type FeaturesHeaderProps = {
  badge: string;
  title: string;
  description: string;
};

export default function FeaturesHeader({
  badge,
  title,
  description,
}: FeaturesHeaderProps) {
  return (
    <div className="text-center mb-[60px] maw-w-2xl mx-auto space-y-4 ">
      <span className="inline-block text-xs uppercase text-black bg-budgeta-gray/30 px-2 py-1 rounded-full tracking-widest font-semibold">
        {badge}
      </span>
      <h2 className=" text-3xl md:4xl lg:5xl font-bold capitalize">{title}</h2>
      <p className="text-base md:text-lg text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
