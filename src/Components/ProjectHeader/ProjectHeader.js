import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import NewProjectForm from '../NewProjectForm/NewProjectForm';
import ProjectList from '../ProjectList/ProjectList';
import EditProjectForm from '../EditProject/EditProjectForm';

const ProjectHeader = () => {

    const [newProject, setNewProject] = useState(false);
    const handleNewProject = (e) => {
        e.preventDefault();
        setNewProject(true);
        //console.log("Clicked");
    }



    const [newProjectData, setNewProjectData] = useState([]);
    const [tempProjectData, setTempProjectData] = useState({});
    const handleNewProjectData = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;
        setTempProjectData({ ...tempProjectData, [name]: value });

    }

     console.log(newProjectData);

    


    const handleNewProjectSubmit = (e) => {
        e.preventDefault();
        const projectData = newProjectData;
        projectData.push({...tempProjectData, id:projectData.length+1});
        setNewProjectData(projectData);
        setNewProject(false);
    }


    const [editProject, setEditProject] = useState(false);
    const handleEditProject = (data) => {
        
        setEditProject(true);
        setTempProjectData(data);
         
    }


    

    
    const handleSubmitEditProject = (e,id) => {
        e.preventDefault();
       
        const projectData = newProjectData;
        projectData[id-1] = tempProjectData;
        setNewProjectData(projectData);
       
        setEditProject(false);
        
    }



    const handleDeleteProject = (data) => {
        
        console.log(data);
    }


    return (
        <div>
            <h1 className="text-center mt-5" >Project Management System </h1>


            {
                newProject ?
                    (
                        <NewProjectForm
                            handleNewProjectData={handleNewProjectData}
                            handleNewProjectSubmit={handleNewProjectSubmit}

                        ></NewProjectForm>
                    )
                    :
                    (
                        <>
                            {
                                editProject ? 
                                    (
                                        <EditProjectForm
                                        tempProjectData={tempProjectData}
                                        handleNewProjectData={handleNewProjectData}
                                        handleSubmitEditProject={handleSubmitEditProject}
                                        >

                                        </EditProjectForm>
                                    )
                                    :
                                    (
                                        <>
                                            <div className="text-center d-flex justify-content-center" >
                                                <h2>Project List(<span style={{ color: "red" }} >{newProjectData.length}</span>)  </h2>
                                                <button className="btn" onClick={(e) => handleNewProject(e)} >  <FontAwesomeIcon icon={faPlus} /> <b>New Project</b></button>

                                            </div>
                                            <ProjectList
                                                newProjectData={newProjectData}
                                                handleEditProject={handleEditProject}
                                                handleDeleteProject={handleDeleteProject}
                                            >

                                            </ProjectList>
                                        </>
                                    )
                            }
                        </>
                    )
            }
        </div>
    );
};

export default ProjectHeader;