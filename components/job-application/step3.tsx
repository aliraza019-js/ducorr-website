'use client';

export default function Step3() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gray-700 px-6 py-4 rounded-lg">
        <h2 className="text-xl font-bold text-white">Employment History</h2>
      </div>

      {/* Instructions */}
      <div className="space-y-4">
        <p className="font-bold italic text-gray-900">Instructions:</p>
        <p className="text-base leading-relaxed text-gray-700">
          Fill In your last four (4) Jobs. Start with the <strong>most recent</strong> and go back in time. 
          If you have held more than 1 position in one company each position counts as 1 job.
        </p>
      </div>
    </div>
  );
}

