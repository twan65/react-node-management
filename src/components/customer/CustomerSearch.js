// import { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";

const CustomerListModel = {
    'customers': [
        {
            'id': 1,
            'image':'https://placeimg.com/64/64/any',
            'name':'Antaewoong1',
            'birthday':'19900605',
            'gender':'男性',
            'job':'エンジニア'
        },
        {
            'id': 2,
            'image':'https://placeimg.com/64/64/any',
            'name':'Antaewoong2',
            'birthday':'19900605',
            'gender':'男性',
            'job':'エンジニア'
        },
        {
            'id': 3,
            'image':'https://placeimg.com/64/64/any',
            'name':'Antaewoong3',
            'birthday':'19900605',
            'gender':'男性',
            'job':'エンジニア'
        },
    ]
};


const CustomerSearch = () => {
    // const [searchResult, setSearchResult] = useState<any>(CustomerListModel);

    // useEffect(() => {
        
    // }, []);

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
                    {CustomerListModel.customers.map(e => 
                        <TableRow>
                            <TableCell>{e.id}</TableCell>
                            <TableCell><img src={e.image} alt="profile"></img></TableCell>
                            <TableCell>{e.name}</TableCell>
                            <TableCell>{e.birthday}</TableCell>
                            <TableCell>{e.gender}</TableCell>
                            <TableCell>{e.job}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            {/* <Link to={"/customer/" + 1}>リンク</Link> */}
        </>
    );
}

export default CustomerSearch;
