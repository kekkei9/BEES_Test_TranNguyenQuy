import React, { useState } from "react";
import useSWR from "swr";
import { TableAction, TableColumns } from "../../types/Table";
import { PaginationResponseBase } from "../../types/ResponseBase";
import TableComponent from "../../components/TableComponent";
import Pagination from "../../components/Pagination";
import styles from "./TableContainer.module.scss";
import { axiosClient } from "src/services/backend/axiosClient";

type ITableContainerProps<T> = {
  columns: TableColumns<T>;
  fetchKey: string;
  pagination?: boolean;
  fetcher: (currentPage: number) => any;
  className?: string;
  header?: (response?: PaginationResponseBase<T>) => React.ReactNode;
  pageSize: number;
};

const TableContainer = <T,>({
  columns,
  fetchKey,
  pagination,
  fetcher,
  header,
  pageSize,
}: ITableContainerProps<T>) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data: response, mutate } = useSWR<PaginationResponseBase<T>>(
    `/page_url/${fetchKey}?page=${currentPage}`,
    () => fetcher(currentPage)
  );

  const actionMapper = (
    action?: TableAction
  ): ((record: any) => void) | undefined => {
    if (!action) return undefined;
    switch (action) {
      case "SEE_DETAIL":
        return (record) => {
          console.log(record);
        };
      case "EDIT":
        return (record) => {
          console.log(record);
        };
      case "DELETE":
        return async (record) => {
          if (!fetchKey) return;
          try {
            const res = await axiosClient.delete(`/${fetchKey}/${record.id}`);
            if (res.status === 204) {
              mutate();
            }
          } catch (e) {
            console.log(e);
          }
        };
    }
  };

  return (
    <div className={styles["table-container"]}>
      {header && header(response)}
      <div>
        <TableComponent
          columns={columns}
          data={response?.data?.items}
          actionMapper={actionMapper}
        />
        <div className="interactive-panel">
          <div>{response?.data?.total} results</div>
          {pagination && (
            <Pagination
              value={currentPage}
              onChange={setCurrentPage}
              total={Math.floor((response?.data?.total || 0) / pageSize)}
              maxBulletNumber={10}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TableContainer;
