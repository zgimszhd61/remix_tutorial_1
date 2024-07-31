import { Button } from "@/components/ui/button";
import type { MetaFunction } from "@remix-run/node";
import { Link, NavLink } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flax font-sans p-4">
      <Button>Click me</Button>
      <Link to="/dashboard">Dashboard</Link>;
      <NavLink
      to="/messages"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      Messages
    </NavLink>;
    </div>
  );
}
