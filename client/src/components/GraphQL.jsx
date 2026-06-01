import { useState } from "react";

const GraphQL = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function fetchUsers() {
    try {
      setLoading(true);

      const res = await fetch(
        "http://localhost:3000/graphql",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            query: `
              query {
                users {
                  id
                  name
                }
              }
            `,
          }),
        }
      );

      const json = await res.json();

      setData(json.data.users);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function createUser() {
    if (!name.trim()) return;

    try {
      setLoading(true);

      const res = await fetch(
        "http://localhost:3000/graphql",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            query: `
              mutation {
                createUser(name: "${name}",email:"${email}") {
                  id
                  name
                  email
                }
              }
            `,
          }),
        }
      );

      const json = await res.json();

      setName("");
      setEmail("");

      setData((pre)=>[...pre,json.data.createUser]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 p-4 text-white">
      <div className="mx-auto max-w-3xl rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <h1 className="text-3xl font-bold">
          GraphQL Client
        </h1>

        <p className="mt-2 text-zinc-400">
          Query + Mutation Demo
        </p>

        {/* Create User */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <input
            type="text"
            placeholder="Enter user name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="
              flex-1
              rounded-xl
              border
              border-zinc-700
              bg-zinc-950
              px-4
              py-3
              outline-none
              focus:border-pink-500
            "
          />
          <input
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="
              flex-1
              rounded-xl
              border
              border-zinc-700
              bg-zinc-950
              px-4
              py-3
              outline-none
              focus:border-pink-500
            "
          />

          <button
            onClick={createUser}
            className="
              rounded-xl
              bg-pink-600
              px-6
              py-3
              font-medium
              transition
              hover:bg-pink-500
            "
          >
            Create User
          </button>
        </div>

        {/* Fetch Users */}
        <button
          onClick={fetchUsers}
          className="
            mt-6
            rounded-xl
            border
            border-zinc-700
            px-6
            py-3
            transition
            hover:border-pink-500
          "
        >
          Fetch Users
        </button>

        {/* Response */}
        <div className="mt-8 rounded-xl bg-black/40 p-4">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <pre className="overflow-auto text-sm text-green-400">
              {JSON.stringify(data, null, 2)}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
};

export default GraphQL;