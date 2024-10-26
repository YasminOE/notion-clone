"use client";

import Link from "next/link";
import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/clerk-react";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";

//TODO: edit copy
export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <div className="w-full p-4 text-center font-bold shadow-lg">
        ⚠️ This site is a clone website. It is not the real, official site. Its
        purpose is to look like the official site for portfolio purposes. This
        site is not for active use. Do NOT enter your credentials or share any
        personal information ⚠️
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
        Welcome to <span className="underline">your productive space</span>
      </h1>
      <h3 className="text-base md:text-xl font-medium">
        Your workspace to write, organize, and collaborate.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="documents">
            Get Started
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Start Here
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
