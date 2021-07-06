import React from 'react';

const EditProjectForm = (props) => {

    const tempProjectData = props.tempProjectData;
    const handleNewProjectData = props.handleNewProjectData;
    const handleSubmitEditProject = props.handleSubmitEditProject;

    return (
        <div>
            <div className="mt-5 " >
            <div className=" d-flex justify-content-center " >
            <form className="w-50" >
                <div className="mb-3">
                    <input type="text" onChange={handleNewProjectData} value={tempProjectData.project_name}  name="project_name" className="form-control" id="Project_Name101"  placeholder="Project Name" />
                </div>
                <div className="mb-3">
                    <input type="text" onChange={handleNewProjectData} value={tempProjectData.project_description}  name="project_description" className="form-control" id="Project_Description102" placeholder="Project Description" />
                </div>
                <div className="mb-3">
                    <input type="text" onChange={handleNewProjectData} value={tempProjectData.assign_to} name="assign_to" className="form-control" id="Assign_To103"  placeholder="Assign To" />
                </div>
                <div className="mb-3">
                    <input type="text" onChange={handleNewProjectData} value={tempProjectData.start_date}  name="start_date" className="form-control" id="Start_Date104" placeholder="Start Date" />
                </div>
                <div className="mb-3">
                    <input type="text" onChange={handleNewProjectData} value={tempProjectData.end_date}  name="end_date" className="form-control" id="End_date105" placeholder="End date" />
                </div>
                <button type="submit"  onClick={(e)=>handleSubmitEditProject(e,tempProjectData.id)}  className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
        </div>
    );
};

export default EditProjectForm;