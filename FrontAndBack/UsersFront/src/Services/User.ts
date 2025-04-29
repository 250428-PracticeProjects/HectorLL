import { User } from '../Models/User';
const API_BASE_URL = 'http://localhost:8080';

export const getUsersDB = async () => {
    return await fetch(`${API_BASE_URL}/Users`,{
        method:'GET',
    })
};

export const createUser = async (user:User) => {
    return await fetch(`${API_BASE_URL}/User`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
});
}


export const getUserByIdDB = async (id: number) => {
    return await fetch (`${API_BASE_URL}/User/${id}`,{
        method:'GET',
    })
}

export const updateUser = async (user:User)=>{
    return await fetch (`${API_BASE_URL}/User`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
    })
}

export const deleteUser = async (id:number)=>{
    return await fetch(`${API_BASE_URL}/User/${id}`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    })

}