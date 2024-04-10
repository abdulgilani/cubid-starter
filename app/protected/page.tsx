"use client";
import { createClient } from "@/utils/supabase/client";
import axios from "axios";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedPage() {
  const supabase = createClient();
  const [uid, setUid] = useState(0);
  const [email, setEmail] = useState("");
  const [colorMode, setColorMode] = useState("light");

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(session?.user?.email);
      if (!session?.user) {
        return redirect("/login");
      } else {
        setEmail(session?.user?.email ?? "");
      }
    });
  }, [supabase]);

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="w-full">
        <div className="py-6 font-bold bg-purple-950 text-center">
          This is a protected page that you can only see as an authenticated
          user
        </div>
      </div>

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">Cubid Integration</h2>

          <button
            onClick={async (e) => {
              e.preventDefault();
              const { data } = await axios.post(
                "http://localhost:3000/api/dapp/create_user",
                {
                  dapp_id: 34,
                  email,
                }
              );
              const { uuid } = data;
              setUid(uuid);
            }}
            type="submit"
            className="btn btn-accent w-full"
          >
            Get Uuid
          </button>
          <form className="max-w-sm mx-auto">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Choose Color Mode
            </label>
            <select
              id="countries"
              value={colorMode}
              onChange={(e) => {
                setColorMode(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="light">Light Mode</option>
              <option value="dark">Dark Mode</option>
            </select>
          </form>
          {Boolean(uid) && (
            <>
              <a
                href={`https://passport.cubid.me/allow?uid=${uid}&colormode=${colorMode}`}
                onClick={() => {
                  localStorage.setItem("uid-to-fetch", uid as any);
                }}
                className="link link-accent"
              >
                Redirect to uuid
              </a>
            </>
          )}
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://passport.cubid.me/"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Cubid
          </a>
        </p>
      </footer>
    </div>
  );
}
