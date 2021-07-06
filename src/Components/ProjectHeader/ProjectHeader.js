import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import NewProjectForm from '../NewProjectForm/NewProjectForm';
import ProjectList from '../ProjectList/ProjectList';
import EditProjectForm from '../EditProject/EditProjectForm';
import TaskList from '../TaskList/TaskList';
import NewTaskForm from '../../NewTaskForm/NewTaskForm';

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

    //  console.log(newProjectData);




    const handleNewProjectSubmit = (e) => {
        e.preventDefault();
        const projectData = newProjectData;
        projectData.push({ ...tempProjectData, id: projectData.length + 1 });
        setNewProjectData(projectData);
        setNewProject(false);
    }


    const [editProject, setEditProject] = useState(false);
    const handleEditProject = (data) => {

        setEditProject(true);
        setTempProjectData(data);

    }




    const handleSubmitEditProject = (e, id) => {
        e.preventDefault();
        const projectData = newProjectData;
        projectData[id - 1] = tempProjectData;
        setNewProjectData(projectData);
        setEditProject(false);

    }


    const handleDeleteProject = (data) => {
        const deleteProject = newProjectData.filter(deleteData => deleteData.id !== data.id);
        setNewProjectData(deleteProject);
    }


    const [singleProject, setSingleProject] = useState(false);
    const handleSingleProject = (e, data) => {
        e.preventDefault();
        setSingleProject(true);
        console.log("clicked: ", data);
    }


    const handleBack = (e) => {
        e.preventDefault();
        setSingleProject(false);
        console.log("check Back");
    }


    const [newTask, setNewTask] = useState(false);
    const handleNewTask = (e) => {
        e.preventDefault(e);
        setNewTask(true);
        console.log('Check Add Task')
    }


    const [newTaskData, setNewTaskData] = ([]);
    const [tempTaskData, setTempTaskData] = useState({})
    const handleNewTaskData = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;
        setTempTaskData({...tempTaskData, [name]:value});
    }
    console.log(tempTaskData);
    // console.log("checked:", newTaskData);

    const handleNewTaskSubmit = (e) => {
        e.preventDefault();
        // const addTaskData = newTaskData
        // addTaskData.push({...tempTaskData, id: addTaskData.length + 1 });
        // setNewTaskData(addTaskData);
         
    }


    return (
        <div>
            <h1 className="text-center mt-5" >Project Management System </h1>

            {
                singleProject ?
                    (
                        <>
                            {
                                newTask ?
                                    (
                                        <NewTaskForm
                                            handleNewTaskData={handleNewTaskData}
                                            handleNewTaskSubmit={handleNewTaskSubmit}
                                        ></NewTaskForm>
                                    )
                                    :
                                    (
                                        <>
                                            <div className="text-center d-flex justify-content-center" >
                                                <h2>Task List(<span style={{ color: "red" }} ></span>)  </h2>
                                                <button className="btn" onClick={(e) => handleNewTask(e)}  >  <FontAwesomeIcon icon={faPlus} /> <b>New Task</b></button>

                                            </div>
                                            <TaskList handleBack={handleBack} ></TaskList>
                                        </>
                                    )
                            }
                        </>
                    )

                    :
                    (
                        <>

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
                                                                handleSingleProject={handleSingleProject}
                                                            >

                                                            </ProjectList>
                                                        </>
                                                    )
                                            }
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