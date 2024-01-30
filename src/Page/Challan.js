/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getChallanObject } from '../Redux/Action/ChallanAction'

function Challan() {
    const dispatch = useDispatch()
    const challanObject = useSelector((state) => state.challan.challanObj)
    const { id } = useParams()
    useEffect(() => {
        dispatch(getChallanObject(id))
    }, [getChallanObject])
    return (
        <div className='container mt-4'>
            <table className="table table-bordered" >
                <table className='bg-gray-200'>
                    <tr>
                        <td valign="top" className='w-96 '>
                            <table >
                                <tbody>
                                    <tr >
                                        <td>
                                            <div class="cellstyle" >SHIP FROM</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="cellstyle">asd<br />

                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><div class="cellstyle">DATE: {challanObject.dates}</div></td>
                                    </tr>
                                    <tr>
                                        <td><div class="cellstyle">EMAIL:asbd@sdsaDfd'</div></td>
                                    </tr>
                                    <tr>
                                        <td><div class="cellstyle">FAX:adfsdf</div></td>
                                    </tr>
                                    <tr>
                                        <td><div class="cellstyle">CONTACT:243432</div></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td valign="top" className='w-96'>
                            <table >
                                <tbody>
                                    <tr valign="top">
                                        <td><div class="cellstyle">SHIP TO</div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="cellstyle">asdsaddsf
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <div class="cellstyle">PHONE: affsdf<br /></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <div class="cellstyle">&nbsp;</div>
                                        </td>
                                    </tr>
                                    <tr >
                                        <td >
                                            <div class="cellstyle">&nbsp;</div>
                                        </td>
                                    </tr>
                                    <tr >
                                        <td >
                                            <div class="cellstyle">&nbsp;</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td valign="top" className='w-96'>
                            <table >
                                <tbody>
                                    <tr>
                                        <td><div class="cellstyle">ASN NUMBER:dsfdsf</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="cellstyle">TRACKING #:
                                                dsfsd</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="cellstyle">SHIPPING DATE:dsfds</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="cellstyle">CARRIER: Default</div>
                                        </td>
                                    </tr>
                                    <tr rowspan="4" >
                                        <td>
                                            <div class="cellstyle">SHIP CANCELLATION DATE:</div>
                                            <div class="cellstyle">dsfsd<br /></div>
                                            <div class="cellstyle"></div>
                                            <div class="cellstyle"></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </table><br />

                <table >
                    <th >
                        <tr>PARTY NAME : &nbsp; {challanObject.name}</tr> <br />
                        <table  >
                            <tr>
                                <td className='w-80'>
                                    Name
                                </td>
                                <td className='w-80'>
                                    Feet
                                </td>
                                <td className='w-80'>
                                    Rate
                                </td>
                                <td className='w-48'>
                                    Total
                                </td>
                            </tr>

                        </table>


                        <table className='mt-2 font-normal' >
                            {
                                challanObject.inputSets && challanObject.inputSets.map((item) => (
                                    <tr>
                                        <td className='w-80 ' >
                                            {item.banner}
                                        </td>
                                        <td className='w-80'>
                                            {item.ft}
                                        </td>
                                        <td className='w-80'>
                                            {item.rate}
                                        </td>
                                        <td className='w-48'>
                                            {item.total}
                                        </td>
                                    </tr>
                                ))
                            }


                        </table>
                        <table>
                            <br /><br />
                            <tr>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp;
                                Total &nbsp; : &nbsp;
                                {
                                    challanObject.inputSets && challanObject.inputSets.reduce((acc, inputSet) => acc + parseFloat(inputSet.total), 0).toFixed(2)
                                }
                            </tr>
                        </table>
                    </th>
                </table>

            </table>
        </div >
    )
}

export default Challan
