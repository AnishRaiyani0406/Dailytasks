import DashboardOverview from './components/DashboardOverview';

export default function App() {
  return (
    <div className="p-6 bg-slate-950 min-h-screen space-y-6">
      <DashboardOverview />
      {/* Your other components like ProductList go here */}
    </div>
  );
}