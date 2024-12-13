import axios from '../http/axios';
import qs from 'querystring';

function generateUserParams(filterSortPage,filter) {
    let serverQueryObj = {};
    if( filterSortPage !== null ) {
        if(filterSortPage.hasOwnProperty('page')) {
            serverQueryObj.page = filterSortPage.page + 1;
        }
        if(filterSortPage.hasOwnProperty('rows')) {
            serverQueryObj.rows = filterSortPage.rows;
        }
        if(filterSortPage.sortField !== null) {
            serverQueryObj.sortField = filterSortPage.sortField;
            serverQueryObj.sortOrder = filterSortPage.sortOrder === 1 ? 'asc':'desc';
        }

    }
    if(Object.keys(filter).length === 0) {
        if(filterSortPage !== null) {
            if(filterSortPage.hasOwnProperty('filters')) {
                if(filterSortPage.filters.global !== '') {
                    serverQueryObj.globalSearch = filterSortPage.filters.global;
                }
            }
        }

    } else {
        if(filter.global !== '') {

            serverQueryObj.globalSearch = filter.global;
        }

    }

    return serverQueryObj;
}


export default class UserService {
    async getUserDatatable(filterSortPage,filter) {
        let serverQueryObj =  generateUserParams(filterSortPage,filter);
        // let serverQueryString = qs.stringify();
        const response = await axios.get('user/datatable',{
            params:serverQueryObj
        });
        return response.data.payload;
    }

    async getUser(userId) {
        // let queryObj = {
        //     user_id:userId
        // }
        const response = await axios.get(`user/${userId}`);
        return response.data.payload;

    }

    async addUser(payload) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }

            let addUserData = {
                'first_name': payload.first_name,
                'last_name': payload.last_name,
                'role': payload.role,
                'email': payload.email,
                'password': payload.password
            }
            const response = await axios.post('user/add', qs.stringify(addUserData), config);
            return response.data.message;
        } catch (e) {
            console.log(e.response);
            throw new Error(e.response.data.message);
        }
    }

    async updateUser(payload,userId) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }

            let addUserData = {
                'first_name': payload.first_name,
                'last_name': payload.last_name,
                'role': payload.role,
                'email': payload.email,
                'password': payload.password
            }
            const response = await axios.patch(`user/${userId}`, qs.stringify(addUserData), config);
            return response.data.message;
        } catch (e) {
            console.log(e.response);
            throw new Error(e.response.data.message);
        }
    }

    async deleteUser(userId)
    {
        try {
            const response = await axios.delete(`user/${userId}`);
            return response.data.message;
        } catch (e) {
            throw new Error(e.response.data.message);
        }

    }




}
