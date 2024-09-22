import "./app-info.css";

const AppInfo = ({allEmpoyees, increasePerson}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {allEmpoyees}</h2>
            <h2>Премию получат: {increasePerson}</h2>
        </div>
    )
}

export default AppInfo;