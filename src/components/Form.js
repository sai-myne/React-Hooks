import React, { useContext, useRef } from 'react';
import peopleContext from '../context/peopleContext';

import { useForm } from '../hooks';

const Form = () => {
    const context = useContext(peopleContext);

    const firstNameInput = useRef(null);
    

    const validatePersonDataForm = (values) => {
        let errors = {};
        if(values.firstName.trim() === ''){
            errors.firstName = 'First name must not be empty';
        }
        if(values.lastName.trim() === ''){
            errors.lastName = 'last name must not be empty';
        }
        return errors;
    }

    const addPersonFromForm = () => {     
        context.addPerson(values);
        firstNameInput.current.focus();
    };
    const { values, errors, onChange, onSubmit } = useForm(addPersonFromForm, { firstName: '', lastName: ''}, validatePersonDataForm)
    
    
    return(
        <div className="col">
            <h2>Add a person: </h2>
            <hr/>
            <form onSubmit={onSubmit}>
            <div className="form-group">
                <input 
                type="text"
                className={`form-control mb-2 ${errors.firstName && "is-invalid"}`}
                name="firstName"
                placeholder="First Name..."
                value={values.firstName}
                ref={firstNameInput}
                onChange={onChange}
                />
                {errors.firstName && (
                    <div className="invalid-feedback">
                        {errors.firstName}
                    </div>
                )}
                <div className="form-group">
                    <input 
                    type="text"
                    className={`form-control ${errors.lastName && "is-invalid"}`}
                    name="lastName"
                    placeholder="Last Name..."
                    value={values.lastName}
                    onChange={onChange}
                />
                {errors.lastName && (
                    <div className="invalid-feedback">
                        {errors.lastName}
                    </div>
                )}
                </div>

                <button className="btn btn-success" type="submit">Add person</button>
            </div>
            </form>
        </div>
    )
    
}

export default Form;