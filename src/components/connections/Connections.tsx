import UseConnections from "../../features/connections/hooks/useConnections";
import Loading from "../../components/ui/Loading";
import ConnectionsSkeleton from "../ui/ConnectionSkelton";

interface ConnectionProp {
  firstName: string;
  lastName: string;
  gender: string;
  photoUrl: string;
  age: number;
  about: string;
  skills: string[];
}

export default function Connections() {
  const { data: connections, isLoading, isPending } = UseConnections();

  if (isLoading) {
    return <Loading />;
  }

  if (isPending) {
    return <ConnectionsSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Developer Connections
          </h1>
          <p className="text-slate-400">
            Connect with fellow developers and collaborators
          </p>
        </div>

        {/* Connections List */}
        <div className="space-y-4">
          {connections.map((connection: ConnectionProp, index: number) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-700 hover:border-slate-600"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  {/* Left Section - Profile Info */}
                  <div className="flex items-start space-x-4 flex-1 min-w-0">
                    <img
                      className="w-16 h-16 rounded-xl object-cover border-2 border-blue-500 flex-shrink-0"
                      src={connection.photoUrl}
                      alt={`${connection.firstName} ${connection.lastName}`}
                    />
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-white truncate">
                          {connection.firstName} {connection.lastName}
                        </h3>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300">
                          {connection.gender}
                        </span>
                        <span className="text-slate-400 text-sm">
                          {connection.age} years
                        </span>
                      </div>

                      {/* About Section */}
                      <p className="text-slate-300 text-sm mb-3 line-clamp-2">
                        {connection.about}
                      </p>

                      {/* Skills Section */}
                      <div className="flex items-center space-x-3">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide whitespace-nowrap">
                          Skills:
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {connection.skills.slice(0, 4).map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                          {connection.skills.length > 4 && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700 text-slate-400">
                              +{connection.skills.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Action Buttons */}
                  <div className="flex items-center space-x-3 ml-6 flex-shrink-0">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium text-sm">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Play Intro</span>
                    </button>

                    <div className="flex space-x-1">
                      <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all duration-200">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>

                      <button className="p-2 text-slate-400 hover:text-green-500 hover:bg-green-500/10 rounded-lg transition-all duration-200">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {connections.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-slate-800 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-slate-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No connections yet
            </h3>
            <p className="text-slate-400">
              Start connecting with other developers to see them here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}