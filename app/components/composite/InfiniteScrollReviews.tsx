"use client";

import React, { useEffect, useRef, useState } from "react";
import ReviewCard from "../ui/ReviewCard";

type Review = {
  text: string;
  author: string;
  role: string;
  avatar: string;
};

type InfiniteScrollReviewsProps = {
  reviews: Review[];
  direction: "left" | "right";
};
export default function InfiniteScrollReviews({
  reviews,
  direction,
}: InfiniteScrollReviewsProps) {
  const [animationDistance, setAnimationDistance] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateDistance = () => {
      if (!contentRef.current) return;

      // On calcul la moitié de la largeur du contenu des ReviewCard
      const contentWidth = contentRef.current.scrollWidth / 2;

      setAnimationDistance(contentWidth);
    };

    setTimeout(calculateDistance, 100);
  }, [reviews]);

  // On duplique le tableau de reviews
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <div className="relative overflow-hidden">
      {/* Gradient de fade sur les bords gauche et droite */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-beige to-transparent z-10 pointer-events-none " />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-beige to-transparent z-10 pointer-events-none " />
      {/* Container du défilement */}
      <div
        ref={contentRef}
        className="flex gap-6 will-change-transform group"
        style={{
          animation:
            direction === "left"
              ? `scrollLeftPx 30s linear infinite`
              : `scrollRightPx 30s linear infinite`,
          animationPlayState: "running",
          ...(animationDistance > 0 &&
            ({
              "--animation-distance": `${animationDistance}px`,
            } as React.CSSProperties)),
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animationPlayState = "running";
        }}
      >
        {duplicatedReviews.map((review, index) => (
          <ReviewCard
            key={`${review.author}-${index}`}
            text={review.text}
            author={review.author}
            role={review.role}
            avatar={review.avatar}
          />
        ))}
      </div>
    </div>
  );
}
