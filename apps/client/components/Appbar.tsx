"use client";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Monitor } from "lucide-react";

const Appbar = () => {  
  return (
    <div className=" bg-gray-900 ">
      <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Monitor className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">Uptimia</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Pricing
              </a>
              <a
                href="#docs"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Docs
              </a>
              <a
                href="#support"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Support
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <SignedOut>
                <SignInButton className="cursor-pointer text-gray-300 hover:text-white transition-colors " />
                <SignUpButton className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors cursor-pointer " />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Appbar;
