import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <div className="flex min-h-screen bg-nestly-cream">
      <Sidebar />
      <main className="flex-1 p-4">
        {/* Hero and other sections will go here next */}
      </main>
    </div>
  );
}

export default App;
