"use client";

import { Card, CardContent } from "@/components/ui/card";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { useState } from "react";
import { UserTypeSelection } from "./user-type-form";
import { CompanyForm } from "./company-form";

type UserType = "company" | "jobSeeker" | "null";

export function OnboardingForm() {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<UserType>("null");

  function handleUserTypeChange(type: UserType) {
    setUserType(type);
    setStep(2);
  }

  function renderStep() {
    switch (step) {
      case 1:
        return <UserTypeSelection onSelect={handleUserTypeChange} />;
      case 2:
        return userType === "company" ? (
          <CompanyForm />
        ) : (
          <div>Job seeker form</div>
        );
      default:
        return null;
    }
  }

  return (
    <>
      <div className="flex items-center gap-2 mb-10">
        <Image src={Logo} alt="Logo" width={50} height={50} />
        <h1 className="text-4xl font-bold">
          Job<span className="text-primary">Board</span>
        </h1>
      </div>
      <Card className="w-full max-w-lg">
        <CardContent className="p-6">{renderStep()}</CardContent>
      </Card>
    </>
  );
}
