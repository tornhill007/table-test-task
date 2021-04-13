const SET_ACTIVE_SORT_INDEX = 'SET_ACTIVE_SORT_INDEX-POST';
const SORT_BY_INDEX = 'SORT_BY_INDEX';
const CHANGE_SORT_DIRECTION_BY_INDEX = 'CHANGE_SORT_DIRECTION_BY_INDEX';
const FILTER_DATA = 'FILTER_DATA';
const SET_FILTER_DATA = 'SET_FILTER_DATA';
const HIDE_FILTERS = 'HIDE_FILTERS';
const RESET_FILTERS = 'RESET_FILTERS';

let initialState = {
    isHideFilter: true,
    filterArray: {},
    activeSortIndex: null,
    sortDirection: true,
    columns: [
        { // has N elements (N columns)
            type: ["string"],
            filtering: true, // has filtering input
            sorting: true, // has sorting arrows
            style: {color: '#0EC28F'} // css styles
        },
        {
            type: ["string"],
            filtering: true, // has filtering input
            sorting: true, // has sorting arrows
            style: {color: 'white'} // css styles
        },
        {
            type: ["number"],
            filtering: false, // has filtering input
            sorting: false, // has sorting arrows
            style: {color: 'yellow'} // css styles
        },
        {
            type: ["number"],
            filtering: false, // has filtering input
            sorting: true, // has sorting arrows
            style: {color: 'red'} // css styles
        },
        {
            type: ["string"],
            filtering: true, // has filtering input
            sorting: false, // has sorting arrows
            style: {color: 'black'} // css styles
        },
    ],
    cells: [
        {  // has M*N elements (M rows)
            value: "Andrew",// any value
            style: {background: "rgb(244, 35, 35, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "Komar",// any value
            style: {background: "rgba(255,214,214,0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: 23,// any value
            style: {background: "rgba(245, 190, 24, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: 90,// any value
            style: {background: "rgba(67, 139, 18, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "Ukraine",// any value
            style: {background: "rgba(32, 35, 248, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "Alice",// any value
            style: {background: "rgba(87, 41, 9, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "Pilipenko",// any value
            style: {background: "rgba(87, 9, 74, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: 22,// any value
            style: {background: "rgba(244, 71, 169, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: 100,// any value
            style: {background: "rgba(71, 244, 235, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "England",// any value
            style: {background: "rgba(79, 6, 6, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "Roman",// any value
            style: {background: "rgba(0, 12, 91, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "Berezhok",// any value
            style: {background: "rgba(157, 233, 16, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: 21,// any value
            style: {background: "rgba(120, 22, 156, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: 95,// any value
            style: {background: "rgba(156, 22, 73, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "France",// any value
            style: {background: "rgba(87, 9, 74, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "Roman",// any value
            style: {background: "rgba(0, 12, 91, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "Berezhok",// any value
            style: {background: "rgba(157, 233, 16, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: 21,// any value
            style: {background: "rgba(120, 22, 156, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: 95,// any value
            style: {background: "rgba(156, 22, 73, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "France",// any value
            style: {background: "rgba(87, 9, 74, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "Max",// any value
            style: {background: "rgba(0, 12, 91, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "Berezhok",// any value
            style: {background: "rgba(157, 233, 16, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: 21,// any value
            style: {background: "rgba(120, 22, 156, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: 95,// any value
            style: {background: "rgba(156, 22, 73, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "France",// any value
            style: {background: "rgba(87, 9, 74, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
    ],

    cellsReserv: [
        {  // has M*N elements (M rows)
            value: "Andrew",// any value
            style: {background: "rgb(244, 35, 35, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "Komar",// any value
            style: {background: "rgba(255,214,214,0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: 23,// any value
            style: {background: "rgba(245, 190, 24, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: 90,// any value
            style: {background: "rgba(67, 139, 18, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "Ukraine",// any value
            style: {background: "rgba(32, 35, 248, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "Alice",// any value
            style: {background: "rgba(87, 41, 9, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "Pilipenko",// any value
            style: {background: "rgba(87, 9, 74, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: 22,// any value
            style: {background: "rgba(244, 71, 169, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: 100,// any value
            style: {background: "rgba(71, 244, 235, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "England",// any value
            style: {background: "rgba(79, 6, 6, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "Roman",// any value
            style: {background: "rgba(0, 12, 91, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "Berezhok",// any value
            style: {background: "rgba(157, 233, 16, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: 21,// any value
            style: {background: "rgba(120, 22, 156, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: 95,// any value
            style: {background: "rgba(156, 22, 73, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "France",// any value
            style: {background: "rgba(87, 9, 74, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "Roman",// any value
            style: {background: "rgba(0, 12, 91, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "Berezhok",// any value
            style: {background: "rgba(157, 233, 16, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: 21,// any value
            style: {background: "rgba(120, 22, 156, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: 95,// any value
            style: {background: "rgba(156, 22, 73, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "France",// any value
            style: {background: "rgba(87, 9, 74, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "Max",// any value
            style: {background: "rgba(0, 12, 91, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "Berezhok",// any value
            style: {background: "rgba(157, 233, 16, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: 21,// any value
            style: {background: "rgba(120, 22, 156, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: 95,// any value
            style: {background: "rgba(156, 22, 73, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
        {
            value: "France",// any value
            style: {background: "rgba(87, 9, 74, 0.1)"} // total cell style is merge with column style and cell (style = {...columns[i].style, ...cells[i*j].style})
        },
    ],
}

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_SORT_INDEX:
            return {
                ...state,
                activeSortIndex: action.index
            };

        case HIDE_FILTERS:
            return {
                ...state,
                isHideFilter: !state.isHideFilter
            };

        case SET_FILTER_DATA:
            let filterDataState = {...state};
            let filterData = {...filterDataState.filterArray}
            Object.keys(filterData).forEach(function (key) {
                if (key === action.index) {
                    filterData[key] = action.property
                }

            }, filterData);
            if (action.property === 'All') {
                delete filterData[action.index]

            } else {
                filterData[action.index] = action.property
            }

            return {
                ...state,
                filterArray: filterData
            };

        case CHANGE_SORT_DIRECTION_BY_INDEX:
            return {
                ...state,
                sortDirection: action.index !== state.activeSortIndex && state.activeSortIndex !== null ? true : state.sortDirection
            };

        case RESET_FILTERS:
            return {
                ...state,
                filterArray: {}
            };

        case SORT_BY_INDEX:
            let newState = {...state};
            newState.cells = [...newState.cells]
            let newCells;
            let arr = []
            for (let i = 0; i < newState.cells.length / state.columns.length; i++) {
                arr.push(i);
            }
            let portion = 0;
            let lastPortion = -1-state.columns.length;
            newCells = arr.map(item => {
                portion += state.columns.length;
                lastPortion += state.columns.length;
                return newState.cells.filter((cell, index) => index < portion && index > lastPortion)
            })

            newCells.sort((a, b) => {
                if (action.index === 2 || action.index === 3) {
                    return state.sortDirection ? a[action.index].value < b[action.index].value ? 1 : -1 : a[action.index].value > b[action.index].value ? 1 : -1
                } else {
                    return state.sortDirection ? a[action.index].value > b[action.index].value ? 1 : -1 : a[action.index].value < b[action.index].value ? 1 : -1
                }
            })

            let res = newCells.map((item, index) => {
                let result = item.map(cell => {
                    return cell
                });
                return result
            })
            let finallyCells = res.reduce((a, b) => [...a, ...b], [])
            return {
                ...state,
                cells: finallyCells,
                sortDirection: !state.sortDirection,
                activeSortIndex: action.index
            };

        case FILTER_DATA:
            let newStateFilter = {...state};
            newStateFilter.cellsReserv = [...newStateFilter.cellsReserv]
            let newCellsFilter;
            let arrFilter = [];
            for (let i = 0; i < newStateFilter.cellsReserv.length / state.columns.length; i++) {
                arrFilter.push(i);
            }
            let portionForFilter = 0;
            let lastForFilter = -1-state.columns.length;

            newCellsFilter = arrFilter.map(item => {
                portionForFilter += state.columns.length;
                lastForFilter += state.columns.length;
                return newStateFilter.cellsReserv.filter((cell, index) => index < portionForFilter && index > lastForFilter)
            })


            let filteredCells = newCellsFilter.filter(item => {

                for (let key in state.filterArray) {
                    if (item[key].value === undefined || item[key].value != state.filterArray[key])
                        return false;
                }
                return true;


            })
            if (state.activeSortIndex !== null) {


                filteredCells.sort((a, b) => {
                    if (state.activeSortIndex === 2 || state.activeSortIndex === 3) {
                        return state.sortDirection ? a[state.activeSortIndex].value < b[state.activeSortIndex].value ? -1 : 1 : a[state.activeSortIndex].value > b[state.activeSortIndex].value ? -1 : 1
                    } else {
                        return state.sortDirection ? a[state.activeSortIndex].value > b[state.activeSortIndex].value ? -1 : 1 : a[state.activeSortIndex].value < b[state.activeSortIndex].value ? -11 : 1
                    }
                })
            }
            let finallyCellsFiltered = filteredCells.reduce((a, b) => [...a, ...b], [])

            return {
                ...state,
                cells: finallyCellsFiltered
            };
        default:
            return state;
    }
};

export const setActiveSortIndex = (index) => ({
    type: SET_ACTIVE_SORT_INDEX,
    index
});

export const sortByIndex = (index) => ({
    type: SORT_BY_INDEX,
    index
});

export const changeSortDirectionByIndex = (index) => ({
    type: CHANGE_SORT_DIRECTION_BY_INDEX,
    index
});

export const filterData = (index, property) => ({
    type: FILTER_DATA,
    index,
    property,
});

export const setFilterData = (index, property) => ({
    type: SET_FILTER_DATA,
    index,
    property,
});

export const hideFilters = () => ({
    type: HIDE_FILTERS,
});

export const resetFilters = () => ({
    type: RESET_FILTERS,
});

export const resetFiltersThunkCreator = (index, property) => async (dispatch) => {

    dispatch(resetFilters());
    dispatch(filterData(index, property));

};


export default tableReducer;