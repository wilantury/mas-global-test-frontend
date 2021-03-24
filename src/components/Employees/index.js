import React, { useState, useEffect, useContext } from 'react'
import EmployeeContext from '../../context/EmployeeContext'

export const Employees = () => {
    const {employeeData, setEmployeeData} = useContext(EmployeeContext)
    const [data, setData] = useState(0)

    useEffect( function() {
        console.log({employeeData})
        setData(employeeData)
    },[employeeData])

    return (
        <div>
            <p>{data? 'si': 'no'}</p>
        </div>
    )
}