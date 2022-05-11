import * as api from '../api/ApiIndex.js';
import React from 'react';
import { Navigate } from 'react-router-dom';

export const getMembersBySearch = (searchQuery) => async (dispatch) => {
    try {
        api.fetchMembersBySearch(searchQuery)
        .then(({data: {data}}) => {
            if(data){
                //console.log(data);
                alert("Found a member, directing to /service-request/member");
                test(data.phoneNumber);
            } else {
                alert("No member found");
            }
        })
        .catch((err) => {
            console.log(err);
        })
    } catch (error) {
        console.log(error);
    }
}

const test = (dataTest) => {
    console.log(dataTest);

    return (
        <Navigate to='/service-request/member'/>
        //<Navigate to={{pathname: '/service-request/member',
        //state: {phoneNumber: dataTest}}}/>
        //window.location.href = '/service-request/member';
    );
}

export {test as default};