// components/ui/ConnectionsSkeleton.tsx
export  default function ConnectionsSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Skeleton */}
        <div className="text-center mb-8">
          <div className="h-8 w-64 bg-slate-700 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="h-4 w-96 bg-slate-700 rounded mx-auto animate-pulse"></div>
        </div>

        {/* Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-slate-800 rounded-xl shadow-lg border border-slate-700 animate-pulse"
            >
              <div className="p-6">
                {/* Profile Skeleton */}
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-slate-700 rounded-xl"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-slate-700 rounded w-3/4"></div>
                    <div className="h-3 bg-slate-700 rounded w-1/2"></div>
                    <div className="h-6 bg-slate-700 rounded w-20"></div>
                  </div>
                </div>

                {/* About Skeleton */}
                <div className="mt-4 space-y-2">
                  <div className="h-3 bg-slate-700 rounded"></div>
                  <div className="h-3 bg-slate-700 rounded w-5/6"></div>
                </div>

                {/* Skills Skeleton */}
                <div className="mt-4">
                  <div className="h-3 bg-slate-700 rounded w-32 mb-2"></div>
                  <div className="flex flex-wrap gap-2">
                    <div className="h-6 bg-slate-700 rounded w-16"></div>
                    <div className="h-6 bg-slate-700 rounded w-20"></div>
                    <div className="h-6 bg-slate-700 rounded w-14"></div>
                  </div>
                </div>
              </div>

              {/* Buttons Skeleton */}
              <div className="px-6 py-4 bg-slate-750 rounded-b-xl border-t border-slate-700">
                <div className="flex justify-between">
                  <div className="h-10 bg-slate-700 rounded-lg w-32"></div>
                  <div className="flex space-x-2">
                    <div className="w-10 h-10 bg-slate-700 rounded-lg"></div>
                    <div className="w-10 h-10 bg-slate-700 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}