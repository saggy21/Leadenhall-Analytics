import { createChatBotMessage } from 'react-chatbot-kit';
import StartBtn from '../StartBtn';
import StartSlow from '../StartSlow';
import DipslayImage from '../DipslayImage';

const config = {
  initialMessages: [createChatBotMessage(`Welcome to Mr. Sagar Advisor!`, {
    widget: "startBtn"
})],
  botName:"Helper",
  

  widgets: [
    {
        widgetName: "startBtn",
        widgetFunc: (props) => <StartBtn {...props} />,
    },
    {
        widgetName: "startSlow",
        widgetFunc: (props) => <StartSlow {...props} />,
    },
    {
        widgetName: "finalImage",
        widgetFunc: (props) => <DipslayImage {...props} />,
    },
]
};

export default config;