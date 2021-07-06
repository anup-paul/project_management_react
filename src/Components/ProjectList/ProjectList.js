import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const ProjectList = (props) => {

     const newProjectData = props.newProjectData;
     const handleEditProject = props.handleEditProject;
     const handleDeleteProject = props.handleDeleteProject;

    return (
        <div className=" d-flex justify-content-center" >
            <table class="table w-75">
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
                                <td>{data.project_name}</td>
                                <td>{data.assign_to}</td>
                                <td>{data.start_date}</td>
                                <td>{data.end_date}</td>
                                <td ><FontAwesomeIcon
                                    style={{color:"blue"}}
                                    icon={faEdit }
                                    onClick={()=>handleEditProject(data)}
                                    />
                                </td>
                                <td > <FontAwesomeIcon  
                                    style={{color:"red"}}  
                                    icon={faTrashAlt}
                                    onClick={()=>handleDeleteProject(data)}
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