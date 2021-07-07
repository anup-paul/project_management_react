import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';


const TaskList = (props) => {


    const handleBack = props.handleBack;
    // const singleProjectTaskData = props.singleProjectTaskData;
    const newTaskData = props.newTaskData;
    const currentProject = props.currentProject;
    const taskData = newTaskData.filter(data => data.projectId === currentProject.id);

    const handleEditTask = props.handleEditTask;
    const handleDeleteTask = props.handleDeleteTask;

    return (
        <div>
            <div>
                <table class="table  border">
                    <thead>
                        <tr>

                            <th scope="col">Project Name</th>
                            <th scope="col">Assign To</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                    {
                        taskData.map(data =>
                            <tr>
                                <td>{data.task_name}</td>
                                <td>{data.task_assign_to}</td>
                                <td>{data.task_start_date}</td>
                                <td>{data.task_end_date}</td>
                                <td ><FontAwesomeIcon
                                    style={{color:"blue"}}
                                    icon={faEdit }
                                    onClick={(e)=>handleEditTask(e,data)}
                                    />
                                </td>
                                <td > <FontAwesomeIcon  
                                    style={{color:"red"}}  
                                    icon={faTrashAlt}
                                    onClick={(e)=>handleDeleteTask(e,data)}
                                    />
                                </td>
                            </tr>
                        )
                    }


                </tbody>
                </table>

            </div>
            <div className="d-flex justify-content-end mt-5" >
                <button className="btn btn-outline-primary" onClick={(e)=>handleBack(e)} > <FontAwesomeIcon   icon={faArrowAltCircleLeft} /> <b>Projects</b></button>
            </div>
        </div>
    );
};

export default TaskList;