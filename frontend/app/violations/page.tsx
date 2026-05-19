const violations = [
  {
    id: "V-2001",
    severity: "HIGH",
    description:
      "Missing pre-tow photographic evidence",
    towId: "TW-1001",
    status: "OPEN",
  },
  {
    id: "V-2002",
    severity: "MEDIUM",
    description:
      "Driver medical certificate nearing expiry",
    towId: "TW-1002",
    status: "IN REVIEW",
  },
  {
    id: "V-2003",
    severity: "LOW",
    description:
      "Tow completion timestamp mismatch",
    towId: "TW-1003",
    status: "RESOLVED",
  },
];

export default function ViolationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">
          Compliance Violations
        </h1>

        <p className="text-slate-500 mt-2">
          Review AI-detected compliance risks and
          operational violations.
        </p>
      </div>

      <div className="grid gap-6">
        {violations.map((violation) => (
          <div
            key={violation.id}
            className="bg-white rounded-2xl shadow-sm border p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold">
                  {violation.id}
                </h2>

                <p className="text-slate-700 mt-3">
                  {violation.description}
                </p>

                <div className="flex gap-4 mt-4 text-sm text-slate-500">
                  <span>
                    Tow ID: {violation.towId}
                  </span>

                  <span>
                    Status: {violation.status}
                  </span>
                </div>
              </div>

              <span
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  violation.severity === "HIGH"
                    ? "bg-red-100 text-red-700"
                    : violation.severity === "MEDIUM"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {violation.severity}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}