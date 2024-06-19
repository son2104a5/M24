import { useDispatch, useSelector } from "react-redux"
import { RootType } from "../store/store"
import Form from 'react-bootstrap/Form';
import { changeList, changeStatus } from "./action";
import { act, useState } from "react";

interface Book {
    id: number;
    name: string;
    stdBorrow: string;
    borrowDate: string;
    payback: string;
    status: boolean
}

const style = {
    border: '1px solid lightgray',
    backgroundColor: 'white',
    color: 'black',
    padding: '10px',
}

let date = new Date()
let minDate = date.toISOString().split('T')[0]
let minPayDate: any;
export default function BookList() {
    const [turnOn, setTurnOn] = useState<boolean>(false)
    const [formBook, setFormBook] = useState<Book>({
        id: 0,
        name: '',
        stdBorrow: '',
        borrowDate: '',
        payback: '',
        status: true
    })
    const [isEdit, setIsEdit] = useState<boolean>(true)
    const bookList = useSelector((state: RootType) => state)
    const dispatch = useDispatch()
    const handleListChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeList(e.target.value))
    }
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>, bookId: number) => {
        dispatch(changeStatus(bookId, e.target.value === 'true'))
    }
    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {

    }
    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    }
    const openForm = (action: string) => {
        setTurnOn(true);
        action === 'add' ? setIsEdit(false) : setIsEdit(true);
    }
    const hideForm = () => {
        setTurnOn(false);
    }
  return (
    <div>
        <div className="flex justify-between p-4">
            <strong className="text-3xl">Quản lí mượn trả sách</strong>
            <div className="flex gap-10">
                <Form.Select onChange={handleListChange} aria-label="Default select example" className="border-2 border-solid border-slate rounded w-[200px]">
                    <option hidden>Lọc theo trạng thái</option>
                    <option value="true">Đã trả</option>
                    <option value="false">Chưa trả</option>
                </Form.Select>
                <button className="bg-blue-500 text-white p-2 rounded" onClick={()=>openForm('add')}>Thêm thông tin</button>
            </div>
        </div>
        <table className="border-[1px] w-[100%]">
            <thead>
                <tr>
                    <th style={style}>STT</th>
                    <th style={style}>Tên sách</th>
                    <th style={style}>Sinh viên mượn</th>
                    <th style={style}>Ngày mượn</th>
                    <th style={style}>Ngày trả</th>
                    <th style={style}>Trạng thái</th>
                    <th style={style}>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {bookList.map((book: Book) => {
                    return (
                        <tr>
                            <td style={style}>{book.id}</td>
                            <td style={style}>{book.name}</td>
                            <td style={style}>{book.stdBorrow}</td>
                            <td style={style}>{book.borrowDate}</td>
                            <td style={style}>{book.payback}</td>
                            <td style={style} className="text-center">
                                <Form.Select aria-label="Default select example" onChange={(e)=>handleChange(e, book.id)} value={book.status ? 'true':'false'} style={{backgroundColor: `${book.status ? 'green':'red'}`}} className="rounded-[40px] text-center text-white">
                                    <option value="true">Đã trả</option>
                                    <option value="false">Chưa trả</option>
                                </Form.Select>
                            </td>
                            <td style={style} className="text-center">
                                <button onClick={()=>openForm('')} className='rounded p-1 bg-orange-200 text-orange-600 border-orange-400 border-[1px]'>Sửa</button>
                                <button className="rounded p-1 bg-red-200 text-[#f00] border-red-600 border-[1px] ml-[30px]">Xóa</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        {turnOn ? <div className="absolute w-[100%] h-[100vh] flex justify-center items-center bg-[#00000055] top-0 right-0">
            <form
                onSubmit={()=>handleSubmit}
                className="w-[600px] p-[30px] bg-white border-[1px] rounded-[10px]"
            >
                <h2 className="w-[100%] flex justify-between mb-[10px]">
                <p className="text-[24px]">
                    {isEdit ? "Sửa thông tin mượn sách" : "Thêm thông tin mượn sách"}
                </p>
                <p onClick={hideForm} className="text-[24px] cursor-pointer">
                    X
                </p>
                </h2>
                <label className="inline-block mb-[10px]">Tên sách</label>
                <input
                    value={formBook.name}
                    onChange={handleFormChange}
                    name="name"
                    className="w-[100%] rounded-[5px] h-[40px] pl-[10px] outline-none border-[1px] mb-[20px]"
                    type="text"
                />
                <label className="inline-block mb-[10px]">Tên người mượn</label>
                <input
                    value={formBook.stdBorrow}
                    onChange={handleFormChange}
                    name="studentName"
                    className="w-[100%] rounded-[5px] h-[40px] pl-[10px] outline-none border-[1px] mb-[20px]"
                    type="text"
                />
                <label className="inline-block mb-[10px]">Ngày mượn</label>
                <input
                    value={formBook.borrowDate}
                    onChange={handleFormChange}
                    name="loanDate"
                    className="w-[100%] rounded-[5px] h-[40px] pl-[10px] outline-none border-[1px] mb-[20px]"
                    type="date"
                    min={minDate}
                />
                <label className="inline-block mb-[10px]">Ngày trả</label>
                <input
                    value={formBook.payback}
                    onChange={handleFormChange}
                    name="payDate"
                    className="w-[100%] rounded-[5px] h-[40px] pl-[10px] outline-none border-[1px] mb-[20px]"
                    type="date"
                    min={minPayDate}
                />
                <button
                type="submit"
                className="w-[100%] rounded-[5px] h-[40px] pl-[10px] bg-blue-500 border-[1px] text-white"
                >
                {isEdit ? "Sửa" : "Thêm"}
                </button>
            </form>
        </div> : ''}
    </div>
  )
}
