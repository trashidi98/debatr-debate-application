import logo from './logo.svg';
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';
import './testpages/HomePage.js'
import HomePage from './testpages/HomePage';

const App = () => {

  if (!localStorage.getItem('username')) return <LoginForm />;

  return(
    <div>
    <ChatEngine
      height="100vh"
      projectID="6e568c29-44d2-4cb3-805c-5320fc680e65"
      //userName="saima"
      //userSecret="123"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    </div>
  )
}

export default App;
