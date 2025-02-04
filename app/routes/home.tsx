import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Hero } from "~/Hero/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Router App" },
    { name: "description", content: "Welcome t0000000o React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
    </>
  );
}
