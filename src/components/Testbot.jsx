"use client"
import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from './chatbot/config.js';
import MessageParser from './chatbot/MessageParser.js';
import ActionProvider from './chatbot/ActionProvider.js';

import './Testbot.css'

const Testbot = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default Testbot;
