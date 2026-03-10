import DataTable from "./courses-table";
import { data, columns } from "./columns";
import DashboardWrapper from "@/components/common/DashboardWrapper";

export default function Courses() {
   return (
      <DashboardWrapper>
         <DataTable data={data} columns={columns} />
      </DashboardWrapper>
   );
}
