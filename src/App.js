import { ChatEngine } from 'react-chat-engine';
import ChatFeed  from './components/ChatFeed';
import LoginForm  from './components/LoginForm';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine 
        height="100vh"
        projectID="012e39f3-2fa2-45b2-ba2f-ce7a50a3de7c"
        userName= {localStorage.getItem('username')}
        userSecret= {localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;