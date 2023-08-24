type TableColumn<T> = {
  title: string;
  key: string;
  className?: string;
  render?: (record: T, actionHandlers: (() => void)[]) => React.ReactNode;
};

export type TableAction = "SEE_DETAIL" | "EDIT" | "DELETE";

export type TableColumns<T> = (TableColumn<T> & {
  dataIndex?: string;
  actions?: TableAction[];
})[];
