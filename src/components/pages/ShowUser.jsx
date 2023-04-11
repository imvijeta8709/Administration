import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar"
import swal from 'sweetalert'
import DataTable from 'react-data-table-component';

export default function ShowUser() {

    const columns = [
        {
            name: <h5>Id</h5>,
            selector: row => row.id,
        },
        {
            name: <h5>Name</h5>,
            selector: row => row.name,
        },
        {
            name: <h5>Email</h5>,
            selector: row => row.email,
        },
        {
            name: <h5>Status</h5>,
            selector: row => row.status,
        },
        {
            name: <h5>Gender</h5>,
            selector: row => row.gender,
        },
        {
            name: <h5>Edit</h5>,
            selector:row => <button className="btn btn-success px-2 m-2" onClick={() => updateData(row.id)}>Edit</button>
        },
        {
            name:<h5>Delete</h5>,
            selector:row => <button className="btn btn-danger px-2 m-2" onClick={() => deleteData(row.id)}>Delete</button> 
        }
    ];

    const [users, setUsers] = useState()
    const navigate = useNavigate();


    const showInfo = () => {
        fetch("https://gorest.co.in/public/v2/users", {
            method: "GET",
            headers: { "Authorization": "Bearer d13365ff2216e6f61e8d76bf0ab76c3172cf654f69dbc75be1453be0fabd18c5" }
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
        }).then((data) => {
            setUsers(data);

        }).catch((error) => {
            console.log(error)
        })
    }
    //show information 
    useEffect(() => {
        showInfo()
    }, [])

    return (
        <React.Fragment>

            <NavBar />
            <center>
            <div className="row col-sm-12 mt-3" style={{ "minHeight": "580px" }}>
                <div className="col-sm-12 border py-3" style={{ boxShadow: "3px 3px 10px black" }}>
                    <h3 className="text-center text-danger fst-italic">All Data Here.. </h3>
                    <hr className="w-25" style={{ border: "2px solid black" }} />
                    <center className="col-sm-12">
                    <DataTable columns={columns} data={users} pagination striped noHeader className='react-dataTable'/>
                    </center>
                </div>
            </div>
            </center>
        </React.Fragment>
    )
    //Update information
    function updateData(id) {

        swal({
            title: "Are you sure?",
            text: "Want to update this Data ...!!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willUpdate) => {

            if (willUpdate) {
                window.localStorage.setItem('Id',id);
                navigate('/updateuser')
              }
          })
    }

    //Delete Records
    function deleteData(id) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Data",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            fetch(`https://gorest.co.in/public/v2/users/${id}`,
          {
              method: "DELETE",
              headers: { "Authorization": "Bearer d13365ff2216e6f61e8d76bf0ab76c3172cf654f69dbc75be1453be0fabd18c5" }
          })
            if (willDelete) {
              swal(" Your Data has been deleted!", {
                icon: "success",
              });
              showInfo()
            }
          })
    }
}