import { UserResponseDTO } from "../../models/User";

const UserInfo = ({ data }: { data: UserResponseDTO }) => {
    return (
        <div>
            <h2>{data.id}</h2>
            <p>{data.birthday}</p>
            <p>{data.gender}</p>
            <p>{data.position}</p>
        </div>
    );
}

export default UserInfo;

