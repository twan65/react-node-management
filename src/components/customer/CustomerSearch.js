import { useEffect, useState } from "react";
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
    const [searchResult, setSearchResult] = useState<any>(CustomerListModel);

    useEffect(() => {
        
    }, []);

    return (
        <div>
        </div>
    );
}

export default CustomerSearch;
