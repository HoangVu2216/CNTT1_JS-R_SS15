import StudentRow from "./StudentRow";

const students = [
  {
    id: 1,
    code: "SV001",
    name: "Nguyễn Văn A",
    dob: "21/12/2023",
    email: "nva@gmail.com",
    status: "active" as const,
  },
  {
    id: 2,
    code: "SV002",
    name: "Nguyễn Thị B",
    dob: "21/11/2022",
    email: "ntb@gmail.com",
    status: "inactive" as const,
  },
];

function StudentTable() {
  return (
    <table border={1} cellPadding={8} style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th>STT</th>
          <th>Mã sinh viên</th>
          <th>Tên sinh viên</th>
          <th>Ngày sinh</th>
          <th>Email</th>
          <th>Trạng thái</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <StudentRow key={s.id} student={s} />
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
