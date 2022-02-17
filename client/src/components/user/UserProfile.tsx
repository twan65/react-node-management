import { UserResponseDTO } from "../../models/User";

const UserProfile = ({ data }: { data: UserResponseDTO }) => {
  return (
    <>
      <img src={data.image_path} alt="profile" />
    </>
  );
};

export default UserProfile;
