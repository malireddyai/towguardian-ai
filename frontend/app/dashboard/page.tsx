import {
  Truck,
  ShieldAlert,
  BadgeCheck,
  FileWarning,
} from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      title: "Active Tows",
      value: "42",
      icon: Truck,
      color: "text-blue-600",
    },
    {
      title: "Open Violations",
      value: "7",
      icon: ShieldAlert,
      color: "text-red-600",
    },
    {
      title: "Compliant Drivers",
      value: "18",
      icon: BadgeCheck,
      color: "text-green-600",
    },
    {
      title: "Audit Warnings",
      value: "3",
      icon: FileWarning,
      color: "text-yellow-600",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Compliance Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Monitor towing operations, compliance risks,
          and active violations.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="bg-white rounded-2xl shadow-sm border p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm">
                    {stat.title}
                  </p>

                  <h2 className="text-4xl font-bold mt-2">
                    {stat.value}
                  </h2>
                </div>

                <Icon
                  className={`w-10 h-10 ${stat.color}`}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-sm border p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Recent Compliance Activity
        </h2>

        <div className="space-y-4">
          <div className="border rounded-xl p-4">
            Missing pre-tow photos detected for Tow
            TW-1007.
          </div>

          <div className="border rounded-xl p-4">
            Driver medical certificate expiring in 5
            days.
          </div>

          <div className="border rounded-xl p-4">
            AI audit scan completed successfully.
          </div>
        </div>
      </div>
    </div>
  );
}