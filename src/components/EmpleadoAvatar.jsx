import React from 'react';


const EmpleadoAvatar = ({avatar}) => {
    return (
        <div className='mx-md-3'>
            <img className='avatar' src={avatar} alt="Avatar" />
        </div>
    );
};

export default EmpleadoAvatar;