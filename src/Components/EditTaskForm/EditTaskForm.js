import React from 'react';

const EditTaskForm = (props) => {

    const handleNewTaskData = props.handleNewTaskData;
    const tempTaskData = props.tempTaskData;

    const handelEditTaskSubmit = props.handelEditTaskSubmit;

    return (
        <div>
            <div className="mt-5 " >
                <h2 className="text-center mb-4" >Edit Task Data</h2>
                <div className=" d-flex justify-content-center " >
                <form className="w-50 border border-success border-4 p-5" >
                        <div className="mb-3">
                            <input type="text" onChange={handleNewTaskData} value={tempTaskData.task_name}  name="task_name" className="form-control" id="Task_Name101" placeholder="Task Name" />
                        </div>
                        <div className="mb-3">
                            <input type="text"  onChange={handleNewTaskData} value={tempTaskData.task_description}  name="task_description" className="form-control" id="Task_Description102" placeholder="Task Description" />
                        </div>
                        <div className="mb-3">
                            <input type="text"  onChange={handleNewTaskData} value={tempTaskData.task_assign_to}  name="task_assign_to" className="form-control" id="Task_Assign_To103" placeholder="Task Assign To" />
                        </div>
                        <div className="mb-3">
                            <input type="text"  onChange={handleNewTaskData} value={tempTaskData.task_start_date}  name="task_start_date" className="form-control" id="Task_Start_Date104" placeholder="Task Start Date" />
                        </div>
                        <div className="mb-3">
                            <input type="text"  onChange={handleNewTaskData} value={tempTaskData.task_end_date} name="task_end_date" className="form-control" id="Task_End_date105" placeholder="Task End date" />
                        </div>
                        <button onClick={(e)=>handelEditTaskSubmit(e,tempTaskData.id)}  type="submit"  className="btn btn-outline-success">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditTaskForm;