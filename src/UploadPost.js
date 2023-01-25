import React from "react" 
import { Link} from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

function UploadPost(){
    const [name, setUsername] = React.useState('')
    const [address , setAddress] = React.useState('')
    const [image, setImageFile] = React.useState('') ;
    const [description, setDescritpion] = React.useState(""); 

        const formData = new FormData();
        // Map => takes the data in the key value format 
        formData.append("name", name)
        formData.append("address", address)
        formData.append("image", image)
        formData.append("description", description)
        async function handleClick(){
          await fetch("https://vkgoldy.onrender.com/api", {
            method: 'POST',
            body: formData
        })
        }

    const styles = {
      container: { height: "300px" , justifyContent:'space-evenly', width: "400px", display: "flex", flexFlow: 'column wrap' }
    }

    return (
        <div className="form-page" style={styles.container}>
            <input className="form-name" placeholder="Username" value={name}  onChange={(e) => setUsername(e.target.value)}/>
            <input className="form-address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}/>
            <input className="form-file" type="file" onChange={(e) => {
                setImageFile(e.target.files[0]) ;
            }} />
            <textarea value={description} placeholder="Description" onChange={(e) => setDescritpion(e.target.value)}>
            </textarea>
            <Link to='/postview'>
              <button className="form-button" onClick={handleClick} >Submit</button>
            </Link>
        </div>
    );
}

export default UploadPost;