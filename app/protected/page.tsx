"use client";
import { createClient } from "@/utils/supabase/client";
import axios from "axios";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedPage() {
  const supabase = createClient();
  const [uid, setUid] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session?.user) {
        return redirect("/login");
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
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const { data } = await axios.post(
                "https://passport.cubid.me/api/dapp/create_user",
                {
                  dapp_id: 34,
                  email,
                }
              );
              const { uuid } = data;
              setUid(uuid);
            }}
            className="text-center space-y-3 mt-4 rounded-lg bg-base-300 p-12"
          >
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                required
                className="w-full bg-transparent"
                placeholder="Email"
              />
            </label>
            <button type="submit" className="btn btn-accent w-full">
              Submit
            </button>
            {Boolean(uid) && (
              <>
                <a
                  href={`https://passport.cubid.me/allow?uid=${uid}`}
                  onClick={() => {
                    localStorage.setItem("uid-to-fetch", uid as any);
                  }}
                  className="link link-accent"
                >
                  Redirect to uuid
                </a>
              </>
            )}
          </form>
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
