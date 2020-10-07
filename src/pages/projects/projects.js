import { h } from 'hyperapp';
import { Link, Route } from "@hyperapp/router"
import Project from './project.js'

// Projects Module

let ProjectLink = ({match, project}) => {
  function routeClick(project){ return project.external ? project.link : `${match.path}/${project.id}`}
  return ( 
    <div class="project-link bg-reddish shadow-lg border border-yellow text-grey-80 w-full max-w-lg mb-8 md:mx-8">
      <Link to={ routeClick(project) } class="project-link no-underline" target={`${project.external? '_blank' : ''}`}>
        <header class="project-thumbnail relative h-64 border-b-4 border-yellow bg-cover bg-center" style={`background-image: url(${project.image});`}>
          <div class="overlay flex items-end justify-center px-2 absolute h-full w-full bg-black-alpha-30">
            <h2 class="bg-yellow text-xl text-black p-4">{project.title}</h2>
          </div>
        </header>
        <div class="project-summary text-grey-80 p-4 text-center leading-normal">
          <div>
            <span class="border-b-2 border-grey-60">{project.tools}</span>
          </div>  
          <p class="my-3">{project.description}</p>
        </div>
      </Link>
    </div>
  )
}

// initial: data.projects
export default initial => ({
  state: {
    projects: initial
  },
  actions: {},
  view: (state, actions) => ({match}) => (  
    <div>
      {
        match.params
        ?
        (<Route parent path={`${match.path}/:project_id`} render={ Project(state.projects, actions) } />)
        :
        (
          <div class="container mx-auto min-h-screen">
            <section class="leading-tight py-6 px-4">
              <div class="bg-gray-700 text-white py-2 sm:w-5/6 sm:mx-auto">
                <header class="bg-cyan-300">
                  <div class="container">
                      <div class="text-white font-serif text-center">
                          <h1 class="font-serif font-black text-5xl mb-2">Projects</h1>
                          <h2 class="font-light">Applications I've designed and developed.</h2>
                      </div>
                  </div>
                </header>   
              </div>
            </section>
            <section class="project-list px-4 sm:flex sm:justify-center sm:flex-wrap">
            {
              state.projects
              .map( project => (
                <ProjectLink project={project} match={match}/>
              ))
            }            
            </section>
          </div>
        )
      }
    </div>
  )
});

/*
  class={`font-light bg-${theme}-dark text-${theme}-darker hover:bg-${theme}-lighter`}
 <Enter time={200} easing="ease-in-out" 
        css={{opacity: "0", transform: "scale(1,1)"}}>

        import { Enter } from "@hyperapp/transitions"
*/