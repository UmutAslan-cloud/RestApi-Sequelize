import {
    v4 as uuidv4
} from 'uuid';

let users = [

]
 export const createUser=(req, res) => {
    const user = req.body;

    const userWithId = {
        ...user,
        id: uuidv4()
    }

    users.push(userWithId)
    res.send(`User with name ${user.name} added the database`)
}

export const getUsers=(req, res) => {
    /*     console.log(users); */
    res.send(users);
}

export const getUserbyId=(req,res)=>{
    const {id}=req.params;
   const foundUser= users.find((user)=>user.id===id)
    res.send(foundUser);
}

export const deleteUser=(req,res)=>{
    const {id}=req.params;
    users=users.filter((user)=>user.id!=id)
    res.send(`User with the ${id} deleted`)
}

export const UpdateUser=(req,res)=> {
    const {id}=req.params;
    const {name,lastName,age}=req.body;
    const user=users.find((user)=>user.id===id);
    if(name)
        user.name=name; 
    if(lastName)
        user.lastName=lastName; 
    if(age)
        user.age=age;
    
res.send(`user with the id ${id} changed`)
    

}