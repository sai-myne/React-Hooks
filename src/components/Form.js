import React, { useState } from 'react';

const Form = props => {
    const [person, setPerson] = useState({ firstName: '', lastName: ''});
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

        props.addPerson(newPerson);
        setPerson({ firstName: '', lastName: ''})
    }
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