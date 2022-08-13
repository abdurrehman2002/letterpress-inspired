import React from 'react';

function RegistrationForm() {
    return (
        <div className='RegistrationBg'>
            <div className='RegistrationFormWrapper'>
                <div className='RegistrationHeading'>
                    <h1>Newsletter<span>Registration</span></h1>
                </div>
                <div className='RegistrationName'>
                    <div className='RegistrationFirstName'><input type="text" placeholder="FirstName*" /></div>
                    <div className='RegistrationLastName'><input type="text" placeholder="LastName*" /></div>
                </div>
                <div className='RegistrationEmail'>
                    <input type="text" placeholder="EmailSubject*" />
                </div>
                <div className='RegistrationDescription'>
                    <input type="textarea" placeholder="Write Something Here..." />
                </div>
                <div className='RegistrationButton'>
                    <button className='btn'>SUBMIT EMAIL</button>
                </div>

            </div>
        </div>
    );
}

export default RegistrationForm;