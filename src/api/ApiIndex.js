import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchMembersBySearch = (searchQuery) => API.get(
`/subscribed-members/search?searchFirstName=${searchQuery.searchFirstName}
&searchLastName=${searchQuery.searchLastName}
&searchPhoneNumber=${searchQuery.searchPhoneNumber}`);