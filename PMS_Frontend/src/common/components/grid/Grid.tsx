// import * as React from "react";
// import {
//   DataGrid,
//   type GridPaginationModel,
//   type GridColDef,
// } from "@mui/x-data-grid";
// import axios, { type AxiosRequestConfig } from "axios";

// type ServerDataGridProps = {
//   columns: GridColDef[];
//   apiEndpoint: string;
//   queryParams?: Record<string, string | number | boolean>;
//   pageSizeOptions?: number[];
//   requestTransformer?: (params: Record<string, number>) => AxiosRequestConfig;
// };

// export default function ServerDataGrid({
//   columns,
//   apiEndpoint,
//   queryParams = {},
//   pageSizeOptions = [5, 10, 20],
//   requestTransformer,
// }: ServerDataGridProps) {
//   const [rows, setRows] = React.useState<object[]>([]);
//   const [rowCount, setRowCount] = React.useState<number>(0);
//   const [loading, setLoading] = React.useState<boolean>(false);

//   const [paginationModel, setPaginationModel] =
//     React.useState<GridPaginationModel>({
//       page: 0,
//       pageSize: pageSizeOptions[0],
//     });
//   type GridSortModel = Array<{ field: string; sort: "asc" | "desc" }>;
//   type SortItem = { field: string; sort: "asc" | "desc" };

//   const [sortModel, setSortModel] = React.useState<GridSortModel>([]);

//   React.useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);

//       try {
//         const sort: SortItem | undefined = sortModel[0];
//         type BaseQueryParams = {
//           page: number;
//           pageSize: number;
//           sortField?: string;
//           sortDirection?: 'asc' | 'desc';
//         };
//         type ServerParams = BaseQueryParams & ServerDataGridProps['queryParams'];
//         const defaultParams: ServerParams  = {
//           page: paginationModel.page,
//           pageSize: paginationModel.pageSize,
//           ...(sort && {
//             sortField: sort.field,
//             sortDirection: sort.sort,
//           }),
//           ...queryParams,
//         };

//         const requestConfig: AxiosRequestConfig  = requestTransformer?.(
//           // defaultParams
//         ) ?? {
//           url: apiEndpoint,
//           method: "get",
//           params: defaultParams,
//         };

//         const response = await axios(requestConfig);

//         // Ensure proper types for API response
//         const responseRows = response.data?.rows ?? [];
//         const responseTotal = response.data?.totalRowCount ?? 0;

//         setRows(responseRows);
//         setRowCount(responseTotal);
//       } catch (error) {
//         console.error("ServerDataGrid error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [apiEndpoint, paginationModel, sortModel, JSON.stringify(queryParams)]);

//   return (
//     <div style={{ height: 500, width: "100%" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         rowCount={rowCount}
//         loading={loading}
//         paginationModel={paginationModel}
//         paginationMode="server"
//         onPaginationModelChange={setPaginationModel}
//         sortingMode="server"
//         sortModel={sortModel}
//         // onSortModelChange={setSortModel}
//         pageSizeOptions={pageSizeOptions}
//       />
//     </div>
//   );
// }
