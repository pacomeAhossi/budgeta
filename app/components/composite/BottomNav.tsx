import Image from "next/image";

type NavItem = {
  icon: string;
  label: string;
  isActive: boolean;
};

const navItems: NavItem[] = [
  { icon: "/assets/icons/home-icon.svg", label: "Home", isActive: true },
  { icon: "/assets/icons/card-icon.svg", label: "Card", isActive: false },
  { icon: "assets/icons/status-up-icon.svg", label: "Stat", isActive: false },
  { icon: "assets/icons/profile-icon.svg", label: "Profile", isActive: false },
];

export default function BottomNav() {
  return (
    <nav className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 px-6 py-3 rounded-b-[2.85rem]">
      <ul className="flex items-center justify-between">
        {navItems.map((item, index) => {
          return (
            <li key={index}>
              <button
                className={`
                  flex flex-col items-center gap-1 transition-all duration-200
                  ${
                    item.isActive
                      ? "opacity-100"
                      : "opacity-40 hover:opacity-70"
                  }
                `}
              >
                <div
                  className={`
                    w-6 h-6
                    ${item.isActive ? "text-black" : "text-gray-600"}
                  `}
                >
                  <Image
                    src={item.icon}
                    width={24}
                    height={24}
                    className={`${
                      item.isActive ? "brightness-0 saturate-100" : ""
                    } `}
                    alt={` ${item.label} icon`}
                  />
                </div>
                <span
                  className={`
                  text-[10px] font-medium
                  ${item.isActive ? "text-black" : "text-gray-500"}
                `}
                >
                  {item.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
