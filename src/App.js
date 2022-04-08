import logo from './logo.svg';
import {ChatEngine, ChatEngineWrapper, Socket, getChat, ChatList, ChatSocket, ChatFeed} from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import './App.css';
import './testpages/HomePage.js'
import HomePage from './testpages/HomePage';
import Stack from '@mui/material/Stack'
import { Box } from '@mui/material';
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



const App = () => {

  if (!localStorage.getItem('username')) return <LoginForm />;
  var id = 109900
  var accesskey = "ca-4feb7e6a-c707-4c11-85a9-63ce97eae153"
  var username = "tabish"

  return(
    <div>
    <ChatEngine
      height="100vh"
      projectID="6e568c29-44d2-4cb3-805c-5320fc680e65"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    
    {/* <div>
    <HomePage/>
    </div> */}
    

    {/* <ChatEngineWrapper>
      <Socket
        projectID="6e568c29-44d2-4cb3-805c-5320fc680e65"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
      />
      <ChatList/> */}

    {/* <ChatSocket 
                development={false}
                projectID={"6e568c29-44d2-4cb3-805c-5320fc680e65"}
                chatID={id}
                chatAccessKey={accesskey}
                senderUsername="tabish"
            />
      <ChatFeed development={false} activeChat={id}/>
    </ChatEngineWrapper> */}

    </div>
  )
}

export default App;
