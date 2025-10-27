import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import EditForm from "../../components/EditProfile/EditForm";
import { RootState } from "../../../store";
import FeedCard, { User as FeedCardUser } from "../../components/Feed/FeedCard";

interface PreviewData {
  firstName: string;
  lastName: string;
  age: number;
  gender?: string;
  about?: string;
  photoUrl?: string;
}

export default function ProfilePage() {
  const { user } = useSelector((store: RootState) => store.auth);
  
  // Local state for live preview
  const [previewData, setPreviewData] = useState<PreviewData>({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    age: user?.age || 0,
    gender: user?.gender,
    about: user?.about,
    photoUrl: user?.photoUrl,
  });

  // Update preview when Redux user changes (after save)
  useEffect(() => {
    if (user) {
      setPreviewData({
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        gender: user.gender,
        about: user.about,
        photoUrl: user.photoUrl,
      });
    }
  }, [user]);

  if (!user) return <p>Loading user...</p>;

  // Merge user data with preview data for live updates in FeedCard
  const mergedUserData = {
    ...user,
    ...previewData,
  } as FeedCardUser;

  return (
    <div className="flex justify-center items-center m-7 p-3">
      <EditForm user={user as any} previewData={previewData} setPreviewData={setPreviewData} />
      <FeedCard user={mergedUserData} />
    </div>
  );
}
