import React from 'react';


const Profile = ({ user }) => {

try{
    return (
        (user.messages.map(message => {
            return <>
                <h3>{message.fromUser.username}</h3>
                <h3>{message.post.title}</h3>
                <div> {message.content}</div>
            </>
        }
        ))
    );
}catch (error){
    console.error(error);
        
    }
}

export default Profile;