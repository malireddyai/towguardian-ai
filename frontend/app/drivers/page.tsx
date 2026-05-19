const drivers = [
  {
    name: "John Doe",
    cdlExpiry: "2026-08-15",
    medicalExpiry: "2025-12-10",
    status: "COMPLIANT",
  },
  {
    name: "Sarah Smith",
    cdlExpiry: "2025-06-01",
    medicalExpiry: "2025-05-20",
    status: "EXPIRING",
  },
  {
    name: "Mike Johnson",
    cdlExpiry: "2024-12-01",
    medicalExpiry: "2024-10-15",
    status: "NON_COMPLIANT",
  },
];

export default function DriversPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">
          Driver Compliance
        </h1>

        <p className="text-slate-500 mt-2">
          Track CDL certifications and medical
          compliance.
        </p>
      </div>

      <div className="grid gap-6">
        {drivers.map((driver) => (
          <div
            key={driver.name}
            className="bg-white rounded-2xl shadow-sm border p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold">
                  {driver.name}
                </h2>

                <p className="text-slate-500 mt-2">
                  CDL Expiry: {driver.cdlExpiry}
                </p>

                <p className="text-slate-500">
                  Medical Expiry:{" "}
                  {driver.medicalExpiry}
                </p>
              </div>

              <div>
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    driver.status === "COMPLIANT"
                      ? "bg-green-100 text-green-700"
                      : driver.status === "EXPIRING"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {driver.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}