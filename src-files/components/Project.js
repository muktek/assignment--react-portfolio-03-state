import React, { Component } from 'react';


/*
  Note : Eacn <Project/> component will need to receive props from the FilterProjects
         component to write the code to render:

    + the project name inside the <span> ... </span>
    + the appropriate className for a team project or solo project
*/

class Project extends Component {

  render() {
    const theProjectName = 'THE PROJECT NAME' // pass in value as props

    const soloProjectClassName = 'project--solo'
    const teamProjectClassName = 'project--team'


    return (
      return <div className={`project ${projectClassName}`}>
        <span className="project__title">{theProjectName}</span>
      </div>
    );
  }
}


export default Project
