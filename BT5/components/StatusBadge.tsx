function StatusBadge({ status }: { status: "active" | "inactive" }) {
  return (
    <span
      style={{
        padding: "4px 8px",
        borderRadius: "8px",
        fontSize: "12px",
        color: status === "active" ? "green" : "red",
        background: status === "active" ? "#d4fcd4" : "#fcd4d4",
      }}
    >
      {status === "active" ? "Đang hoạt động" : "Ngừng hoạt động"}
    </span>
  );
}

export default StatusBadge;
