import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FetchUserList, Removeuser } from "../Redux/Action";
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
const Userlisting = (props) => {
    const [tableToggle, settableToggle] = useState(false)
    useEffect(() => {
        props.loaduser();
    }, [])
    const handledelete = (code) => {
        if (window.confirm('Do you want to remove?')) {
            props.removeuser(code);
            props.loaduser();
            toast.success('User removed successfully.')
        }
    }
    const [rowData, setRowData] = useState([props.user.userlist]);

    // Column Definitions: Defines & controls grid columns.
    const [colDefs, setColDefs] = useState([
        { field: "id" },
        { field: "name", shortabllabel: true, filter: true },
        { field: "email" },
        { field: "phone" },
        { field: "role" },
    ]);
    return (
        props.user.loading ? <div><h2>Loading...</h2></div> :
            props.user.errmessage ? <div><h2>{props.user.errmessage}</h2></div> :

                <div class={`${tableToggle ? 'bg-dark h-screen' : ''}`}>
                    <div class="form-check form-switch text-left">
                        <button type="button" onClick={() => settableToggle(!tableToggle)} class={`btn ${tableToggle ? 'btn-dark' : 'btn-light'}`}>{tableToggle ? 'Dark' : "Light"}</button>
                    </div>
                    <div class={`card ${tableToggle ? 'bg-dark' : ''}`}>
                        <div className="card-header" >
                            <Link to={'/user/add'} className="btn btn-success">Add User [+]</Link>
                        </div>
                        <div className="card-body">
                            <table className={`table table-bordered ${tableToggle ? 'table table-dark' : ''} `}>
                                <thead>
                                    <tr>
                                        <td>Code</td>
                                        <td>Name</td>
                                        <td>Email</td>
                                        <td>Phone</td>
                                        <td>Role</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.user.userlist && props.user.userlist.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.role}</td>
                                                <td>
                                                    <Link to={'/user/edit/' + item.id} className="btn btn-primary">Edit</Link> |
                                                    <button onClick={() => { handledelete(item.id) }} className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    }

                                </tbody>

                            </table>
                        </div>

                    </div>
                    {/* react ag gride */}
                    <div className="ag-theme-quartz" style={{ height: 500 }}>
                        <AgGridReact rowData={props.user.userlist} columnDefs={colDefs} />
                    </div>
                </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loaduser: () => dispatch(FetchUserList()),
        removeuser: (code) => dispatch(Removeuser(code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Userlisting);