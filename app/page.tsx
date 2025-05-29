import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="container mx-auto px-2">
      <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#121212] relative overflow-hidden">
        <Navbar />
      </div>
    </div>
  );
}
