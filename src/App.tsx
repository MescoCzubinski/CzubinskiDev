import { useState } from "react";
import Header from "./Header";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [isUS, setIsUS] = useState(true);

  return (
    <main className={`h-[100vh] w-full bg-[#e0e0e0] text-[#0e0e0e] ${isDark ? "dark:bg-[#0e0e0e] dark:text-[#e0e0e0]" : "bg-[#e0e0e0] text-[#0e0e0e]"}`}>
      <Header setIsDark={setIsDark} isDark={isDark} setIsUS={setIsUS} isUS={isUS}></Header>
      <h1 className="ml-20 max-[400px]:ml-2 mt-2 text-3xl">{isUS ? "Hi! I'm Mieszko" : "Cześć! Strona w budowie..."}</h1>
    </main>
  );
}
