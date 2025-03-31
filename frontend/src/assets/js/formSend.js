import axios from "axios";

const formSend = async(data, route, method, setNotify) => {
    try{
      const response = (method === "get") ?
      await axios.get(`${import.meta.env.VITE_REACT_SERVER_URL}${route}`, data, {
        headers: {
            'Content-Type': 'multipart/form-data', // Inform the server about the content type
        },
      })
      :
      await axios.post(`${import.meta.env.VITE_REACT_SERVER_URL}${route}`, data, {
        headers: {
            'Content-Type': 'multipart/form-data', // Inform the server about the content type
        },
      })
      ;
      console.log(response.data);
      setNotify("File uploaded successfully");
    }
    catch (e) {
      let msg;
      // Enhanced error handling
      if (e.response) {
        // Server responded with a status code other than 2xx
        msg = `Error ${e.response.status}: ${e.response.data || "Server error"}`;
      } else if (e.request) {
        // Request was made but no response received
        msg = "No response received from server";
      } else {
        // Something else caused the error
        msg = ("Error:", e.message)
      }
      console.log(msg);
      setNotify(msg);
    }  
}

export default formSend;