import { lazy, Suspense } from "react";
import Loading from "../../../components/ui/Loading";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
const FeedCard = lazy(() => import("../../../components/Feed/FeedCard"));
export default function FeedPage() {
  const { isLoggedIn } = useSelector((store: RootState) => store.auth);
  return (
    <>
      <Suspense fallback={<Loading />}>
        <FeedCard />
      </Suspense>
    </>
  );
}
