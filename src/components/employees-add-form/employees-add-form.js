import { useState } from 'react';

import './employees-add-form.css';

const EmployeesAddForm = ({onAdd}) => {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');

    const personId = Math.floor(Math.random() * 100);

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeSalary = (e) => {
        setSalary(e.target.value);
    }

    const onSubmitPerson = (e) => {
        e.preventDefault();
        onAdd(name, salary, personId);
        setName('');
        setSalary('');
    }

    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form className="add-form d-flex" onSubmit={onSubmitPerson}>
                <input 
                    type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?"
                    value={name} 
                    onChange={onChangeName}/>
                <input 
                    type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                    value={salary} 
                    onChange={onChangeSalary}/>
                <button 
                    type="submit" 
                    className="btn btn-outline-light"
                    >Добавить</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;