'use client';

interface Step9Props {
  isAgreed: boolean;
  onAgreementChange: (agreed: boolean) => void;
  error?: string;
}

export default function Step9({
  isAgreed,
  onAgreementChange,
  error,
}: Step9Props) {
  return (
    <div className="space-y-8">
      {/* Agreement Content */}
      <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
        <p className="text-gray-600 italic">
          [As much as we like to make our business fun, it is a business, so below is some business-y stuff.]
        </p>

        <div className="space-y-4">
          <p>
            I certify that I have personally completed this application for the purpose of obtaining employment. 
            I acknowledge that the use of this form, and my filling it out, does not indicate that any positions 
            are open, nor does it obligate the company to further process my application.
          </p>

          <p>
            My acceptance below attests to the fact that the information that I have provided on my application, 
            resume, given verbally, or provided in any other materials, is true and complete to the best of my 
            knowledge and also constitutes authority to verify any and all information submitted on this application.
          </p>

          <p>
            I understand that any misrepresentation or omission of any fact in my application, resume or any other 
            materials, or during any interviews, can be justification for refusal of employment, or, if employed, 
            termination from DUCORR MIDDLE EAST (FZC), hereafter referred to as Company, employ.
          </p>

          <p>
            I also affirm that I have not signed any kind of restrictive document creating any obligation to any 
            former employer that would restrict my acceptance of employment with the Company in the position I am seeking.
          </p>

          <p>
            I understand that this application is not an <strong>employment contract for any specific length of time</strong> between the Company and me, and that in the event I am hired, my employment will be <strong>"at will"</strong> and either the Company or I can terminate my employment with or without cause.
          </p>

          <p>
            Nothing contained in any handbook, manual, policy and the like, distributed by the Company to its employees 
            is intended to or can create an employment contract, an offer of employment or any obligation on the Company's 
            part. The Company may, at its sole discretion, hold in abeyance or revoke, amend or modify, abridge or change 
            any benefit, policy practice, condition or process affecting its employees.
          </p>

          <p>
            I hereby authorize the company and its agents to make such investigations and inquiries into my employment 
            and educational history and other related matters as may be necessary in arriving at an employment decision. 
            I hereby release employers, schools, and other persons from all liability in responding to inquires connected 
            with my application and I specifically authorize the release of information by any schools, businesses, 
            individuals, services or other entities listed by me in this form.
          </p>

          <p>
            Furthermore, I authorize the company and its agents to release any reference information to clients who request 
            such information for purposes of evaluating my credentials and qualifications.
          </p>

          <p>
            I authorize this company, if applicable, to request a copy of my credit report, motor vehicle driving record, 
            and any other investigative report deemed necessary through various third party sources. As may be required by 
            law, upon request within a reasonable period of time, I will be notified as to the nature and scope of such 
            investigation.
          </p>

          <p>
            I agree to submit to any drug test required of me, whether prior to my employment or if employed by this 
            company at any time thereafter.
          </p>
        </div>
      </div>

      {/* Agreement Checkbox */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={(e) => onAgreementChange(e.target.checked)}
            className={`mt-1 h-5 w-5 text-[#d9823f] focus:ring-[#d9823f] border-gray-300 rounded ${
              error ? 'border-red-300' : ''
            }`}
          />
          <span className="text-sm text-gray-700">
            I have read and understood the above Authorizations and At-Will Employment Agreement, and I agree to all terms and conditions.
          </span>
        </label>
        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
      </div>
    </div>
  );
}



