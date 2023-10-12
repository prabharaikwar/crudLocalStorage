import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Create = () => {
    const [formData, setFormData] = useState({
        "id" : '',
        "name":'',
        "username":'',
        "email":''
    })
    let data = JSON.parse(localStorage.getItem('alluser'))|| []; 
    const [users, setUsers]= useState(data)    
    const navigate = useNavigate();
    

     const handleSubmit=()=>{
        // debugger;
             
        const newAllUsers = [...users, formData];
         localStorage.setItem('alluser', JSON.stringify(newAllUsers));              

             setUsers(newAllUsers)  
            //  setFormData({           
            //     id: '',
            //     name: '',
            //     username: '',
            //     email: ''
            // });
        console.log(newAllUsers,'new user has been added')
        navigate('/')

    }

 const FormDataField =(fieldName,value)=>{     
   setFormData((prev)=>({...prev,[fieldName]:value})) 
   
 } 

  return (
    <div className='container mx-auto'>
        <form className=' '>
            <div className='col'>
            <input type="number" className="form-control" placeholder="id" aria-label="Id" value={formData.id} onChange={(e)=>{FormDataField("id" ,e.target.value )}}/>
            </div>
            <div className='col'>
            <input type="text" className="form-control" placeholder="name" aria-label="Name" value={formData.name} onChange={(e)=>{FormDataField("name" ,e.target.value )}}/>
            </div>
            <div className='col'>
            <input type="text" className="form-control" placeholder="username" aria-label="User name" value={formData.username} onChange={(e)=>{FormDataField("username" ,e.target.value )}}/>
            </div>
            <div className='col'>
            <input type="email" className="form-control" placeholder="email" aria-label="Email" value={formData.email} onChange={(e)=>{FormDataField("email" ,e.target.value )}}/>
            </div>
        </form>
        <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Create