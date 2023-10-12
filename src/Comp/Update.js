import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem('alluser'));
    const userEdit = allUsers.find(user => user.id === parseInt(id));
    if (userEdit) {
      setFormData(userEdit);
    }

  }, [id])


  const handleEdit = () => {
    // const updatedUser = [...formData]
    const allUsers = JSON.parse(localStorage.getItem('alluser')) || [];
    console.log('allUsers:', allUsers);
    const updatedUsers = allUsers.map((user) =>
      user.id === parseInt(id) ? formData : user
    );
    localStorage.setItem('alluser', JSON.stringify(updatedUsers));
    navigate('/');
  }

  return (
    <div className='container mx-auto'>
      <form>
        <div className='col'>
          <input type="number" className="form-control" placeholder="id" aria-label="Id" value={formData.id} onChange={(e) => { setFormData({ ...formData, id: e.target.value }) }}/>
        </div>
        <div className='col'>
          <input type="text" className="form-control" placeholder="name" aria-label="name" value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }}/>
        </div>
        <div className='col'>
          <input type="text" className="form-control" placeholder="username" aria-label="name" value={formData.username} onChange={(e) => { setFormData({ ...formData, username: e.target.value }) }}/>
        </div>
        <div className='col'>
          <input type="email" className="form-control" placeholder="email" aria-label="Email" value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} />
        </div>

      </form>
      <button className='btn btn-primary' onClick={handleEdit}>Save Changes</button>
      <Link to="/">Back</Link>
    </div>
  )
}

export default Update;