import { useEffect, useState } from "react";
import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/jobs");
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error.message);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Location</th>
            <th>Salary</th>
            <th>Contact Email</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.description}</td>
              <td>{job.location}</td>
              <td>{job.salary}</td>
              <td>{job.contact_email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobList;
