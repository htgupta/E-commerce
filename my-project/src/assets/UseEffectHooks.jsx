import React, { useState, useEffect } from 'react';

function useEffectHook() {
    // Define state variables for first name and last name
    const [name, setName] = useState('Your First Name');
    const [lastname, setLastname] = useState('Your Last Name');

    // useEffect hook to update the document title when name or lastname changes
    useEffect(() => {
        document.title = `${name} ${lastname}`;

        // Cleanup function: reset the document title when the component is unmounted or when name/lastname changes
        return () => {
            document.title = 'React App';
        };
    }, [name, lastname]);

    // JSX to render the component
    return (
        <div>
            <p>{`First Name: ${name}`}</p>
            <p>{`Last Name: ${lastname}`}</p>
        </div>
    );
}

export default useEffectHook;
