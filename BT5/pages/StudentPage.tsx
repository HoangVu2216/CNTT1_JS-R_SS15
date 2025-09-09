import StudentTable from "../components/StudentTable";

function StudentPage() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Quản lý sinh viên</h2>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
        <div>
          <select>
            <option>Sắp xếp theo tuổi</option>
          </select>
          <input placeholder="Tìm kiếm từ khóa theo tên hoặc email" style={{ marginLeft: "8px" }} />
        </div>
        <button style={{ background: "#3b82f6", color: "white", padding: "6px 12px", borderRadius: "6px" }}>
          Thêm mới sinh viên
        </button>
      </div>

      <StudentTable />

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button>{"<"}</button>
        <button style={{ background: "#3b82f6", color: "white" }}>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>{">"}</button>
      </div>
    </div>
  );
}

export default StudentPage;
