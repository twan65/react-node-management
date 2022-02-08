import UserInfo from "./UserInfo";
import UserProfile from "./UserProfile";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Api from "../../common/api/Api";
import { GetUser } from "../../common/api/ApiOptions";

const User = () => {
    let objectID = useParams();
    // let history = useHistory();

    const [users, setUsers] = useState<any[]>([]);
    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        const res = await Api.request(new GetUser().setId(objectID.id));
        setUsers(res.data)
        return res.data;
    };

    return (
        <div>
            <UserProfile/>
            <UserInfo/>
        </div>
    );
}

export default User;
