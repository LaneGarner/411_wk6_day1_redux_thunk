import React, { useState } from 'react'
import {Menu, MenuItem, Container, Button, Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core"
import { MoreVert } from '@material-ui/icons'

const Import = (props) => {
    
    const [removedItem, setRemovedItem] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = () => (event) => {
        setAnchorEl(event.currentTarget);
        // setRemovedItem(index);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = (index) => {
        props.deleteMake(removedItem, index)
        setAnchorEl(null)
    }

    return (
        <Container style={{marginTop: "2em"}} maxWidth="md">
            {/* <p>Import Component</p> */}
            <Button onClick={props.fetchMakes} variant="contained" color="primary">Import</Button>
            <h2>COUNT: {props.makes.length}</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                { props.makes.map(make => { return (
                    <TableRow>
                        <TableCell>{make.MakeId}</TableCell>
                        <TableCell>{make.MakeName}</TableCell>
                        <TableCell>
                            <MoreVert aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick()}></MoreVert>
                        </TableCell>
                    </TableRow>
                )})}
                </TableBody>
            </Table>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
        </Container>
    )
}

export default Import