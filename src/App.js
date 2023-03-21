import { ChatEngine } from 'react-chat-engine';
import ChatFeed  from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine 
        height="100vh"
        projectID="012e39f3-2fa2-45b2-ba2f-ce7a50a3de7c"
        userName="pedrowerkhaizer"
        userSecret="reactjs"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
//50 min    
//https://www.youtube.com/watch?v=jcOKU9f86XE
}

export default App;