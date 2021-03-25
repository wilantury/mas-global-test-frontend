import React, { useState, useEffect, useContext } from 'react'
import EmployeeContext from '../../context/EmployeeContext'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

export const Employees = () => {
    const {employeeData, setEmployeeData} = useContext(EmployeeContext)
    const [data, setData] = useState([])

    const classes = useStyles();

    useEffect( function() {
        setData(employeeData)
    },[employeeData])

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Role Id</TableCell>
                        <TableCell align="right">Role Name</TableCell>
                        <TableCell align="right">Role Description</TableCell>
                        <TableCell align="right">Contract Type</TableCell>
                        <TableCell align="right">Base Salary</TableCell>
                        <TableCell align="right">Annual Salary</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                            {row.id}
                        </TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.roleId}</TableCell>
                        <TableCell align="right">{row.roleName}</TableCell>
                        <TableCell align="right">{row.roleDescription}</TableCell>
                        <TableCell align="right">{row.contractTypeName}</TableCell>
                        <TableCell align="right">{row.baseSalary}</TableCell>
                        <TableCell align="right">{row.annualSalary}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}