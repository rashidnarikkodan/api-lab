import { useState } from "react";

const REST = () => {
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleRest() {
    try {
      setLoading(true);

      const data = await fetch(
        "http://localhost:3000/rest/users"
      );

      const json = await data.json();

      setRes(json);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
    <div
        onClick={handleRest}
        className="
          w-full
          max-w-2xl
          cursor-pointer
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-900
          p-6
          shadow-xl
          transition-all
          duration-300
          hover:border-blue-500
          hover:shadow-blue-500/10
          active:scale-[0.98]
        "
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              REST API Demo
            </h1>

            <p className="mt-1 text-sm text-zinc-400">
              Click this card to fetch users
            </p>
          </div>

          <div className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
            GET
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-black/40 p-4 overflow-auto">
          {loading ? (
            <div className="flex items-center gap-2 text-zinc-300">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-500 border-t-white" />

              <span>Fetching users...</span>
            </div>
          ) : res ? (
            <pre className="text-sm text-green-400 whitespace-pre-wrap break-words">
              {JSON.stringify(res, null, 2)}
            </pre>
          ) : (
            <p className="text-zinc-500 text-sm">
              No data fetched yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default REST;