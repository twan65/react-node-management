import { useEffect, useState } from "react";

import { Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";

const CustomerSearch = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        callApi()
        .then(res => setUsers(res))
        .catch(err => console.log(err));
    }, []);

    const callApi = async () => {
       const res = await fetch('/api/v1/users');
       const body = await res.json();
       return body;
    };

    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>番号</TableCell>
                        <TableCell>プロフィール画像</TableCell>
                        <TableCell>名前</TableCell>
                        <TableCell>生年月日</TableCell>
                        <TableCell>性別</TableCell>
                        <TableCell>ポジション</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(users.length) ? users.map(e => 
                        <TableRow key={e.id}>
                            <TableCell>{e.id}</TableCell>
                            <TableCell><img src={e.image} alt="profile"></img></TableCell>
                            <TableCell>{e.name}</TableCell>
                            <TableCell>{e.birthday}</TableCell>
                            <TableCell>{e.gender}</TableCell>
                            <TableCell>{e.job}</TableCell>
                        </TableRow>
                    ) : ""}
                </TableBody>
            </Table>
            {/* <Link to={"/customer/" + 1}>リンク</Link> */}
        </>
    );
}

export default CustomerSearch;
