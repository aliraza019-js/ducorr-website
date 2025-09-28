'use client';

import { trackConversion, trackEvent } from "@/utils/gtm";
import { useState } from "react";

export default function GTMTestPage() {
  const [testResults, setTestResults] = useState<string[]>([]);

  const addResult = (message: string) => {
    setTestResults(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const handleTestConversion = () => {
    addResult('Testing conversion tracking...');
    trackConversion('AW-831188944/hFN_CMLzkYkYENDfq4wD');
    addResult('Conversion tracking function called');
    alert('Conversion tracked! Check browser console and Network tab for GTM requests.');
  };

  const handleTestEvent = () => {
    addResult('Testing custom event tracking...');
    trackEvent('test_event', {
      event_category: 'test',
      event_label: 'gtm_integration_test'
    });
    addResult('Custom event tracking function called');
    alert('Custom event tracked! Check browser console and Network tab for GTM requests.');
  };

  const handleTestGTMLoad = () => {
    if (typeof window !== 'undefined' && window.gtag && typeof window.gtag === 'function') {
      addResult('✅ GTM is loaded and gtag function is available');
      alert('GTM is working! gtag function is available.');
    } else {
      addResult('❌ GTM is not loaded or gtag function is not available');
      alert('GTM is not working! Check if the script is loaded properly.');
    }
  };

  const clearResults = () => {
    setTestResults([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          GTM Integration Test
        </h1>
        
        <div className="space-y-4 mb-6">
          <button
            onClick={handleTestGTMLoad}
            className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Test GTM Loading
          </button>
          
          <button
            onClick={handleTestConversion}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Test Conversion Tracking
          </button>
          
          <button
            onClick={handleTestEvent}
            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
          >
            Test Custom Event
          </button>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold text-gray-900">Test Results</h3>
            <button
              onClick={clearResults}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Clear Results
            </button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg max-h-40 overflow-y-auto">
            {testResults.length === 0 ? (
              <p className="text-gray-500 text-sm">No test results yet. Click a test button above.</p>
            ) : (
              <div className="space-y-1">
                {testResults.map((result, index) => (
                  <div key={index} className="text-sm font-mono text-gray-700">
                    {result}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="text-sm text-gray-600">
          <p className="mb-2 font-semibold">Testing Instructions:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Open browser dev tools (F12)</li>
            <li>Go to Console tab to see debug messages</li>
            <li>Go to Network tab to see GTM requests</li>
            <li>Click "Test GTM Loading" first to verify GTM is loaded</li>
            <li>Click other test buttons and check for requests to googletagmanager.com</li>
            <li>Look for conversion events in the Network tab</li>
          </ol>
          
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="font-semibold text-blue-900 mb-1">Form Testing:</p>
            <p className="text-blue-800 text-sm">
              To test actual form submissions, visit <a href="/contact" className="underline">/contact</a> or <a href="/lunch-n-learning" className="underline">/lunch-n-learning</a> pages and submit the forms. 
              You should see alert messages and GTM conversion tracking in the console.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
