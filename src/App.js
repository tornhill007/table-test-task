import logo from './logo.svg';
import './App.css';
import Table from "./components/Table";
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect, Provider} from "react-redux";
import store from "./redux/store";
import {compose} from "redux";
import {
    changeSortDirectionByIndex,
    filterData, hideFilters, resetFilters, resetFiltersThunkCreator,
    setActiveSortIndex,
    setFilterData,
    sortByIndex
} from "./redux/tableReducer";

const App = (props) => {
    return <div className="App">
        <Table data={props.data}
               resetFiltersThunkCreator={props.resetFiltersThunkCreator}
               hideFilters={props.hideFilters}
               setFilterData={props.setFilterData}
               setActiveSortIndex={props.setActiveSortIndex}
               sortByIndex={props.sortByIndex}
               changeSortDirectionByIndex={props.changeSortDirectionByIndex}
               filterData={props.filterData}/>
    </div>
}


const mapStateToProps = (state) => ({
    data: state.tablePage
});

let AppContainer = compose(
    connect(mapStateToProps, {
        setActiveSortIndex,
        sortByIndex,
        changeSortDirectionByIndex,
        filterData,
        setFilterData,
        hideFilters,
        resetFiltersThunkCreator
    }))
(App);


const mainApp = () => {
    console.log()
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    );
}

export default mainApp;
