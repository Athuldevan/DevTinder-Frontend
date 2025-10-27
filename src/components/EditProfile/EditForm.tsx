import { useState } from "react";
import { axiosInstance } from "../../lib/axios";
import useEditProfile from "../../features/Profile/hooks/useEditProfile";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/Auth/slices/AuthSlice";
interface User {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  about: string;
  photoUrl: string;
  _id: string;
}
interface EditFormProps {
  user: User;
}
export default function EditForm({ user }: EditFormProps) {
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [age, setAge] = useState(user?.age);
  const [gender, setGender] = useState(user?.gender);
  const [about, setAbout] = useState(user?.about);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const dispatch = useDispatch();

  const { mutate, isPending, isSuccess, isError } = useEditProfile();

  function handleSave(e: React.FormEvent) {
    e.preventDefault();

    const updatedData = {
      firstName,
      lastName,
      age,
      gender,
      about,
      photoUrl,
    };

    mutate({ id: user._id, updateData: updatedData });
    dispatch(loginUser(updatedData));
  }

  return (
    <>
      <div className="hero bg-base-500 min-h-screen p-4">
        <div className="hero-content flex-col lg:flex-row-reverse p-2">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-2">
            <div className="card-body p-7">
              {/* First Name */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">First Name</legend>
                <input
                  type="text"
                  value={firstName}
                  className="input input-xl"
                  placeholder="Type here"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </fieldset>
              {/* Last Name */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Last Name</legend>
                <input
                  type="text"
                  value={lastName}
                  className="input input-xl"
                  placeholder="Type here"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </fieldset>
              {/* Age  */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Age</legend>
                <input
                  type="number"
                  value={age}
                  className="input input-xl"
                  placeholder="Type here"
                  onChange={(e) => setAge(+e.target.value)}
                />
              </fieldset>

              {/* Gender  */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Gender</legend>
                <input
                  type="text"
                  value={gender}
                  className="input input-xl"
                  placeholder="Type here"
                  onChange={(e) => setGender(e.target.value)}
                />
              </fieldset>

              {/* About  */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">About</legend>
                <input
                  type="text"
                  value={about}
                  className="input input-xl"
                  placeholder="Type here"
                  onChange={(e) => setAbout(e.target.value)}
                />
              </fieldset>
              {/* Photo-Url  */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Photo</legend>
                <input
                  type="text"
                  value={photoUrl}
                  className="input input-xl"
                  placeholder="Type here"
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
              </fieldset>
              {/* Save Button */}
              <button
                onClick={handleSave}
                className="btn btn-primary btn-block btn-active"
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
