import { TableAction, TableColumns } from "src/types/Table";
import { tableDataMapper } from "./tableMapper";
import styles from "./TableComponent.module.scss";

interface ITableComponentProps<T> {
  columns: TableColumns<T>;
  data?: any[];
  actionMapper: (action?: TableAction) => ((record: any) => void) | undefined;
}

const TableComponent = <T,>({
  columns,
  data,
  actionMapper,
}: ITableComponentProps<T>) => {
  return (
    <div className={styles["table-component"]}>
      <table>
        <thead>
          <tr className="!text-[#AFAFAF]">
            {columns.map(({ key, title, className }) => (
              <th key={key} className={className}>
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={item?.id || index}>
              {columns.map((column) => (
                <td key={column.key} className={column.className}>
                  {tableDataMapper(
                    column,
                    item,
                    column.actions?.map((action) => actionMapper(action)) || []
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
