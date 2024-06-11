import React from "react";

export default function B9() {
  return (
    <>
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Họ và tên</th>
            <th scope="col">Ngày sinh</th>
            <th scope="col">Giới tính</th>
            <th scope="col">Địa chỉ</th>
            <th scope="col">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>abcxyz</td>
            <td>30/02/2004</td>
            <td>Nam</td>
            <td>Hà Nội</td>
            <td>
              <button
                style={{ border: "1px solid black", backgroundColor: "white" }}
              >
                Sửa
              </button>
              <button
                style={{
                  border: "1px solid black",
                  backgroundColor: "red",
                  color: "white",
                  margin: "10px",
                }}
              >
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
