import { useForm } from 'react-hook-form'
import { useEffect } from 'react';

function Form(props) {
    
    let { register, handleSubmit, reset } = useForm();
    let {addNYC, obj} = props

    const submitData = (data) => {
       addNYC(data);
    }
    
    useEffect(()=>{
        reset({...obj});
    },[obj])
   

    return (
        <div>
            <h2>Quản Lý Người yêu cũ</h2>
            <form onSubmit={handleSubmit(submitData)}>
                <div className='row mb-4'>
                    <div className='col-md-4'>
                        <p> Họ và tên  </p>
                    </div>
                    <div className='col-md-8'>
                        <input {...register('name')}  className='form-control' />
                    </div>
                </div>
                <div className='row mb-4'>
                    <div className='col-md-4'>
                        <p> Tuổi  </p>
                    </div>
                    <div className='col-md-8'>
                        <input {...register('age')} className='form-control' />
                    </div>
                </div>

                <div className='row mb-4'>
                    <div className='col-md-4'>
                        <p> Giới tính  </p>
                    </div>
                    <div className='col-md-8'>
                        <select  {...register('gender')} className='form-control'>
                            <option value='0'> Nam  </option>
                            <option value='1'> Nữ</option>
                            <option value='-1'> Khác </option>
                        </select>
                    </div>
                </div>
                <div className='row mb-4'>
                    <div className='col-md-4'>
                        <p> Địa chỉ </p>
                    </div>
                    <div className='col-md-8'>
                        <input  {...register('address')}  className='form-control' />
                    </div>
                </div>
                <div className='mt-4'>
                    <button type='submit' className='btn btn-primary'> Submit </button>
                </div>
            </form>
        </div>
    )
}

export default Form;