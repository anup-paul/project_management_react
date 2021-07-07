import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';


const ProjectList = (props) => {

    const newProjectData = props.newProjectData;
    const handleEditProject = props.handleEditProject;
    const handleDeleteProject = props.handleDeleteProject;
    const handleSingleProject = props.handleSingleProject;

    const newTaskData = props.newTaskData;

    return (
        <div  >
            <table class="table border mt-3">
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
                        newProjectData.map(data =>
                            <tr>
                                <td
                                    onClick={(e) => handleSingleProject(e, data)}
                                >
                                    <b>{data.project_name} (<b style={{color:"red"}} > {newTaskData.length} </b> ) <FontAwesomeIcon icon={faPlus} style={{color:"red"}} /> </b> 
                                </td>
                                <td>{data.assign_to}</td>
                                <td>{data.start_date}</td>
                                <td>{data.end_date}</td>
                                <td ><FontAwesomeIcon
                                    style={{ color: "blue" }}
                                    icon={faEdit}
                                    onClick={() => handleEditProject(data)}
                                />
                                </td>
                                <td > <FontAwesomeIcon
                                    style={{ color: "red" }}
                                    icon={faTrashAlt}
                                    onClick={() => handleDeleteProject(data)}
                                />
                                </td>
                            </tr>
                        )
                    }


                </tbody>
            </table>
        </div>
    );
};

export default ProjectList;