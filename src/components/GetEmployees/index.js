import React, { useEffect ,useState, useContext } from 'react'
import EmployeeContext from '../../context/EmployeeContext'
import { Container, Button, Input } from './styles'

const API = "http://127.0.0.1:3000/api"

export const GetEmployees = () => {
    const [queryId, setQueryId] = useState(0)
    const [employees, setEmployees] = useState({})
    const [isQuerySubmitted, setIsQuerySubmitted] = useState(false)
    const {employeeData, setEmployeeData} = useContext(EmployeeContext)
    const [firstRender, setFirstRender] = useState(true)

    function onChangeEvent(e){
        setQueryId(e.target.value)
    }

    function handleSubmit(){
        setIsQuerySubmitted(!isQuerySubmitted)
    }

    function getApiData(queryId){
        fetch(`${API}?id=${queryId}`)
        .then(res => res.json())
        .then(response => {
            setEmployees(response)
            setEmployeeData(response.Employees)
        })
    }

    useEffect(function() {
        firstRender ?
            setFirstRender(false) :
            getApiData(queryId) 
    }, [isQuerySubmitted])

    return (
        <Container>
            <h1>Employee Data Base</h1>
                <Input
                    type="number"
                    onChange={onChangeEvent}
                    placeholder="Employee ID"/>
                <Button
                    type="submit"
                    onClick={handleSubmit}
                    >Get Employees
                </Button>
        </Container>
    )
}