import { useNavigate, useParams } from "react-router-dom"
import { getUserByIdDB, updateUser } from "../Services/User";
import { useEffect, useState } from "react";
import { User } from "../Models/User";

export const EditUser = () => {
    const {id} = useParams();
    const [user,setUser] = useState<User>();
    const [name,setName] = useState<string>('');    
    const [lastName,setLasname] = useState<string>('');    
    const [age,setAge] = useState<string>('');    
    const navigate = useNavigate();

    
    
    useEffect(()=>{
        const fetchetuserbyId = async () =>{
            try{
                const response = await getUserByIdDB(Number(id));
                const userData : User = await response.json();
                setName(userData.name);
                setLasname(userData.lastName);
                setAge(userData.age.toString());
            }catch(error){
                console.error("Error fetching user "+error);
            }
        }

       
        
        if(id){
            fetchetuserbyId();
        }
    }
    ,[]);

    const handleCLick = async() =>{
        try{
            const updatedUser : User = {
                idUser:Number(id),
                name:name,
                lastName:lastName,
                age:Number(age)
            };
            const response = await updateUser(updatedUser!);
            if(response.ok){
                alert("Updated successfully");
                navigate('/');
            }else{
                alert("Error updating user");
            }

        }catch(error){
            console.error("Error updating user "+error);
        }
    }
    const handleNameChane = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setName(event.target.value);
    }

    const handleLastNameChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setLasname(event.target.value);
    }

    const handleAgeChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.value);
    }
    
    // if(id){
    //     const getuserbyId = async (idUser) =>{
    //         try{
    //             const response = await getUserByIdDB(idUser!);
    //             setUser (await response.json());
    //         }catch(error){
    //             console.error("Error fetching user "+error);
    //         }
    //     }
    //     console.log(1)
    //     getuserbyId(id);
    // }
  return (
    <>
    <h2>Update User</h2>
    <input type="text" className="form-control" value={name} onChange={handleNameChane}/>
    <input type="text" className="form-control" value={lastName} onChange={handleLastNameChange}/>
    <input type="text" className="form-control" value={age} onChange={handleAgeChange}/>
    <button className="btn btn-primary" onClick={handleCLick}>Update</button>
    </>
  )
}
