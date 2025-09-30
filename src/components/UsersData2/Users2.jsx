import React, { use } from 'react';


const Users2 = ({users2Data}) => {
    const users2 = use(users2Data);
    console.log("this data is users2",users2)
    return (
        <div>
            <h1>Hello i am User2 data</h1>
           
        </div>
    );
};

export default Users2;