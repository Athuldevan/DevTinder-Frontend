import FeedCard from "../../../components/Feed/FeedCard";
import Loading from "../../../components/ui/Loading";
import useFeedQuery from "../hooks/useFeedQuery";

interface User {
  firstName: string;
  lastName: string;
  age: number;
  skills: string[];
  photoUrl: string;
  gender: string;
  about: string;
}

const FeedPage = () => {
  const { feed, isLoading, isError } = useFeedQuery();
  console.log(feed);
  
  if (isLoading) return <Loading />;
  
  if (isError)
    return (
      <div className="border border-gray-700 rounded-2xl p-8 text-center bg-gray-800 shadow-lg">
        <div className="text-gray-500 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <p className="text-gray-300 text-lg font-medium">No new users to show</p>
        <p className="text-gray-500 text-sm mt-2">You're all caught up with available connections</p>
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl font-medium hover:from-purple-600 hover:to-indigo-600 transition-all">
          Refresh Feed
        </button>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center p-4 lg:p-8">
      <div className="w-full max-w-md">
        {/* Feed Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Discover Developers</h2>
          <p className="text-gray-400">Swipe right to connect with amazing developers</p>
        </div>

        {/* Feed Card Container */}
        <div className="relative">
          <FeedCard user={feed[0]} />
          
          {/* Feed Navigation Hint */}
      
        </div>

        {/* Feed Stats */}
        <div className="mt-12 grid grid-cols-3 gap-4 text-center">
          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <div className="text-2xl font-bold text-purple-400">{feed?.length || 0}</div>
            <div className="text-gray-400 text-sm">Available</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FeedPage;