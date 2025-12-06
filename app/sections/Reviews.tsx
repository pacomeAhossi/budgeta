"use client";

import InfiniteScrollReviews from "../components/composite/InfiniteScrollReviews";
import ReviewsHeader from "../components/composite/ReviewsHeader";

export default function Reviews() {
  // Tableau de reviews pour la première ligne
  const reviewsRow1 = [
    {
      text: "Budgeta has completely transformed the way I manage my finances. It's easy to use and keeps me on track!",
      author: "Sarah T",
      role: "Marketing manager",
      avatar: "/assets/avatar/sarah.png",
    },
    {
      text: "As a freelancer, Budgeta's multi-currency feature is a lifesaver. It helps me track my income from different clients seamlessly.",
      author: "James Robinson",
      role: "Freelance writer",
      avatar: "/assets/avatar/james.png",
    },
    {
      text: "I used to struggle with budgeting, but now with Budgeta, it's effortless. I love how it tracks everything automatically!",
      author: "John mitchell",
      role: "Software developer",
      avatar: "/assets/avatar/john.png",
    },
  ];

  const reviewsRow2 = [
    {
      text: "The insights and reports from Budgeta have helped me save more than I ever thought possible. Highly recommend!",
      author: "Emily Williams",
      role: "Graphic designer",
      avatar: "/assets/avatar/emily.png",
    },
    {
      text: "I've tried many budgeting apps, but Budgeta is by far the most intuitive and efficient one I’ve used.",
      author: "Lisa davis",
      role: "Project manager",
      avatar: "/assets/avatar/lisa.png",
    },
    {
      text: "Budgeta makes managing my expenses so simple. I can finally stick to my financial goals without feeling overwhelmed.",
      author: "Mark lewis",
      role: "Teacher",
      avatar: "/assets/avatar/mark.png",
    },
  ];
  return (
    <section className="relative py-[3.75rem] lg:py-[7.5rem] bg-white rounded-[3rem]">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Reviews header */}
        <ReviewsHeader
          badge="Reviews"
          title="What our users say"
          description="See why thousands of users love Budgeta!"
        />
      </div>

      {/* Infinite scroll reviews */}
      <div className="pt-7 lg:pt-14 space-y-6 lg:space-y-10 mb-[3rem] lg:mb-[4rem]">
        <InfiniteScrollReviews reviews={reviewsRow1} direction="left" />
        <InfiniteScrollReviews reviews={reviewsRow2} direction="right" />
      </div>
    </section>
  );
}
