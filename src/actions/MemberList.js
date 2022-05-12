import * as api from '../api/ApiIndex.js';
import React from 'react';

function setToken(userToken) {
    sessionStorage.setItem('member', JSON.stringify(userToken));
}

export const getMembersBySearch = (searchQuery) => async (dispatch) => {
    try {
        api.fetchMembersBySearch(searchQuery)
        .then(({data: {data}}) => {
            if(data){
                //console.log(data);
                alert("Found a member, directing to /service-request/member");
                setToken(data); 
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