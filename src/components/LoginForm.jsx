import { useState } from 'react';
import axios from 'axios';

const projectID = '6e568c29-44d2-4cb3-805c-5320fc680e65';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };
    
    try {

        // post request to create user
        axios.post(
            "https://api.chatengine.io/users/",
            {'username': username, 'secret': password}, // Body object
            {'headers': {'PRIVATE-KEY': 'd2d99c2c-795d-4825-b388-d96a85e05185'}} // Headers object
          )
          .then(r => console.log(r))

        // get all chats of the user 
        await axios.get('https://api.chatengine.io/chats', { headers: authObject });

        // save login info of the user
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)

        window.location.reload()
     } catch (error) {
         console.log(error)
         setError('Incorrect credentials, try again')
     }
};

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Debating</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default Modal;