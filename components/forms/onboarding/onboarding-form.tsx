import { Card, CardContent } from "@/components/ui/card";
import Logo from "@/public/logo.png";
import Image from "next/image";

export function OnboardingForm() {
  return (
    <>
      <div className="flex items-center gap-2 mb-10">
        <Image src={Logo} alt="Logo" width={50} height={50} />
        <h1 className="text-4xl font-bold">
          Job<span className="text-primary">Board</span>
        </h1>
      </div>
      <Card className="w-full max-w-lg">
        <CardContent></CardContent>
      </Card>
    </>
  );
}
