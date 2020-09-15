import React, { useState, useContext, useMemo, useRef } from 'react';
import peopleContext from '../context/peopleContext';

const Form = () => {
    const [person, setPerson] = useState({ firstName: '', lastName: ''});
    const context = useContext(peopleContext);

    const firstNameInput = useRef(null);

    const onChange = e => {
        setPerson({...person, [e.target.name]: e.target.value});
    }
    const onSubmit = e => {
        e.preventDefault();
        if(person.firstName.trim() === '' || person.lastName.trim() === '') return;

        const newPerson = {
            firstName: person.firstName.trim(),
            lastName: person.lastName.trim(),
        };

        context.addPerson(newPerson);
        setPerson({ firstName: '', lastName: ''})
        firstNameInput.current.focus();
    };
    const printNumberOfPeople = () => console.log(`Number of people: ${context.people.length}`);
    useMemo(() => printNumberOfPeople(), [context.people]);
    return(
        <div className="col">
            <h2>Add a person: </h2>
            <hr/>
            <form onSubmit={onSubmit}>
            <div className="form-group">
                <input 
                type="text"
                className="form-control mb-2"
                name="firstName"
                placeholder="First Name..."
                value={person.firstName}
                ref={firstNameInput}
                onChange={onChange}
                />
                <div className="form-group">
                    <input 
                    type="text"
                    className="form-control"
                    name="lastName"
                    placeholder="Last Name..."
                    value={person.lastName}
                    onChange={onChange}
                />
                </div>
                <button className="btn btn-success" type="submit">Add person</button>
            </div>
            </form>
        </div>
    )
    
}

export default Form;