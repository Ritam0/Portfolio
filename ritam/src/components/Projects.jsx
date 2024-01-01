import React from 'react'
import './Projects.css'

const Projects = () => {
  const myProjects=[
    {
      id:'projects.1',
      thumbnail:'https://d3nn873nee648n.cloudfront.net/1200x1800-new/20374/PS1071169.jpg',
      name:'India Aura',
      details:'Aura of India',
      techStacks:'MongoDB , Express Js , React Js , Node Js',
      githubLink:'',
      livelink:''
    },
    {
      id:'projects.2',
      thumbnail:'https://d3nn873nee648n.cloudfront.net/1200x1800-new/20374/PS1071169.jpg',
      name:'Digicure',
      details:'Aura of India',
      techStacks:'MongoDB , Express Js , React Js , Node Js',
      githubLink:'',
      livelink:''
    },
    {
      id:'projects.3',
      thumbnail:'https://d3nn873nee648n.cloudfront.net/1200x1800-new/20374/PS1071169.jpg',
      name:'Fits You',
      details:'Aura of India',
      techStacks:'MongoDB , Express Js , React Js , Node Js',
      githubLink:'',
      livelink:''
    },
    {
      id:'projects.4',
      thumbnail:'https://d3nn873nee648n.cloudfront.net/1200x1800-new/20374/PS1071169.jpg',
      name:'Typing Speed Tester',
      details:'Aura of India',
      techStacks:'MongoDB , Express Js , React Js , Node Js',
      githubLink:'',
      livelink:''
    },
    {
      id:'projects.5',
      thumbnail:'https://d3nn873nee648n.cloudfront.net/1200x1800-new/20374/PS1071169.jpg',
      name:'Speech to Text converter',
      details:'Aura of India',
      techStacks:'MongoDB , Express Js , React Js , Node Js',
      githubLink:'',
      livelink:''
    },
    {
      id:'projects.6',
      thumbnail:'https://d3nn873nee648n.cloudfront.net/1200x1800-new/20374/PS1071169.jpg',
      name:'Card Match game',
      details:'Aura of India',
      techStacks:'MongoDB , Express Js , React Js , Node Js',
      githubLink:'',
      livelink:''
    }
  ]
  return (
    <div>
      <h1 className='projects_headline'>Projects</h1>

      <div className="project_card">
        {myProjects.map((projects)=>(
          <div key={projects.id} className="project_card">
            <div className="project_thumbnail">
                <img src={projects.thumbnail} alt="" width='300px'/>
            </div>
            <div className="project_name">
                <h4>{projects.name}</h4>
            </div>
            <div className="projet_description">
                <p>{projects.details}</p>
            </div>
            <div className="project_stack">
                <h5>{projects.techStacks}</h5>
            </div>
            <div className="project_github">
                <li>{projects.githubLink}</li>
            </div>
            <div className="project_link">
                <li>{projects.livelink}</li>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
