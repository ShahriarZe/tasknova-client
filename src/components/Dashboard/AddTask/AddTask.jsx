import { useForm, } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
const priorities = ['Low', 'Moderate', 'High'];

const AddTask = () => {
    const { user } = useAuth()
    const userEmail = user?.email
    const { handleSubmit,
        reset,
        register,
        formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        axios.post('http://localhost:5000/task', data)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    reset
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Task Added Successfully',
                    })
                }
            })


    };
    return (
        <div className='max-w-5xl'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
                    <input
                        {...register('email', { required: 'Email is required' })}
                        name='email'
                        defaultValue={userEmail}
                        style={{
                            padding: '6px',
                            width: '100%',
                            boxSizing: 'border-box',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            marginBottom: '10px',
                        }}
                    />
                    {errors.email && <p style={{ fontSize: '14px' }}>{errors.email.message}</p>}
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Title:</label>
                    <input
                        {...register('title', { required: 'Title is required' })}
                        name='title'
                        style={{
                            padding: '6px',
                            width: '100%',
                            boxSizing: 'border-box',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            marginBottom: '10px',
                        }}
                    />
                    {errors.title && <p style={{ fontSize: '14px' }}>{errors.title.message}</p>}
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Description:</label>
                    <textarea
                        {...register('description', { required: 'Description is required' })}
                        name="description"
                        style={{
                            padding: '10px',
                            width: '100%',
                            boxSizing: 'border-box',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            marginBottom: '10px',
                        }}
                    />
                    {errors.description && <p style={{ fontSize: '14px' }}>{errors.description.message}</p>}
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Date:</label>
                    <input
                        type="date"
                        {...register('date', { required: 'Date is required' })}
                        name="date"
                        style={{
                            padding: '10px',
                            width: '100%',
                            boxSizing: 'border-box',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            marginBottom: '10px',
                        }}
                    />
                    {errors.date && <p style={{ fontSize: '14px' }}>{errors.date.message}</p>}
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Priority:</label>
                    <select
                        {...register('priority', { required: 'Priority is required' })}
                        name="priority"
                        style={{
                            padding: '10px',
                            width: '100%',
                            boxSizing: 'border-box',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            marginBottom: '10px',
                        }}
                    >
                        {priorities.map((priority) => (
                            <option key={priority} value={priority}>
                                {priority}
                            </option>
                        ))}
                    </select>
                    {errors.priority && <p style={{ color: 'red', fontSize: '14px' }}>{errors.priority.message}</p>}
                </div>
                <input className="btn btn-outline text-primary mb-10" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddTask;