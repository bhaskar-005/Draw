'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Zap } from 'lucide-react';
import { Payment } from '@/payment';
import { usePersonStore } from '@/store/store';

import LoadingBar from 'react-top-loading-bar';

const Pricing = () => {
  const userinfo = usePersonStore((state) => state.user);
  const updateUserSlice = usePersonStore((state:any) => state.updateUser);
  const [progress, setProgress] = useState(0);

  // Array of pricing plans
  const pricingPlans = [
    {
      name: 'Free',
      description: 'Enjoy essential features to kickstart your journey.',
      price: 0,
      features: [
        { name: 'excalidraw whiteboard', included: true },
        { name: 'Rich Text Editor', included: true },
        { name: 'Limited file creating', included: false },
        { name: 'Community support', included: true },
      ],
    },
    {
      name: 'Pro',
      description: 'Elevate your experience with our Pro Plan! Take advantage of premium features.',
      price: 499,
      features: [
        { name: 'excalidraw whiteboard', included: true },
        { name: 'Rich Text Editor', included: true },
        { name: 'Unlimited file creating', included: true },
        { name: 'Premium support', included: true },
        { name: 'Community support', included: true },
      ],
    },
    
  ];

  return (
    <>
     <LoadingBar
        color='#3377ff'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-4 shadow-sm ring-1 ${
                plan.name == 'Pro'  ? 'ring-gray-700 dark:ring-gray-400' : 'ring-gray-300 dark:ring-gray-800'
              } sm:px-8 lg:p-10`}
            >
              <div className="text-center">
                <h2 className={`${plan.name == 'Pro' ? 'text-2xl':'text-xl'} font-medium text-gray-900 dark:text-gray-200`}>
                  {plan.name}
                  <span className="sr-only">Plan</span>
                </h2>
                <h2 className="text-[12px] font-medium text-gray-500  my-5">{plan.description}</h2>

                <p className="mt-2 sm:mt-4 ">
                  <strong className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">₹{plan.price}</strong>
                  <span className={`text-sm font-medium text-gray-700 dark:text-gray-400 ${plan.name == 'Pro' ? 'hidden' : 'block'}`}>/month</span>
                </p>
              </div>

              <ul className="mt-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-1">
                    {feature.included ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-green-500"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-red-500"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                    <span className={`text-gray-700 dark:text-gray-400`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.name == 'Pro' ? (
                <Button className="w-full mt-8" onClick={() => Payment(userinfo, updateUserSlice ,setProgress)}>
                  <Zap className="size-[18px] mr-2" /> Upgrade
                </Button>
              ) : (
                <Link href='/dashboard/plans'>
                 <Button className="w-full mt-8 border-gray-500" variant={'outline'}>
                 Get Started
                 </Button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;
