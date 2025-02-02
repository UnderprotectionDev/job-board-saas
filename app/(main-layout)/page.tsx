import { JobFilters } from "@/components/general/job-filters";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <JobFilters />
      <Card className="col-span-2"></Card>
    </div>
  );
}
