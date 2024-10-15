import React, {useState,useEffect, Fragment} from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


const CRUD = () => {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const empdata = [
        {
            ID : 1, 
            Name : 'Nihal',
            Age : 22, 
            IsActive : 1 
        },
        {
            ID : 2, 
            Name : 'Kevil',
            Age : 23, 
            IsActive : 1 
        },
        {
            ID : 3, 
            Name : 'Dhruv',
            Age : 24, 
            IsActive : 0 
        },
    ]

    const [data, setData] = useState([])

    useEffect( () => {
        setData(empdata)
    },[])

    const handleEdit = (ID) => {
        handleShow();
    }

    const handleDelete = (ID) => {
        if(window.confirm("Are you sure you want to delete?") == true)
        {
            alert(ID)
        }
    }

    const handleUpdate = () => {

    }

    return(
        <Fragment>
                <Container>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col>2 of 3</Col>
                        <Col>3 of 3</Col>
                    </Row>
                </Container>
        <Table striped bordered hover >
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
          <th>IsActive</th>
          <th>Actions</th>
        
        </tr>
      </thead>
      <tbody>
        {
            data && data.length > 0 ?
            data.map((item, index) => {
                return(
                        <tr key={index}>
                            <td>{index +1}</td>
                            <td>{item.Name}</td>
                            <td>{item.Age}</td>
                            <td>{item.IsActive}</td>
                            <td colSpan={2}>
                                <button className="btn btn-primary" onClick={() => handleEdit(item.ID)}>Edit</button> &nbsp;
                                <button className="btn btn-danger" onClick={() => handleDelete(item.ID)}>Delete</button>
                            </td>
                        </tr>
                )
            })
            :
            'Loading...'
        }
      </tbody>
    </Table>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleUpdate}>Save Changes</Button>
            </Modal.Footer>
        </Modal>
        </Fragment>
    )
}

export default CRUD