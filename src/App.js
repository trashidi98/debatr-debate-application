import logo from './logo.svg';
import {ChatEngine, ChatEngineWrapper, ChatSocket, getChat, Socket} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';
import './testpages/HomePage.js'
import HomePage from './testpages/HomePage';
import { Col } from 'react-grid-system';
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.chatengine.io/chats/',
  headers: { 
    'Project-ID': '6e568c29-44d2-4cb3-805c-5320fc680e65', 
    'User-Name': 'saima', 
    'User-Secret': '123'
  }
};

function getChats() {
  axios(config)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}



const App = props => {

  if (!localStorage.getItem('username')) return <LoginForm />;
  const id = 109900
  const accesskey = "ca-4feb7e6a-c707-4c11-85a9-63ce97eae153"
  const username = "tabish"
  

  return (
    <div>
        <ChatEngineWrapper>
      <Socket
        projectID="6e568c29-44d2-4cb3-805c-5320fc680e65"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
      />
      <ChatFeed activeChat={id}/>
    </ChatEngineWrapper>
    </div>
)
}

export default App;
