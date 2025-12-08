"use client";

import DownloadHeader from "../components/composite/DownloadHeader";
import PhonesStack from "../components/composite/PhoneStack";

export default function DownloadSection() {
  return (
    <section className="relative -mt-[4rem] lg:-mt-[5rem] z-30 py-[3.75rem] lg:py-[7.5rem] rounded-[3rem] bg-dark ">
      <div className="container mx-auto px-6 lg:px-16">
        <DownloadHeader
          badge="Download now"
          title={
            <>
              <span>Ready to Take Control </span>
              <span>of Your Finances?</span>
            </>
          }
          description="Download Budgeta now and start managing your money like a pro!"
        />
        <div className="hidden lg:flex relative w-full h-[500px] lg:h-[650px] mt-8">
          <PhonesStack />
        </div>
      </div>
    </section>
  );
}
