import React from 'react';

const NewProjectForm = (props) => {

    const handleNewProjectData = props.handleNewProjectData;

    const handleNewProjectSubmit = props.handleNewProjectSubmit;

    return (
        <div className="mt-5 " >
            <h2 className="text-center mb-4" > Add Your New Project Data</h2>
            <div className=" d-flex justify-content-center " >

                <form className="w-50 border border-success border-4 p-5" >
                    <div className="mb-3">
                        <input type="text" onBlur={handleNewProjectData} name="project_name" className="form-control" id="Project_Name101" placeholder="Project Name" />
                    </div>
                    <div className="mb-3">
                        <input type="text" onBlur={handleNewProjectData} name="project_description" className="form-control" id="Project_Description102" placeholder="Project Description" />
                    </div>
                    <div className="mb-3">
                        <input type="text" onBlur={handleNewProjectData} name="assign_to" className="form-control" id="Assign_To103" placeholder="Assign To" />
                    </div>
                    <div className="mb-3">
                        <input type="text" onBlur={handleNewProjectData} name="start_date" className="form-control" id="Start_Date104" placeholder="Start Date" />
                    </div>
                    <div className="mb-3">
                        <input type="text" onBlur={handleNewProjectData} name="end_date" className="form-control" id="End_date105" placeholder="End date" />
                    </div>
                    <button type="submit" onClick={(e) => handleNewProjectSubmit(e)} className="btn btn-outline-success">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default NewProjectForm;