import useEditProfile from "../../features/Profile/hooks/useEditProfile";

interface EditFormUser {
  firstName: string;
  lastName: string;
  age: number;
  gender?: string;
  about?: string;
  photoUrl?: string;
  _id: string;
}

interface PreviewData {
  firstName: string;
  lastName: string;
  age: number;
  gender?: string;
  about?: string;
  photoUrl?: string;
}

interface EditFormProps {
  user: EditFormUser;
  previewData: PreviewData;
  setPreviewData: React.Dispatch<React.SetStateAction<PreviewData>>;
}

export default function EditForm({ user, previewData, setPreviewData }: EditFormProps) {
  const { mutate, isPending, isSuccess, isError } = useEditProfile();


  function handleSave(e: React.FormEvent) {
    e.preventDefault();

    const updatedData = {
      firstName: previewData.firstName,
      lastName: previewData.lastName,
      age: previewData.age,
      gender: previewData.gender,
      about: previewData.about,
      photoUrl: previewData.photoUrl,
    };

    mutate({ id: user._id, updateData: updatedData });
  }

  // Update handlers that modify preview data in real-time
  const handleFirstNameChange = (value: string) => {
    setPreviewData((prev) => ({ ...prev, firstName: value }));
  };

  const handleLastNameChange = (value: string) => {
    setPreviewData((prev) => ({ ...prev, lastName: value }));
  };

  const handleAgeChange = (value: number) => {
    setPreviewData((prev) => ({ ...prev, age: value }));
  };

  const handleGenderChange = (value: string) => {
    setPreviewData((prev) => ({ ...prev, gender: value }));
  };

  const handleAboutChange = (value: string) => {
    setPreviewData((prev) => ({ ...prev, about: value }));
  };

  const handlePhotoUrlChange = (value: string) => {
    setPreviewData((prev) => ({ ...prev, photoUrl: value }));
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
                  value={previewData.firstName}
                  className="input input-xl"
                  placeholder="Type here"
                  onChange={(e) => handleFirstNameChange(e.target.value)}
                />
              </fieldset>
              {/* Last Name */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Last Name</legend>
                <input
                  type="text"
                  value={previewData.lastName}
                  className="input input-xl"
                  placeholder="Type here"
                  onChange={(e) => handleLastNameChange(e.target.value)}
                />
              </fieldset>
              {/* Age  */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Age</legend>
                <input
                  type="number"
                  value={previewData.age}
                  className="input input-xl"
                  placeholder="Type here"
                  onChange={(e) => handleAgeChange(+e.target.value)}
                />
              </fieldset>

              {/* Gender  */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Gender</legend>
                <input
                  type="text"
                  value={previewData.gender}
                  className="input input-xl"
                  placeholder="Type here"
                  onChange={(e) => handleGenderChange(e.target.value)}
                />
              </fieldset>

              {/* About  */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">About</legend>
                <input
                  type="text"
                  value={previewData.about}
                  className="input input-xl"
                  placeholder="Type here"
                  onChange={(e) => handleAboutChange(e.target.value)}
                />
              </fieldset>
              {/* Photo-Url  */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Photo</legend>
                <input
                  type="text"
                  value={previewData.photoUrl}
                  className="input input-xl"
                  placeholder="Type here"
                  onChange={(e) => handlePhotoUrlChange(e.target.value)}
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
