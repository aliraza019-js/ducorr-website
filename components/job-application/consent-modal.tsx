'use client';

import { useState } from 'react';

const CORE_VALUES = [
  {
    title: 'Balance',
    description: 'The universe is balanced. We pay attention that each part of lives are nourished with its needs - mental, physical, home & work.',
  },
  {
    title: 'Thinking',
    description: 'Our most powerful tool - our brain is determinedly & systematically put to use to create solutions that ordinary drifting thinking would not produce.',
  },
  {
    title: 'Humor',
    description: 'To laugh is to live; so laugh & live.',
  },
  {
    title: 'Optimism',
    description: 'Believe that things will work out for the best; then work with this belief deep in your soul.',
  },
  {
    title: 'Warrior Mindset',
    description: 'A warrior assesses the terrain and the objective. The warrior then thinks and develops a plan to take achieve this objective. Execution then requires an all out effort to achieve the objective using all resources & talents available.',
  },
  {
    title: 'Explorer Mindset',
    description: 'Always asking why something is done in that way; then improve it.',
  },
  {
    title: 'Organized',
    description: 'Everything in it place. Everything in its time.',
  },
];

interface ConsentModalProps {
  isOpen: boolean;
  onAccept: () => void;
}

export default function ConsentModal({ isOpen, onAccept }: ConsentModalProps) {
  const [isAgreed, setIsAgreed] = useState(false);

  if (!isOpen) return null;

  const handleAccept = () => {
    if (isAgreed) {
      onAccept();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => {}} // Prevent closing on backdrop click
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl transform transition-all flex flex-col">
        {/* Header */}
        <div className="flex-shrink-0 bg-gradient-to-r from-[#d9823f] to-[#b86a2f] px-6 py-4 rounded-t-2xl">
          <h2 className="text-2xl font-bold text-white">Important To Read Before Proceeding</h2>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="p-6 md:p-8">
          <div className="space-y-6 text-gray-700">
            <p className="text-base leading-relaxed" style={{ textAlign: 'justify' }}>
              Hi there. We want to introduce ourselves to you before you start filling in this application. 
              We work hard to create a positive, vibrant and learning environment that people love to come to. 
              It helps us enjoy our day, customers love us and its good for business! Therefore it is critical 
              that that everyone who joins us resonates with our core values & culture.
            </p>

            {/* Core Values */}
            <div className="space-y-4">
              <p className="font-medium text-gray-900" style={{ textAlign: 'justify' }}>Our values are:</p>
              <div className="space-y-5">
                {CORE_VALUES.map((value, index) => (
                  <div key={index} className="space-y-1">
                    <h3 className="font-bold text-gray-900">{value.title}:</h3>
                    <p className="italic text-gray-600 pl-4" style={{ textAlign: 'justify' }}>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Concluding Paragraph */}
            <p className="text-base leading-relaxed" style={{ textAlign: 'justify' }}>
              If you feel that the above words & descriptions are things that are dear to you and that it makes 
              you feel excited, then sign below - cause you are the type of person we want. If not... that's ok. 
              We wish you luck with your job hunt.
            </p>
          </div>

          {/* Agreement Checkbox */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                className="mt-1 h-5 w-5 text-[#d9823f] focus:ring-[#d9823f] border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">
                I have read and understood the core values and culture of Ducorr, and I agree to proceed with the application.
              </span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-end gap-4">
            <button
              onClick={handleAccept}
              disabled={!isAgreed}
              className="px-6 py-3 bg-gradient-to-r from-[#d9823f] to-[#b86a2f] text-white rounded-lg font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              I Agree, Continue
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

