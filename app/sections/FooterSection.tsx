"use client";

import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="pb-[4rem] ">
      <Image
        src="/footer-logo.svg"
        width={1575}
        height={255}
        alt="footer Budgeta logo "
      />
      <div className="container mx-auto px-6 lg:px-16">
        {/* <hr className="mt-5 mb-3 lg:mt-10 lg:mt-6" /> */}
        <div className="w-full h-[1px] mt-5 mb-3 lg:mt-10 lg:mt-6 bg-budgeta-gray" />
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 md:flex-row md:items-center  md:gap-5">
            <Link
              href="#"
              className="text-sm lg:text-xl font-medium text-budgeta-gray capitalize"
            >
              Privacy policy
            </Link>
            <Link
              href="#"
              className="text-sm lg:text-xl font-medium text-budgeta-gray capitalize"
            >
              Terms
            </Link>
          </div>
          <Link
            href="#"
            className="text-sm lg:text-xl font-medium text-budgeta-gray"
          >
            Template by calioio (Faisyal Rizki)
          </Link>
          <Link
            href="#"
            className="text-sm lg:text-xl font-medium text-budgeta-gray"
          >
            Integrated by Pacôme AHOSSI
          </Link>
        </div>
      </div>
    </footer>
  );
}
