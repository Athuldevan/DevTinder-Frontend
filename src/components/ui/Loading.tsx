// components/ui/Loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="text-center">
        {/* Animated Logo/Icon */}
        <div className="relative mb-8">
          <div className="w-20 h-20 mx-auto mb-4 relative">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full animate-ping"></div>
            {/* Middle ring */}
            <div className="absolute inset-2 border-4 border-blue-500/50 rounded-full animate-spin [animation-duration:2s]"></div>
            {/* Inner core with code icon */}
            <div className="absolute inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-2">
            Loading Developer Connections
          </h2>
          <p className="text-slate-400 text-lg">
            Building your network...
          </p>
        </div>

        {/* Animated Progress Bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-progress"></div>
          </div>
        </div>

        {/* Developer-themed Loading Dots */}
        <div className="mt-8 flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-bounce"
              style={{ animationDelay: `${index * 0.1}s` }}
            ></div>
          ))}
        </div>

        {/* Fun Developer Message */}
        <div className="mt-6">
          <p className="text-slate-500 text-sm italic">
            // Connecting developers worldwide...
          </p>
        </div>
      </div>
    </div>
  );
}