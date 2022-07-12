import React, {createContext, useState, useRef, useEffect} from "react";
import {io} from "socket.io-client";
import Peer from "simple-peer";

const SocketContext = createContext();
const socket = io("http://localhost:5000");
const ContextProvider = ({children}) => {
  const [stream, setStream] = useState(null);
  const [me, setMe] = useState("");
  const [call, setCall] = useState({});
  const [callAccepted, setcallAccepted] = useState(false);
  const [callEnded, setcallEnded] = useState(false);
  const [isOnCall, setisOnCall] = useState(false);
  const [name, setname] = useState("");
  const [myVideoSrc, setmyVideoSrc] = useState(null);
  const [userVideoSrc, setuserVideoSrc] = useState(null);

  const myVideo = useRef();
  const userVideo = useRef();
  const myVideo2 = useRef();

  const connectionRef = useRef();
  useEffect(() => {
    //get permission of video microphon
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((currentStream) => {
        if (currentStream != null) {
          console.log("stream" + currentStream.id);
          setStream(currentStream);
          setmyVideoSrc(currentStream);

          if (myVideo.current != null) {
            myVideo.current.srcObject = currentStream;
          }
        }
      });

    socket.on("me", (id) => {
      setMe(id);
    });

    socket.on("calluser", ({from, name: callerName, signal}) => {
      setCall({isReceivedCall: true, from, name: callerName, signal});
    });
  }, []);
  const answerCall = () => {
    setcallAccepted(true);
    setisOnCall(true);
    const peer = new Peer({initiator: false, trickle: false, stream});
    peer.on("signal", (data) => {
      socket.emit("answercall", {signal: data, to: call.from});
    });
    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
      myVideo2.current.srcObject = stream;
      myVideo.current.srcObject = null;

      setuserVideoSrc(currentStream);
    });

    peer.signal(call.signal);
    connectionRef.current = peer;
  };
  const callUser = (id) => {
    const peer = new Peer({initiator: true, trickle: false, stream});
    peer.on("signal", (data) => {
      socket.emit("calluser", {
        userToCall: id,
        signalData: data,
        from: me,
        name,
      });
    });
    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
      myVideo2.current.srcObject = stream;
      myVideo.current.srcObject = null;
      setuserVideoSrc(currentStream);
    });

    socket.on("callaccepted", (signal) => {
      setcallAccepted(true);
      setisOnCall(true);
      peer.signal(signal);
    });
    connectionRef.current = peer;
  };
  const leaveCall = () => {
    setisOnCall(false);
    setcallEnded(true);
    connectionRef.current.destroy();
    window.location.reload();
  };

  return (
    <SocketContext.Provider
      value={{
        call,
        callAccepted,
        myVideo,
        myVideo2,
        userVideo,
        stream,
        name,
        setname,
        callEnded,
        me,
        callUser,
        leaveCall,
        answerCall,
        isOnCall,
        myVideoSrc,
        userVideoSrc,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export {ContextProvider, SocketContext};
