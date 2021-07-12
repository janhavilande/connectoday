import { useEffect } from 'react'
import socket from '../../services/socket'
import { connect } from 'react-redux'
import { setSendMsg } from '../../redux/actions/chatsAction'

function MessageListener(props) {
    //socketS
    //connecting client to server
    //imported socket as an instance to avoid multiple component call to the server

    const msgFromServer = (msg) => {
        console.log(msg,'[MESSAGE_SERVER]')
        props.dispatch(setSendMsg(msg))
    }
    
    const connectSocket = () => {
        console.log('socketFnMessages() connected on load')
        //to remove useEffect dependency warning -> by creating a socket instance in services folder

        socket.on('server message listening',msgFromServer)
        // socket.on('server message listening',(msgFromServer)=>{
        //     console.log(msgFromServer,'[MESSAGE_SERVER]')
        //     // update the redux state
        //     props.dispatch(setSendMsg(msgFromServer))
        // })
    }

    useEffect(() => {
        
        //Mount
        connectSocket()
        return () => {
            console.log('socket listening closed')
            socket.off('server message listening', msgFromServer)
            //socket.off('server message listening')
        }
        // eslint-disable-next-line
    },[])
    //! ----SOCKETS

    return (null)
}

export default connect()(MessageListener)
