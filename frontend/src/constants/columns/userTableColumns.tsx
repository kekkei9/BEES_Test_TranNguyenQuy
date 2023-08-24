import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TableColumns } from "../../types/Table";
import { TUser } from "../../types/User";
import { dateToReadableString } from "../../utils/date";
import { numberThousandSeparator } from "../../utils/number";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import OnHoverDisplay from "src/components/OnHoverDisplay";

const userColumns: TableColumns<TUser> = [
  {
    title: "Name",
    key: "name",
    render: (record) => <div style={{ width: "200px" }}>{record.name}</div>,
  },
  {
    title: "Balance ($)",
    key: "balance",
    render: (record) => <div>${numberThousandSeparator(record.balance)}</div>,
  },
  {
    title: "Email",
    key: "email",
    render: (record) => (
      <a href={record.email}>
        <div style={{ width: "350px" }}>{record.email}</div>
      </a>
    ),
  },
  {
    title: "Register At",
    key: "registeredAt",
    render: (record) => (
      <OnHoverDisplay
        render={(isShowFull) =>
          isShowFull ? record.registerAt : record.registerAt.split(" ")[0]
        }
      />
    ),
  },
  {
    title: "Status",
    key: "status",
    className: "!text-center w-[10rem]",
    render: (record) => (
      <div
        style={{
          color: record.active ? "green" : "red",
          fontWeight: 500,
          borderRadius: "8px",
          border: "1px solid",
          padding: "2px 4px",
          textAlign: "center",
        }}
      >
        {record.active ? "ONLINE" : "OFFLINE"}
      </div>
    ),
  },
  {
    title: "Action",
    key: "action",
    actions: ["EDIT", "DELETE"],
    className: "!text-center",
    render: (_, [edit, deleteAction]) => (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "12px",
        }}
      >
        <FontAwesomeIcon icon={faPen} onClick={edit} cursor="pointer" />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={deleteAction}
          cursor="pointer"
        />
      </div>
    ),
  },
];

export default userColumns;
