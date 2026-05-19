interface Props {
  params: {
    id: string;
  };
}

export default function TowDetailsPage({
  params,
}: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">
          Tow Job {params.id}
        </h1>

        <p className="text-slate-500 mt-2">
          Detailed compliance and evidence workflow.
        </p>
      </div>

      {/* Tow Information */}
      <div className="bg-white rounded-2xl shadow-sm border p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Tow Information
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-slate-500">Vehicle</p>
            <p className="font-semibold">
              Honda Civic
            </p>
          </div>

          <div>
            <p className="text-slate-500">Driver</p>
            <p className="font-semibold">
              John Doe
            </p>
          </div>

          <div>
            <p className="text-slate-500">Status</p>
            <p className="font-semibold">
              IN_PROGRESS
            </p>
          </div>

          <div>
            <p className="text-slate-500">Location</p>
            <p className="font-semibold">
              Dallas, TX
            </p>
          </div>
        </div>
      </div>

      {/* AI Compliance */}
      <div className="bg-white rounded-2xl shadow-sm border p-6">
        <h2 className="text-2xl font-semibold mb-4">
          AI Compliance Summary
        </h2>

        <div className="rounded-xl bg-yellow-50 border border-yellow-200 p-4">
          Missing pre-tow photographs detected.
          Recommend compliance review before
          tow closure.
        </div>
      </div>
    </div>
  );
}