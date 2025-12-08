"use client";
import RevolutionizeHeader from "../components/composite/RevolutionizeHeader";
import ComparisonCard from "../components/composite/ComparisonCard";

export default function Revolutionize() {
  const beforeItems = [
    "Manual, disorganized",
    "Estimated, often inaccurate",
    "Manual notes, often forgotten",
    "Manual, time-consuming",
    "Time-consuming, complicated",
    "Difficult, unstructured",
    "Complicated, manual",
    "Require high discipline",
    "Risk of losing data",
    "Time-consuming, complicated",
  ];

  const afterItems = [
    "Automated, organized",
    "Easy, customizable",
    "Auto recorded, real-time tracking",
    "Graphs, easy to understand",
    "Intuitive, easy to use",
    "Structured, easy to track",
    "Supports multiples currencies",
    "Notifications, easy to monitor",
    "Cloud-based, secure",
    "Fast, efficient",
  ];

  return (
    <section className="relative py-[7.5rem] z-30 -mt-[64px]  rounded-[3rem] bg-dark">
      <div className="container mx-auto px-6 lg:px-16  ">
        <RevolutionizeHeader
          badge="Revolutionize"
          title={
            <>
              {" "}
              {""}
              <span className="text-budgeta-green capitalize">
                Budgeta{" "}
              </span>{" "}
              {""}
              Revolutionize your finances
            </>
          }
          description="Discover how Budgeta simplifies budgeting, expense tracking, and goal setting, making financial management easier and more efficient."
        />

        {/* Grid pour comparaison */}
        <div className="mt-10 lg:mt-16 flex flex-col md:flex-row gap-5 md:gap-10 justify-center items-center md:items-start">
          <ComparisonCard
            title="Before using budgeta"
            items={beforeItems}
            variant="before"
          />

          <ComparisonCard
            title="After using budgeta"
            items={afterItems}
            variant="after"
          />
        </div>
      </div>
    </section>
  );
}
