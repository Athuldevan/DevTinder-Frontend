import UseRequest from "../../features/Requests/hooks/useRequest";
import Loading from "../../components/ui/Loading";
import UseReviewRequest from "../../features/Requests/hooks/useReviewRequest";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Toast from "../ui/Toast";
import { toast } from "react-toastify";
const RequestCard = () => {
  const { data: requests, isLoading } = UseRequest();
  const { mutate, isPending } = UseReviewRequest();
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  if (!user) {
    navigate("/login");
  }

  if (isLoading || isPending) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loading />
          <p className="text-slate-400 font-medium">
            Loading connection requests...
          </p>
        </div>
      </div>
    );
  }

  if (requests?.length === 0 || !requests) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-900 to-slate-800 py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-32 h-32 mx-auto mb-6 bg-slate-800 rounded-full flex items-center justify-center">
            <svg
              className="w-16 h-16 text-slate-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">
            No Connection Requests
          </h2>
          <p className="text-slate-400 text-lg mb-6">
            When developers send you connection requests, they'll appear here.
          </p>
          <Link to="/feed">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
              Explore Developers
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 to-slate-800 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Connection Requests
          </h1>
          <p className="text-slate-400">
            Review and manage your incoming connection requests
          </p>
          <div className="mt-4 inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            {requests?.length} pending request
            {requests?.length !== 1 ? "s" : ""}
          </div>
        </div>

        {/* Requests List */}
        <div className="space-y-4">
          {requests?.map((request, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl shadow-lg border border-slate-700 hover:border-slate-600 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  {/* Left Section - User Info */}
                  <div className="flex items-start space-x-4 flex-1 min-w-0">
                    <img
                      className="w-16 h-16 rounded-xl object-cover border-2 border-blue-500 flex-shrink-0"
                      src={request?.fromUserId?.photoUrl}
                      alt={`${request?.fromUserId?.firstName} ${request?.fromUserId?.lastName}`}
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-white">
                          {request?.fromUserId?.firstName}{" "}
                          {request?.fromUserId?.lastName}
                        </h3>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-300">
                          Developer
                        </span>
                      </div>

                      {/* About Section */}
                      <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                        {request?.fromUserId?.about ||
                          "Passionate developer looking to connect and collaborate"}
                      </p>

                      {/* Skills Section */}
                      <div className="flex items-center space-x-3">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide whitespace-nowrap">
                          Skills:
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {request?.fromUserId?.skills
                            ?.slice(0, 4)
                            .map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          {request?.fromUserId?.skills?.length > 4 && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700 text-slate-400">
                              +{request?.fromUserId?.skills?.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Action Buttons */}
                  <div className="flex flex-col space-y-3 ml-6 flex-shrink-0">
                    <div className="flex space-x-3">
                      <button
                        onClick={() =>
                          mutate({
                            status: "accepted",
                            requestedId: request?._id,
                          })
                        }
                        className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() =>
                          mutate({
                            status: "rejected",
                            requestedId: request?._id,
                          })
                        }
                        className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                      >
                        Reject
                      </button>
                    </div>
                    <button className="px-4 py-2 text-slate-400 hover:text-slate-300 hover:bg-slate-700/50 rounded-lg transition-colors duration-200 text-sm font-medium">
                      View Profile
                    </button>
                  </div>
                </div>

                {/* Timestamp */}
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <p className="text-slate-500 text-sm">
                    Request received • Recently
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bulk Actions Footer */}
        {requests?.length > 1 && (
          <div className="mt-8 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
            <div className="flex items-center justify-between">
              <p className="text-slate-400 text-sm">
                Select multiple requests to manage in bulk
              </p>
              <div className="flex space-x-3">
                <button className="px-4 py-2 text-green-400 hover:text-green-300 hover:bg-green-500/10 rounded-lg transition-colors duration-200 text-sm font-medium">
                  Accept All
                </button>
                <button className="px-4 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors duration-200 text-sm font-medium">
                  Reject All
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestCard;
