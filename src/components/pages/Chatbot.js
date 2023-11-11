import React, { useState, useRef } from "react";
import styled from "styled-components";

const Chatbot = () => {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  const handleInputTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText) {
      const newMessage = { text: inputText, isUser: true };

      setMessages((prevMessages) => [newMessage, ...prevMessages]);

      setInputText("");
    }
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      <ChatbotButton>
        <button onClick={toggleChatbot}>
          <img src="../images/chatbox-icon.svg" alt="Chatbox" />
        </button>
      </ChatbotButton>

      {isChatbotVisible && (
        <ChatbotContainer>
          <ChatboxHeader>
            <Part1>
              <img src="../images/chatbotimg.png" alt="image" />
            </Part1>
            <Part2>
              <h4>Chat support</h4>
              <p>Hi. My name is Christ. How can I help you?</p>
            </Part2>
          </ChatboxHeader>
          <ChatboxMessages>
            {messages.map((message, index) => (
              <MessagesItem key={index} isUser={message.isUser}>
                {message.text}
              </MessagesItem>
            ))}
          </ChatboxMessages>

          <ChatboxFooter>
            <input
              type="text"
              placeholder="Write a message..."
              value={inputText}
              onChange={handleInputTextChange}
              onKeyDown={handleEnterPress}
              ref={inputRef}
            />
            <button className="send_button" onClick={handleSendMessage}>
              Send
            </button>
          </ChatboxFooter>
        </ChatbotContainer>
      )}
    </>
  );
};

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 40px;
  right: 30px;
  width: 340px;
  height: 75%;
  background-color: white;
  display: grid;
  grid-template-rows: 5rem 1fr 4rem;
  grid-row-gap: 4px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  z-index: 1000;
`;

const ChatbotButton = styled.div`
  position: absolute;
  bottom: 0rem;
  right: 2rem;
`;

const ChatboxHeader = styled.div`
  background: #97cba9;
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: 1rem 1fr;
  column-gap: 3rem;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  left-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: white;
`;

const Part1 = styled.div`
  padding: 9px;

  img {
    width: 47px;
    height: 47px;
    border-radius: 50%;
  }
`;

const Part2 = styled.div`
  // width:10rem;
  display: flex;
  flex-direction: column;
  margin-left: 2rem h4 {
    font-size: 1.2em;
  }

  p {
    margin-top: -1rem;
  }
`;

const ChatboxMessages = styled.div`
  padding: 0 20px;
  display: flex;
  overflow-y: scroll;
  flex-direction: column-reverse;
`;

// const MessagesItem = styled.div`
//   margin-top: 10px;
//   background: #E0E0E0;
//   padding: 8px 12px;
//   max-width: 70%;
// `;

const MessagesItem = styled.div`
  margin-top: 10px;
  padding: 8px 12px;
  max-width: 70%;
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  background: ${(props) => (props.isUser ? "#acc6aa" : "#E0E0E0")};
  color: ${(props) => (props.isUser ? "white" : "black")};
  border-radius: 20px;
`;

const ChatboxFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px;
  background: #97cba9;
  box-shadow: 0px -10px 15px rgba(0, 0, 0, 0.1);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  align-items: center;

  input {
    width: 80%;
    border: none;
    padding: 8px 10px;
    border-radius: 30px;
    text-align: left;
    align-items: center;
  }

  button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
  }
`;

export default Chatbot;
