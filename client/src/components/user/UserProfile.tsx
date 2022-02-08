import { UserResponseDTO } from "../../models/User";

const UserProfile = ({ data }: { data: UserResponseDTO }) => {
    return (
        <>
            <img src={data.image} alt="profile"/>
        </>
    );
}

export default UserProfile;

