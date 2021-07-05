import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import NewProjectForm from '../NewProjectForm/NewProjectForm';
import ProjectList from '../ProjectList/ProjectList';

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
        console.log(e.target.value);
        const { name, value } = e.target;
        setTempProjectData({ ...tempProjectData, [name]: value });

    }
   
    console.log(newProjectData);


    
    const handleNewProjectSubmit = (e) => {
        e.preventDefault();
        const projectData = newProjectData;
        projectData.push(tempProjectData);
        setNewProjectData(projectData);
        setNewProject(false);
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
                            <div className="text-center d-flex justify-content-center" >
                                <h2>Project List(<span style={{color:"red"}} >{newProjectData.length}</span>)  </h2>
                                <button className="btn" onClick={(e) => handleNewProject(e)} >  <FontAwesomeIcon icon={faPlus} /> <b>New Project</b></button>

                            </div>
                            <ProjectList newProjectData={newProjectData} ></ProjectList>
                        </>
                    )
            }
        </div>
    );
};

export default ProjectHeader;