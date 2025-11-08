import useFeedQuery from "../../features/feed/hooks/useFeedQuery";
import Loading from "../ui/Loading";

export interface User {
  firstName: string;
  lastName: string;
  age: number;
  skills?: string[];
  photoUrl?: string;
  gender?: string;
  about?: string;
  _id?: string;
  emailId?: string;
}

interface UserCardProps {
  user: User;
}

export default function Feed({ user }: UserCardProps) {
  console.log(user);
  const { mutation } = useFeedQuery();
  const { mutate, isPending } = mutation;
  if (isPending) return <Loading />;
  if (!user) {
    return (
      <div className="flex justify-center items-center text-2xl text-gray-500">
        <h6>You Visited all Users..<br/>No New Users Available right now.</h6>
      </div>
    );
  }
  return (
    <>
      <div className="card bg-gray-900 w-96 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-700 rounded-3xl overflow-hidden">
        <figure className="relative">
          <img
            src={user.photoUrl || "/default-avatar.png"}
            alt={user?.firstName}
            className="w-full h-72 object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
        </figure>

        <div className="card-body p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">
              {`${user?.firstName} ${user?.lastName}`}
            </h2>
            <div className="flex justify-center items-center gap-4 text-sm text-gray-300">
              <span className="bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
                {user?.age || "N/A"} years
              </span>
              <span>•</span>
              <span>{user?.gender || "N/A"}</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-5 mb-6 border border-gray-700">
            <p className="text-gray-200 text-center leading-relaxed font-medium">
              {user?.about || "No bio available"}
            </p>
          </div>

          {user?.skills && user?.skills?.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-white mb-3 text-center text-sm uppercase tracking-wide">
                Expertise
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {user?.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="card-actions justify-center mt-4 gap-4">
            <button
              className="btn bg-gray-800 text-gray-200 border-2 border-gray-600 px-10 py-4 font-semibold rounded-xl hover:bg-gray-700 hover:border-gray-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => mutate({ status: "ignored", toUserId: user?._id })}
            >
              Ignore
            </button>
            <button
              onClick={() =>
                mutate({ status: "interested", toUserId: user?._id })
              }
              className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 font-semibold rounded-xl hover:from-blue-500 hover:to-purple-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0"
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
