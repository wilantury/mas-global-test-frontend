import React, { createContext } from 'react'

const EmployeeContext = createContext({
    employeeData:[],
    setEmployeeData: ()=>{}
})

export default EmployeeContext