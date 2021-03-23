import { func } from 'prop-types'
import React, { useEffect ,useState } from 'react'

const API = "http://127.0.0.1:3000/api"

export const GetEmployees = () => {
    const [queryId, setQueryId] = useState(0)
    const [employees, setEmployees] = useState({})
    const [isQuerySubmitted, setIsQuerySubmitted] = useState(false)

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