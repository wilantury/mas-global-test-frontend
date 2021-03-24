import React, { useEffect ,useState, useContext } from 'react'
import EmployeeContext from '../../context/EmployeeContext'

const API = "http://127.0.0.1:3000/api"

export const GetEmployees = () => {
    const [queryId, setQueryId] = useState(0)
    const [employees, setEmployees] = useState({})
    const [isQuerySubmitted, setIsQuerySubmitted] = useState(false)
    const {employeeData, setEmployeeData} = useContext(EmployeeContext)

    function onChangeEvent(e){
        setQueryId(e.target.value)
    }

    function handleSubmit(){
        setIsQuerySubmitted(!isQuerySubmitted)
    }

    useEffect(function() {
        fetch(`${API}?id=${queryId}`)
        .then(res => res.json())
        .then(response => {
            setEmployees(response)
            setEmployeeData(response.Employees)
            console.log(response)
        })
    }, [isQuerySubmitted])

    return (
        <div>
                <input
                    type="number"
                    onChange={onChangeEvent}
                    placeholder="Employee ID"/>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    >Get Employees
                </button>
        </div>
    )
}