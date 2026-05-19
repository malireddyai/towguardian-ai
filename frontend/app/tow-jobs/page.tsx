import Link from "next/link";
const towJobs = [
  {
    id: "TW-1001",
    vehicle: "Honda Civic",
    driver: "John Doe",
    status: "IN_PROGRESS",
    location: "Dallas, TX",
  },
  {
    id: "TW-1002",
    vehicle: "Ford F150",
    driver: "Sarah Smith",
    status: "COMPLETED",
    location: "Houston, TX",
  },
  {
    id: "TW-1003",
    vehicle: "Toyota Camry",
    driver: "Mike Johnson",
    status: "PENDING",
    location: "Austin, TX",
  },
];

export default function TowJobsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">
          Tow Jobs
        </h1>

        <p className="text-slate-500 mt-2">
          Monitor active towing operations and
          compliance workflows.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="text-left p-4">Tow ID</th>
              <th className="text-left p-4">Vehicle</th>
              <th className="text-left p-4">Driver</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Location</th>
            </tr>
          </thead>

          <tbody>
            {towJobs.map((job) => (
              <tr
                key={job.id}
                className="border-t hover:bg-slate-50"
              >
              <td className="p-4 font-medium text-blue-600">
                  <Link href={`/tow-jobs/${job.id}`}>
                      {job.id}
                  </Link>
              </td>

                <td className="p-4">
                  {job.vehicle}
                </td>

                <td className="p-4">
                  {job.driver}
                </td>

                <td className="p-4">
                  <span className="px-3 py-1 rounded-full text-sm bg-slate-200">
                    {job.status}
                  </span>
                </td>

                <td className="p-4">
                  {job.location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}