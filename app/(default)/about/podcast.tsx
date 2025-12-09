"use client";

import React from "react";
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiPlayCircle, mdiHeadphones } from "@mdi/js";

const Podcast = () => {
  return (
    <section className="relative mt-20 mb-16 mx-auto max-w-7xl px-4 sm:px-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 pb-3 mb-4 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-[#d9823f]/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-[#d9823f]/50">
          <span className="text-xl font-semibold text-[var(--color-primary)] uppercase tracking-wider">
            Our Story
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Origin Story of Ducorr
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Listen to the journey and foundation of Ducorr - the vision, struggles, and the road ahead.
        </p>
      </div>

      {/* Podcast Card */}
      <div className="max-w-3xl mx-auto">
        <div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          data-aos="zoom-y-out"
        >
          {/* Image */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <Image
              src="https://i.postimg.cc/85rpsRg4/james-mckinven-z-VLCus-XQSzs-unsplash.jpg"
              alt="Podcast Cover - Origin Story of Ducorr"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-[#d9823f] rounded-full flex items-center justify-center">
                  <Icon path={mdiHeadphones} size={1.5} className="text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/80 font-semibold">Episode 1</div>
                  <h3 className="text-2xl font-bold text-white">Origin Story of Ducorr</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              In this episode, we dive into the journey and foundation of Ducorr - the vision, struggles, and the road ahead.
            </p>

            {/* Audio Player */}
            <div className="bg-gradient-to-br from-[#d9823f]/5 to-[#b86a2f]/5 rounded-xl p-4 border border-[#d9823f]/20">
              <div className="flex items-center gap-3 mb-3">
                <Icon path={mdiPlayCircle} size={1.5} className="text-[#d9823f]" />
                <span className="text-sm font-semibold text-gray-900">Listen Now</span>
              </div>
              <audio 
                controls 
                className="w-full h-12 rounded-lg outline-none [&::-webkit-media-controls-panel]:bg-white [&::-webkit-media-controls-play-button]:bg-[#d9823f] [&::-webkit-media-controls-play-button]:rounded-full"
              >
                <source src="https://www.dropbox.com/scl/fi/6jxri19huehx2spmjpdot/DA-S1-Origin-Story-of-Ducorr.wav?rlkey=5h51lkb4fnm2327tkwzv7kcf9&dl=1" type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Podcast; 