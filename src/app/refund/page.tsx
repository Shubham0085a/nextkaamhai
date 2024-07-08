// pages/about.js

import React from "react";

const RefundPolicy = () => {
  return (
    <div className="space-y-5 py-28 px-5">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold">Refund Policy</h1>
      </div>
      <p className="text-xl text-center font-semibold">
        OFFBEAT TECHNET PRIVATE LIMITED strives to ensure customer satisfaction
        with our SaaS platform, &quot;Kaamhai.&quot; We understand that there
        may be circumstances where you might seek a refund. Please read our
        refund policy carefully to understand your rights and the procedures for
        obtaining a refund.
      </p>
      <div>
      <p className="font-bold text-2xl">Subscription Models</p>
      <p className="text-xl">
        Monthly and Yearly Plans: Users can subscribe to Kaamhai on a monthly or
        yearly basis as per their preference. Free Trials and Introductory
        Offers: Users can sign up for free and access basic features. Enhanced
        features are available through paid subscriptions.
      </p>
      </div>
      <div>
      <p className="font-bold text-2xl">Refund Eligibility</p>
      <p className="text-lg">
        <span className="text-xl font-semibold">Conditions for Refunds:</span>{" "}
        The subscription was purchased but not used. A refund request is made
        within 3 days of the purchase.
      </p>
      <p className="text-lg">
        <span className="text-xl font-semibold">Timeframe for Request:</span>{" "}
        Users must request a refund within 3 days of purchasing the subscription
        to be eligible for a full refund.
      </p>
      </div>
      <div>
      <p className="font-bold text-2xl">Partial Refunds</p>
      <p className="text-lg">
        <span className="text-xl font-semibold">
          Unused Subscription Periods:
        </span>
        Kaamhai does not offer partial refunds for unused portions of a
        subscription period.
      </p>
      </div>
      <div>
      <p className="font-bold text-2xl">Cancellation</p>
      <p className="text-lg">
        <span className="text-xl font-semibold">Cancellation Process:</span> To
        cancel a subscription, users must contact support within 3 days of the
        purchase.
      </p>
      <p className="text-lg">
        Notice Period: A 3-day notice period is required for cancellation.
      </p>
      </div>
      <div>
      <p className="font-bold text-2xl">Payment Methods</p>
      <p className="text-lg">
        <span className="text-xl font-semibold">Accepted Payment Methods:</span>{" "}
        We accept debit cards, credit cards, and UPI for subscription payments.
      </p>
      <p className="text-lg">
        <span className="text-xl font-semibold">Refund Processing:</span>{" "}
        Refunds will be processed using the original payment method used for the
        purchase.
      </p>
      </div>
      <div>
      <p className="font-bold text-2xl">Exceptions</p>
      <p className="text-lg">
        <span className="text-xl font-semibold">Non-Refundable Scenarios:</span>{" "}
        Refunds are not provided for promotional subscriptions or if there is
        any abuse of the refund policy.
      </p>
      </div>
      <div>
      <p className="font-bold text-2xl">Support and Dispute Resolution</p>
      <p className="text-lg">
        <span className="text-xl font-semibold">Requesting a Refund:</span>{" "}
        Users can request a refund by: Emailing support at {" "}
        <a href="mailto:support@kaamhai.in" className="italic font-semibold">
           support@kaamhai.in
        </a>
        . Contacting our support executive at {" "}
        <a href="tel:+917090121000" className="italic font-semibold">
          +91 7090121000.
        </a>
      </p>
      <p className="text-lg">
        <span className="text-xl font-semibold">Handling Disputes:</span> All
        disputes regarding refunds will be handled by our customer support team.
      </p>
      <p className="font-bold text-2xl">Geographical Considerations</p>
      <p className="text-lg">
        <span className="text-xl font-semibold">Operating Region:</span> Kaamhai
        currently operates and is functional only in India. All refund policies
        comply with Indian regulations.
      </p>
      </div>
      <p className="text-lg">
        <span className="text-xl font-semibold">Note:</span> This refund policy
        is subject to change at the discretion of OFFBEAT TECHNET PRIVATE
        LIMITED. Users are encouraged to review the refund policy periodically
        for any updates.
      </p>
    </div>
  );
};

export default RefundPolicy;
