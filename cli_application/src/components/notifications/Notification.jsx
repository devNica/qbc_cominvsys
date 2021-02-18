import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {store} from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import 'animate.css'

const mapStateToProps = state =>({
    note_fr : state.notifications.note
})

const Notification = ({note_fr}) => {

    const createNotifiacion = (message, type, title, duration) =>{
        store.addNotification({
            title,
            message,
            type,                        // 'default', 'success', 'info', 'warning'
            container: 'top-center',                // where to position the notifications
            animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
            dismiss: {
              duration
            },

        })
    }

    useEffect(()=>{
        if(note_fr.msg){
            createNotifiacion(note_fr.msg, note_fr.type, '', note_fr.time);
        }
        
    },[note_fr])

    return (
        <div/>
    );
    
}

export default connect(mapStateToProps, {})(Notification);