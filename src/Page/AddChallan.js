import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
    getchallanData,
    newAddChallan,
    removeChallan,
    editechallans,
} from "../Redux/Action/ChallanAction";
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import "ag-grid-enterprise";

function AddChallan() {
    const challanList = useSelector((state) => state.challan.challanList);
    const dispatch = useDispatch();
    const [edite, Setedite] = useState(false);
    const [editId, SeteditId] = useState(false);
    const [name, Setname] = useState();
    const [dates, Setdates] = useState();


    //-- new multiple input
    const [inputSets, setInputSets] = useState([
        { banner: "", ft: "", rate: "", total: "0" },
    ]);
    console.log('inputSet total', inputSets.reduce((acc, inputSet) => acc + parseFloat(inputSet.total), 0));
    const handleChange = (setIndex, fieldName, value) => {
        const newInputSets = [...inputSets];
        newInputSets[setIndex] = { ...newInputSets[setIndex], [fieldName]: value };

        // Automatically calculate 'total' based on 'ft' and 'rate'
        if (fieldName === "ft" || fieldName === "rate") {
            const ft = parseFloat(newInputSets[setIndex].ft) || 0;
            const rate = parseFloat(newInputSets[setIndex].rate) || 0;
            newInputSets[setIndex].total = (ft * rate).toFixed(2);
        }

        setInputSets(newInputSets);
    };

    const handleAddFields = () => {
        setInputSets([...inputSets, { banner: "", ft: "", rate: "", total: "0" }]);
    };

    {
        /*----- ag-grid-table   */
    }
    const image = () => {
        const img =
            "data:image/jpeg;base64,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";
        return <img src={img} className="" />;
    };

    const [colDefs, setColDefs] = useState([
        { field: "id" },
        { field: "name" },
        { field: "dates" },

        // {
        //     field: 'Image',
        //     cellRenderer: image
        // },
        {
            field: "Action",
            width: "300px",
            cellRenderer: (p) => (
                <div className="flex">
                    <button
                        className="text-red-600 p-1"
                        onClick={(e) => removeChallanData(p.data.id)}
                    >
                        Delete
                    </button>
                    <button
                        className="text-dark px-10"
                        onClick={() => editeChallan(p.data)}
                    >
                        Edite
                    </button>
                    <Link className="text-dark p-1 mx-1" to={"/challan/" + p.data.id}>
                        View
                    </Link>
                </div>
            ),
        },
    ]);
    const defaultColDef = {
        pagination: true,
        paginationPageSize: 10,
        domLayout: 'autoHeight',
        sortable: true,
        editable: true,
        resizable: true,
        flotingFilter: true,
        enableRowGroup: true,
        cellClass: "no-border",
        filter: true,
        flex: 1,
    };

    useEffect(() => {
        dispatch(getchallanData());
    }, [getchallanData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { name, dates, inputSets };
        await dispatch(newAddChallan(data));
        Setname("");
        Setdates("");
        setInputSets([{ banner: "", ft: "", rate: "", total: "0" }])
    };

    const handleRemove = (id) => {
        const updatedInputSets = [...inputSets];
        updatedInputSets.splice(id, 1);
        setInputSets(updatedInputSets);
    }
    const removeChallanData = (id) => {
        dispatch(removeChallan(id));
    };
    const editeChallan = (data) => {
        Setedite(true);
        SeteditId(data.id);
        Setname(data.name);
        Setdates(data.dates);
        setInputSets(data.inputSets);
    };
    const challanEdite = async (e) => {
        e.preventDefault();
        const data = { name, dates, inputSets };
        await dispatch(editechallans(editId, data));
        Setedite(false);
        Setname("");
        Setdates("");
        setInputSets([{ banner: "", ft: "", rate: "", total: "0" }])
    };

    return (
        <div>
            <div className="container mt-5  ">
                <div className="p-10 bg-gray-200  rounded-md">
                    <h2>ADD</h2>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="row text-left flex justify-center">
                            <div className="form-group col-md-7 md:pt-8 pt-2">
                                <label className="pb-2" htmlFor="firstName">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => Setname(e.target.value)}
                                    className="form-control"
                                    id="firstName"
                                    placeholder="Enter your first name"
                                />
                            </div>
                            <div className="form-group col-md-3 md:pt-8 pt-2">
                                <label className="pb-2" htmlFor="dob">
                                    Date of Birth
                                </label>
                                <input
                                    type="date"
                                    value={dates}
                                    onChange={(e) => Setdates(e.target.value)}
                                    className="form-control"
                                    id="dob"
                                />
                            </div>
                            <div className="row flex justify-center pt-4">
                                <div className="form-group col-md-3 md:pt-8 pt-2 px-1">
                                    <label htmlFor="inputField1">
                                        Banner
                                    </label>
                                </div>
                                <div className="form-group col-md-2 md:pt-8 pt-2 ">
                                    <label htmlFor="inputField1">
                                        Banner
                                    </label>
                                </div>
                                <div className="form-group col-md-2 md:pt-8 pt-2">
                                    <label htmlFor="inputField1">
                                        Banner
                                    </label>
                                </div>
                                <div className="form-group col-md-3 md:pt-8 pt-2">
                                    <label htmlFor="inputField1">
                                        Banner
                                    </label>
                                </div>
                            </div>
                            <div >
                                {inputSets.map((inputSet, setIndex) => (
                                    <div
                                        key={setIndex}
                                        className="row text-left flex justify-center"
                                    >
                                        <div className="form-group col-md-3 md:pt-4 pt-2">

                                            <input
                                                className="form-control"
                                                type="text"
                                                value={inputSet.banner}
                                                onChange={(e) =>
                                                    handleChange(setIndex, "banner", e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="form-group col-md-2 md:pt-8 pt-2">

                                            <input
                                                className="form-control"
                                                type="text"
                                                value={inputSet.ft}
                                                onChange={(e) =>
                                                    handleChange(setIndex, "ft", e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="form-group col-md-2 md:pt-8 pt-2">

                                            <input
                                                className="form-control"
                                                type="text"
                                                value={inputSet.rate}
                                                onChange={(e) =>
                                                    handleChange(setIndex, "rate", e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="form-group col-md-3 md:pt-8 pt-2 flex">
                                            <div>

                                                <input
                                                    className="form-control"
                                                    disabled={true}
                                                    type="text"
                                                    value={inputSet.total}
                                                    onChange={(e) =>
                                                        handleChange(setIndex, "total", e.target.value)
                                                    }
                                                />
                                            </div>
                                            <button type="button" className="btn btn-light w-18 h-9  ml-4" onClick={() => handleAddFields()}>
                                                +
                                            </button>
                                            <button type="button" className="btn btn-light w-18 h-9  ml-4" onClick={() => handleRemove(setIndex)}>
                                                -
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <div className="row mx-1 flex justify-center">
                                    <div className="col-10 flex justify-end my-5 bg-gray-50">
                                        <div className="pr-24 mr-6 text-xl">
                                            Total :   {
                                                inputSets.reduce((acc, inputSet) => acc + parseFloat(inputSet.total), 0).toFixed(2)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {!edite ? (
                                <div className="col-md-10 pt-8 text-left">
                                    <button type="submit" className="btn btn-dark w-60">
                                        Submit
                                    </button>
                                </div>
                            ) : (
                                <div className="col-md-10 pt-8 text-left">
                                    <button
                                        type="button"
                                        onClick={(e) => challanEdite(e)}
                                        className="btn btn-success w-60"
                                    >
                                        Edite
                                    </button>
                                </div>
                            )}
                        </div>
                    </form>
                </div>

                {/*------ ag-grid-table */}

                <div className="pt-12">
                    {challanList.length ? (
                        <div
                            className="ag-theme-quartz"
                            style={{ height: 400, width: "100%" }}
                        >
                            <AgGridReact
                                rowData={challanList}
                                columnDefs={colDefs}
                                defaultColDef={defaultColDef}
                                rowSelection="multiple"
                                rowGroupPanelShow="always"
                            />
                        </div>
                    ) : (
                        <div className="flex justify-content-center text-3xl">
                            NoData Found
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AddChallan;
