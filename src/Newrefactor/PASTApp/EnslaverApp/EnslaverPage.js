import {useEffect, useMemo, useState} from "react";
import axios from "axios";
import Table from "../../CommonComponent/Table/Table";
import * as options_flat from "./options.json";
import {enslaver_var_list as variables_tree,enslaver_default_list} from "./var";
import Cell from "../../CommonComponent/Table/Cell";
import NavBar from "../../CommonComponent/NavBar";
import Filter from "../../CommonComponent/Filter/Filter"

const AUTH_TOKEN = process.env.REACT_APP_AUTHTOKEN;
axios.defaults.baseURL = process.env.REACT_APP_BASEURL;
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
const endpoint = "past/enslavers/";

export default function EnslaverPage(props) {
  const [dataset, setDataset] = useState(0);
  const [filter_object, set_filter_object] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [pagination, setPagination] = useState({
    currPage: 0,
    rowsPerPage: 10,
    totalRows:0,
  });
  const [dataList, setDataList] = useState([]);
  const [sortModel, setSortModel] = useState([{ field: "id", sort: "asc" }]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const state = {dataset, setDataset, drawerOpen, setDrawerOpen, pageType: "enslaver"};
  const state2 = {filter_obj: filter_object, set_filter_obj: set_filter_object, dataset, setDataset, drawerOpen, setDrawerOpen, pageType: "enslaver", options_flat, variables_tree}
  const defaultColumns = useMemo(() => {
    const result = [];
    enslaver_default_list.forEach((column) => {
      result.push({
        field: column,
        headerName: options_flat[column].flatlabel,
        renderCell: Cell,
        //minWidth: 160,
        //flex: 1,
        minWidth: options_flat[column].flatlabel.length * 6 + 100,
        maxWidth: 300,
      });
    });
    return result;
  }, [enslaver_default_list]);

  useEffect(() => {
    //console.log("fetching...", pagination);
    setIsLoading(true);
    setDataList([]);
    let queryData = new FormData();
    queryData.append("hierarchical", "False");
    queryData.append("results_page", pagination.currPage + 1);
    queryData.append("results_per_page", pagination.rowsPerPage);
    if (sortModel.length !== 0) {
      sortModel.map((field) => {
        if (field.sort === "asc") {
          queryData.append("order_by", field.field);
        } else if (field.sort === "desc") {
          queryData.append("order_by", "-" + field.field);
        }
      });
    }
    axios.post("/" + endpoint, queryData).then((res) => {
      setPagination({...pagination, totalRows: Number(res.headers.total_results_count)});
      setDataList(res.data);
      setIsLoading(false);
    });
  }, [pagination.currPage, pagination.rowsPerPage, filter_object, sortModel]);

  return (
    <div style={{height: "100%"}}>
      <NavBar state={state}/>
      <Filter state={state2}/>
      {/* <NavBar state={{pageType: "enslaver", dataset, setDataset}}/> */}
      {/*<Button onClick={()=>console.log(dataList)}>Print Data</Button>*/}
      <Table
        state={{
          pageType:"enslaver",
          dataList,
          pagination,
          setPagination,
          sortModel,
          setSortModel,
          filter_object,
          set_filter_object,
          isLoading,
          defaultColumns,
        }}
      />
    </div>
  );
}