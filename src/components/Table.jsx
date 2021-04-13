import React, {useState} from "react";
import {Button, Col, Form, Table} from 'react-bootstrap';
import {AiFillFilter} from 'react-icons/ai';
import {BsArrowUp, BsArrowDown} from 'react-icons/bs';
import style from './table.module.css'

const MyTable = (props) => {

    let filterValuesInitial = ['All', 'All', 'All', 'All', 'All']
    let [filterValues, setFilterValues] = useState(filterValuesInitial);

    const onHideFilters = () => {
        props.hideFilters();
    }

    const onSortByIndex = (index) => {
        props.sortByIndex(index)
    }

    const onSetFilterData = (index, e) => {
        props.setFilterData(index, e.target.value)
        let result = [...filterValues];

        result.splice(index, 1, e.target.value);
        setFilterValues(result)
    }

    const onResetFilters = () => {
        props.resetFiltersThunkCreator();
        let result = [...filterValues];
        result.splice(0, filterValuesInitial.length, ...filterValuesInitial);
        setFilterValues(result);
    }

    const updateInputValue = (index, e) => {
        props.filterData(index, e.target.value)

    }

    const onSetActiveSortIndex = (index) => {
        props.setActiveSortIndex(index);
    };

    const onChangeSortDirectionByIndex = (index) => {
        props.changeSortDirectionByIndex(index);
    };


    let iter = 0;
    let arr = [];


    for (let i = 0; i < props.data.cellsReserv.length / props.data.columns.length; i++) {
        arr.push(i);
    }

    let portion = 0;
    let lastPortion = -1-props.data.columns.length;


    let tableHead = ["Name", "Surname", "Age", "Rating", "Country"];

    let uniqProperty = [];

    let portionForFilter = 0;
    let lastPortionForFilter = -1-props.data.columns.length;
    let newCells = arr.map(item => {
        portionForFilter += props.data.columns.length;
        lastPortionForFilter += props.data.columns.length;
        return props.data.cellsReserv.filter((cell, index) => index < portionForFilter && index > lastPortionForFilter)
    })

    return (

        <div>
            <div className={style.hideItem} style={{cursor: "pointer", background: "#343a40",}}
                 onClick={() => onHideFilters()}>
                <AiFillFilter/>
                <div>
                    Filters
                </div>
            </div>
            <div className={!props.data.isHideFilter ? style.marginItem : ""}>
                <Form style={{display: props.data.isHideFilter && "none"}}>
                    <span className={style.itemHover} onClick={() => onResetFilters()}>Reset</span>
                    {

                        props.data.columns.map((column, index) => {
                            return <Form.Group key={index} style={{display: !column.filtering && 'none'}} as={Col}
                                               controlId="formGridState">
                                <Form.Label>{tableHead[index]}</Form.Label>
                                <Form.Control value={filterValues[index]} onChange={(e) => {
                                    onSetFilterData(index, e)
                                    updateInputValue(index, e)
                                }} as="select" >
                                    <option>All</option>
                                    {newCells.map((cell, index1) => {
                                        if (uniqProperty.indexOf(cell[index].value) === -1) {
                                            uniqProperty.push(cell[index].value)
                                            return <option key={index1}>{cell[index].value}</option>
                                        } else return false;

                                    })}

                                </Form.Control>
                            </Form.Group>
                        })}

                </Form>


            </div>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    {props.data.columns.map((column, index) => {
                        return <th key={index} style={{cursor: props.data.columns[index].sorting && 'pointer'}}
                                   onClick={props.data.columns[index].sorting ? () => {
                                       // onSetActiveSortIndex(index)
                                       onChangeSortDirectionByIndex(index)
                                       onSetActiveSortIndex(index)

                                       onSortByIndex(index)

                                   } : undefined}>
                            {tableHead[index]}
                            {props.data.columns[index].sorting && props.data.activeSortIndex === index ? !props.data.sortDirection ?
                                <BsArrowUp/> : <BsArrowDown/> : ""}
                        </th>
                    })}
                </tr>
                </thead>
                <tbody>
                {
                    arr.map(row => {
                        portion += props.data.columns.length
                        lastPortion += props.data.columns.length
                        return <tr key={row}>
                            {props.data.cells.filter((item, index) => index < portion && index > lastPortion).map((cell, index1) => {

                                return <td style={{...cell.style, ...props.data.columns[index1].style}}
                                           key={index1}>{cell.value}</td>
                            })}

                        </tr>

                    })
                }
                </tbody>
            </Table>
            {props.data.cells.length === 0 && <div>Sorry, no matching records found</div>}

        </div>
    )
}

export default MyTable;