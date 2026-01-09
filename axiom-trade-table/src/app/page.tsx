export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background-secondary">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold text-text-primary">Pulse</h1>
              <nav className="flex gap-6">
                <button className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Discover
                </button>
                <button className="text-sm text-brand-primary font-medium">
                  Pulse
                </button>
                <button className="text-sm text-text-secondary hover:text-text-primary transition-colors">
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
              <h2 className="text-lg font-semibold text-text-primary">
                New Pairs
              </h2>
              <span className="text-sm text-text-secondary">⚡ 0</span>
            </div>
            <div className="space-y-3">
              <div className="bg-background-secondary border border-border rounded-lg p-4">
                <p className="text-text-secondary text-sm">Loading tokens...</p>
              </div>
            </div>
          </div>

          {/* Final Stretch Column */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-text-primary">
                Final Stretch
              </h2>
              <span className="text-sm text-text-secondary">⚡ 0</span>
            </div>
            <div className="space-y-3">
              <div className="bg-background-secondary border border-border rounded-lg p-4">
                <p className="text-text-secondary text-sm">Loading tokens...</p>
              </div>
            </div>
          </div>

          {/* Migrated Column */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-text-primary">
                Migrated
              </h2>
              <span className="text-sm text-text-secondary">⚡ 0</span>
            </div>
            <div className="space-y-3">
              <div className="bg-background-secondary border border-border rounded-lg p-4">
                <p className="text-text-secondary text-sm">Loading tokens...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}