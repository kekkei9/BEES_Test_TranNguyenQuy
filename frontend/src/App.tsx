import "./App.css";
import userColumns from "./constants/columns/userTableColumns";
import TableContainer from "./containers/TableContainer";
import { axiosClient } from "./services/backend/axiosClient";
import { PaginationResponseBase } from "./types/ResponseBase";
import { TUser } from "./types/User";

const PAGE_SIZE = 10;

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TableContainer
        columns={userColumns}
        fetchKey="users"
        fetcher={async (currentPage) =>
          (
            await axiosClient.get<PaginationResponseBase<TUser>>(
              `/users?page=${currentPage}&pageSize=${PAGE_SIZE}`
            )
          ).data
        }
        pagination
        pageSize={PAGE_SIZE}
      />
    </div>
  );
}

export default App;
