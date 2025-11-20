import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return(
        <Link href='/' className="inline-block">
            {/* <div className="bg-budgeta-green px-6 py-4 rounded-lg"> */}
                {/* <span className="text-black text-base font-bold">Budgeta</span> */}
                <Image src="/logo.svg" width={110} height={40} alt="logo budgeta" />
            {/* </div> */}
        </Link>
    );
}