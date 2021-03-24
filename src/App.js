import React , { useState } from 'react'
import {GetEmployees} from './components/GetEmployees'
import { Employees } from './components/Employees'
import EmployeeContext from './context/EmployeeContext'

export const  App = () => {
    const [employeeData, setEmployeeData] = useState([])
    const value = { employeeData, setEmployeeData}
    return (
        <EmployeeContext.Provider value = {value}>
            <GetEmployees />
            <Employees />
        </EmployeeContext.Provider>
    )
}