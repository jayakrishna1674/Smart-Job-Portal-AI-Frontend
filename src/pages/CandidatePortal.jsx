import { useState, useEffect } from "react";
import axios from "axios";
import Chatbot from "../components/Chatbot";
import { Link } from "react-router-dom";

const CandidatePortal = () => {
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/jobs?location=${query}`
        );
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error.message);
      }
    };
    fetchJobs();
  }, [query]);

  return (
    <div>
      <h2>Find Jobs</h2>
      <input
        placeholder={"Search by location"}
        value={query}
        onChange={(e) => {
          setTimeout(() => {}, 5000);
          setQuery(e.target.value);
        }}
      />
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            {job.title} - {job.location}
          </li>
        ))}
      </ul>
      <Link to={"/"}>
        <span>Go to Home !!</span>
        </Link>
      <Chatbot />
    </div>
  );
};

export default CandidatePortal;
