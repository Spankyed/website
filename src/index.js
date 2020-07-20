import { h , app } from 'hyperapp'
import { location, Route,  Switch, Link } from "@hyperapp/router"
import './style.css'
import  Home  from './pages/home'
import  Blogs  from './pages/blogs/blogs'
import  Projects  from './pages/projects/projects'
import  data  from './data'


const blogs = Blogs(data.blogs) // data.blogs sets initial value for module
const projects = Projects(data.projects)

const state = {
  location: location.state, // router module
  blogs: blogs.state,
  projects: projects.state
}

const actions = {
  location: location.actions,
  blogs: blogs.actions,
  projects: projects.actions
}

const view = ( state, actions ) => {
  const index = {
    blogs: blogs.view(state.blogs, actions.blogs),
    projects: projects.view(state.projects, actions.projects)
  };
  
  return (
    <div>
      <Switch>    
        <Route path="/" render={ Home } />   
        <Route parent path="/projects" render={ index.projects } />    
        <Route parent path="/blogs" render={ index.blogs } />        
      </Switch>
    </div>
  )
}

const main = app(state, actions, view, document.body)

const unsubscribe = location.subscribe(main.location)