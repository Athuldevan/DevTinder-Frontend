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
  const { mutation } = useFeedQuery();
  const { mutate, isPending } = mutation;
  if (isPending) return <Loading />;
  return (
    <>
      <div className="card bg-base-200 w-96 shadow-sm ">
        <figure>
          <img
            src={user.photoUrl || "/default-avatar.png"}
            alt={user.firstName}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{`${user.firstName} ${user.lastName}`}</h2>
          <p>{`${user?.age || "N/A"}, ${user?.gender || "N/A"}`}</p>
          <p>{user.about || "No bio available"}</p>
          <div className="card-actions justify-center">
            <button
              className="btn btn-primary p-1"
              onClick={() => mutate({ status: "ignored", toUserId: user?._id })}
            >
              Ignore
            </button>
            <button
              onClick={() =>
                mutate({ status: "interested", toUserId: user?._id })
              }
              className="btn btn-secondary p-1"
            >
              Intrested
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
