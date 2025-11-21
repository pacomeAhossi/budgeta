'use client';

import React from "react";
import Button from "../components/ui/Button";
import Image from "next/image";


// import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="">
        <div className="container mx-auto px-6 lg:px-16">
            <div className="max-w-4xl mx-auto text-center space-y-4">
                
                <h1 className="text-4xl md:text-5xl capitalize font-semibold leading-tight text-white">
                    Your <span className="text-budgeta-green">money</span> your rules
                </h1>

                <p className="pt-1 text-budgeta-gray text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                    With Budgeta, managing your finances has never been easier. Start tracking, planning, and achieving your financial goals today
                </p>

                {/* Bouton CTA avec icône */}
                <div className="flex justify-center">
                    {/* <button className="
                        inline-flex items-center gap-2
                        bg-budgeta-green text-budgeta-dark
                        px-8 py-4 rounded-full
                        font-semibold text-lg
                        transition-all duration-300
                        hover:bg-budgeta-green/90 hover:gap-3
                        group
                    ">
                        Get Free Now
                        <span className="
                            w-6 h-6 flex items-center justify-center
                            bg-budgeta-dark rounded-full
                            transition-transform duration-300
                            group-hover:translate-x-1
                            ">
                            <ArrowRight className="w-4 h-4 text-budgeta-green" />
                        </span>
                    </button> */}
                    {/* <div className="flex"> */}
                        <Button className="flex items-center capitalize py-1 px-4 hover:bg-budgeta-green/90 group">
                            Get free now 
                            <span className="transition-transform duration-300  gap-3 hover:gap-4 group-hover:translate-x-1">
                                <Image src="/arrow-icon.svg" width={40} height={40} alt="logo budgeta" />
                            </span>
                        </Button>
                    {/* </div> */}
                </div>

            </div>
        </div>
    </section>
  );
}