export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold text-white">Pulse</h1>
              <nav className="flex gap-6">
                <button className="text-sm text-gray-400 hover:text-white transition-colors">
                  Discover
                </button>
                <button className="text-sm text-indigo-500 font-medium">
                  Pulse
                </button>
                <button className="text-sm text-gray-400 hover:text-white transition-colors">
                  Trackers
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* New Pairs Column */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">New Pairs</h2>
              <span className="text-sm text-gray-400">⚡ 0</span>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                <p className="text-gray-400 text-sm">Loading tokens...</p>
              </div>
            </div>
          </div>

          {/* Final Stretch Column */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Final Stretch</h2>
              <span className="text-sm text-gray-400">⚡ 0</span>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                <p className="text-gray-400 text-sm">Loading tokens...</p>
              </div>
            </div>
          </div>

          {/* Migrated Column */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Migrated</h2>
              <span className="text-sm text-gray-400">⚡ 0</span>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                <p className="text-gray-400 text-sm">Loading tokens...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}