import StatusBadge from "./StatusBadge";
import ActionButtons from "./ActionButtons";

type Student = {
  id: number;
  code: string;
  name: string;
  dob: string;
  email: string;
  status: "active" | "inactive";
};

function StudentRow({ student }: { student: Student }) {
  return (
    <tr>
      <td>{student.id}</td>
      <td>{student.code}</td>
      <td>{student.name}</td>
      <td>{student.dob}</td>
      <td>{student.email}</td>
      <td><StatusBadge status={student.status} /></td>
      <td><ActionButtons /></td>
    </tr>
  );
}

export default StudentRow;
