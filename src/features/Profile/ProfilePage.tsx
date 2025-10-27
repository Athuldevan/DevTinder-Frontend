import { useSelector } from "react-redux";
import EditForm from "../../components/EditProfile/EditForm";
import { RootState } from "../../../store";
import FeedCard from "../../components/Feed/FeedCard";
import { axiosInstance } from "../../lib/axios";

export default function ProfilePage() {
  const { user } = useSelector((store: RootState) => store.auth);
  console.log(user);
  if (!user) return <p>Loading user...</p>;
return (
    <div className="flex justify-center items-center m-7 p-3">
      <EditForm user={user} />
      <FeedCard user={user} />
    </div>
  );
}
