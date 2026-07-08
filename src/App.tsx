import Sidebar from "./components/layout/Sidebar";
import Hero from "./components/sections/Hero";

function App() {
  return (
    <div className="flex min-h-screen bg-nestly-cream">
      <Sidebar />
      <main className="flex-1 p-4">
        <Hero />
      </main>
    </div>
  );
}

export default App;
