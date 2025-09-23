import React, { useEffect, useState } from "react";
import axios from "axios";
import Curvedcard from "../../Cards/Curvedcard";
import { CircularProgress, Box } from "@mui/material";
import cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Abumlist = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const baseUrl = process.env.REACT_APP_BASE_URL;
  console.log("Base URL:", baseUrl);
  const token = cookies.get("token");
  const role = cookies.get("role");


    const fetchData = async () => {
    
      try {
        const response = await axios.get(`${baseUrl}/api/album/getall`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setData(response.data.data);
        console.log("list");
        // Adjust this to match the data structure returned by the API
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        alert("something want wrong" + error.message);
      }
    };

  useEffect(() => {

      if (!token || (role !== "admin" && role !== "superadmin")) {
        navigate("/admin/login");
        alert("For View Login First");
      }
  

    fetchData();
  }, [baseUrl , token,role,navigate]);

  console.log("iam thhd dtat", data);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <CircularProgress />
      </Box>
    );
  }
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Curvedcard Albums={data} refetch={fetchData} />
    </div>
  );
};

export default Abumlist;
