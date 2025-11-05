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
  console.log(feed)
  if (isLoading) return <Loading />;
  if (isError) return <p>Something went wrong while fetching</p>;
  return (
    <div className="flex justify-center items-center p-16">
      <FeedCard user = {feed[0]}/>
    </div>
  );
};

export default FeedPage;
