import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllTask = () => {
    const { user } = useAuth()
    const { refetch, data: tasks = [] } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/task')
            return res.data
        }
    })

    const userTask = tasks.filter(task => task?.email == user?.email)

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/task/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your Task has been deleted.',
                                'success'
                            )

                        }
                    })
            }
        })
    }
    return (
        <div className="grid grid-cols-1 gap-4">
            {
                userTask.map(task => (<div key={task._id} className="card w-96 bg-base-100 shadow-xl border">
                    <div className="card-body">
                        <h2 className="card-title">{task.title}</h2>
                        <p>{task.description}</p>
                        <div className="flex">
                            <p>Date : {task.date}</p>
                            <p>Priority : {task.priority}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button onClick={() => handleDelete(task._id)} className="btn btn-primary btn-sm btn-outline">Delete</button>
                            <Link to={`/dashboard/updateTask/${task._id}`}><button className="btn btn-primary btn-sm btn-outline">Update</button></Link>
                        </div>
                    </div>
                </div>))
            }
        </div>
    );
};

export default AllTask;