import  { useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
    const [job, setJob] = useState({
        title: '',
        description: '',
        location: '',
        salary: '',
        contact_email: '',
    });

    const handleChange = (e) => {
        setJob({ ...job, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //eslint-disable-next-line
            const response = await axios.post('http://localhost:3000/jobs', job);
            alert('Job added successfully!');
        } catch (error) {
            console.error('Error adding job:', error.message);
        }
    };

    return (
        <div>
            <h2>Add Job</h2>
            <form onSubmit={handleSubmit}>
                <input name="title" placeholder="Job Title" onChange={handleChange} required />
                <textarea name="description" placeholder="Job Description" onChange={handleChange} required />
                <input name="location" placeholder="Location" onChange={handleChange} required />
                <input name="salary" placeholder="Salary" type="number" onChange={handleChange} required />
                <input name="contact_email" placeholder="Contact Email" type="email" onChange={handleChange} required />
                <button type="submit">Add Job</button>
            </form>
        </div>
    );
};

export default AdminPanel;
