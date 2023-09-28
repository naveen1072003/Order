import axios from "axios";
import { useEffect, useState } from "react";

function Imagesrc() {
  const [image, setImage] = useState({
    file: null
  });

  const [dataUri, setRetrievedImage] = useState(null);


  const fetchImage = async () => {
    try {
      const response = await axios.get("http://localhost:8080/sample/getImage");
      const { imageData } = response.data; // Assuming the response contains image data as a byte array

      // Create a Blob from the byte array
      const blob = new Blob([imageData], { type: "image/jpeg" }); // Specify the MIME type

      // Create a data URI from the Blob
      const dataUri = URL.createObjectURL(blob);

      // Set the data URI in the state
      setRetrievedImage(dataUri);
      console.log(dataUri);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

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
      <img src={dataUri} alt="logo" width={20} height={100} />
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
