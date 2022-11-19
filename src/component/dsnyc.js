
function Qlnyc(props) {

    let { listNYC, editDataFunc } = props; 

    return (

        <div>
            <h2>Danh sách người yêu cũ</h2>

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Họ tên</th>
                        <th>Tuổi</th>
                        <th>Giới tính</th>
                        <th>Địa chỉ</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {listNYC.map((x, index) => (
                        <tr key={x.id}>
                            <td>{index+1}</td>
                            <td>{x.name}</td>
                            <td>{x.age}</td>
                            {x.gender == 0 && <td>Nam</td>}
                            {x.gender == 1 && <td>Nữ</td>}
                            {x.gender == 2 && <td>Khác</td>} 
                            <td>{x.address}</td>
                            <td>
                                <button className="btn btn-primary">Thêm</button>
                                <button onClick={()=>editDataFunc(x)} className="btn btn-danger">Sửa</button>
                                <button className="btn btn-success">Xóa</button>
                            </td>
                        </tr>
                    ))}

                   
                </tbody>
            </table>
        </div>

    )
}


export default Qlnyc;