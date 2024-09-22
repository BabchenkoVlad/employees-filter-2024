import { useState } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

  const [data, setData] = useState([
    {name: "John X.", salary: 800, increase: false, star: true, id: 1},
    {name: "Mickael T.", salary: 1000, increase: true, star: false, id: 2},
    {name: "Derek H.", salary: 1200, increase: false, star: false, id: 3},
  ]);
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredByIncrease = data.filter(item => item.increase).length;

  const deleteDataItem = (id) => {
    setData(data => 
      data.filter(elem => elem.id !== id))
  }

  const onAddDataPerson = (name, salary, id) => {
    const newItem = {
      name,
      salary,
      increase: false,
      star: false,
      id
    }
    setData(data => [...data, newItem]);
  }

  const onToggleProp = (id, prop) => {
    setData(data => data.map(item => {
      if (item.id === id) {
        return {...item, [prop]: !item[prop]}
      }
      return item;
    }));
  }

  const searchEmployees = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  const onUpdeteSearch = (term) => {
    setTerm(term)
  }

  const filterPost = (items, filter) => {
    switch (filter) {
      case 'star':
        return items.filter(item => item.star);
      case 'moreThen1000':
        return items.filter(item => item.salary > 1000);
      default:
        return items;
    }
  }

  const onFilterSelect = (filter) => {
    setFilter(filter)
  }

  const newFilteredData = filterPost(searchEmployees(data, term), filter);

  return (
    <div className="app">
        <AppInfo 
          allEmpoyees={data.length}
          increasePerson={filteredByIncrease}
        />

        <div className="search-panel">
            <SearchPanel 
              onUpdeteSearch={onUpdeteSearch}
            />
            <AppFilter 
              filter={filter}
              onFilterSelect={onFilterSelect}
            />
        </div>
        
        <EmployeesList 
          data={newFilteredData} 
          onDelete={deleteDataItem} 
          onToggleProp={onToggleProp}
        />
        <EmployeesAddForm 
          onAdd={onAddDataPerson}
        />
        
    </div>
  );
}

export default App;
