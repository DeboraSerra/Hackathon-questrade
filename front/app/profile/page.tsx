import Spinner from "@/components/CommonLayout/Spinner";
import EditProfile from "@/components/EditProfile";
import { Suspense } from "react";

const Profile = () => {
  return (
    <div className="flex items-center justify-center">
      <Suspense fallback={<Spinner />}>
        <EditProfile />
      </Suspense>
    </div>
  );
};

export default Profile;
