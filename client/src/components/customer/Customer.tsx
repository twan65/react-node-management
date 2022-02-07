import CustomerInfo from "./CustomerInfo";
import CustomerProfile from "./CustomerProfile";

import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

import Api from "../../common/api/Api";
import { GetUser } from "../../common/api/ApiOptions";

const Customer = () => {
    let { user_id } = useParams();
    let history = useHistory();

    const [users, setUsers] = useState<any[]>([]);
    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        const res = await Api.request(new GetUser());
        setUsers(res.data)
        return res.data;
    };

    return (
        <div>
            <CustomerProfile/>
            <CustomerInfo/>
        </div>
    );
}

export default Customer;
