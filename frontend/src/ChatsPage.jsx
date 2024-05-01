import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic('e1bd5bd6-ce34-4159-beec-9dd516826bbb', props.user.username, props.user.secret);
  return (
  <div style={{height: '100vh'}}>
    <MultiChatSocket {...chatProps} />
    <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
  </div>
  );
};
export default ChatsPage;