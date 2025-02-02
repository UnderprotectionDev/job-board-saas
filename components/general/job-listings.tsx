import { prisma } from "@/app/utils/db";
import { EmptyState } from "./empty-state";

async function getData() {
  const data = await prisma.jobPost.findMany({
    where: {
      status: "ACTIVE",
    },
    select: {
      id: true,
      jobTitle: true,
      salaryFrom: true,
      salaryTo: true,
      employmentType: true,
      location: true,
      createdAt: true,
      Company: {
        select: {
          name: true,
          logo: true,
          location: true,
          about: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export async function JobListings() {
  const data = await getData();
  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col gap-6">
          {data.map((job) => (
            <div key={job.id}>{job.jobTitle}</div>
          ))}
        </div>
      ) : (
        <EmptyState
          title="No jobs found"
          description="Try searching for jobs in different job title or location"
          buttonText="Clear all filters"
          href="/"
        />
      )}
    </>
  );
}
