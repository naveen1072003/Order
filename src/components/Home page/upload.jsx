import axios from "axios";
import { useEffect, useState } from "react";

function Imagesrc() {
  const [image, setImage] = useState({
    file: null
  });

  const [retrievedImage, setRetrievedImage] = useState(null);

  useEffect(() => {
    // Fetch the image from the backend when the component mounts
    fetchImage();
  }, []);

  const fetchImage = async () => {
    try {
      const response = await axios.get("http://localhost:8080/sample/getImage");
      // console.log(response.data);
      setRetrievedImage(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const apiCall = async () => {
    try {
      const formData = new FormData();
      formData.append("file", image.file);
      // formData.append("name", image.name); // Include the name field
  
      await axios.post("http://localhost:8080/sample/uploadImage", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  function Onchange(e) {
    setImage({
      file: e.target.files[0]
    });
  }

  console.log(image);
  return (
    <div className="">

      {/* <img src={retrievedImage} alt="logo" /><br/> */}
      <input type="file" name="file" id="" onChange={Onchange} />
      <br />
      <input type="text" name="name" id="" onChange={Onchange} />
      <br />
      <button type="submit" onClick={apiCall}>
        Submit
      </button>
    </div>
  );
}

export default Imagesrc;