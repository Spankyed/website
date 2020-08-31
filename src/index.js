import { h , app } from 'hyperapp'
import { location, Route,  Switch, Link } from "@hyperapp/router"
import './style.css'
import  Home  from './pages/home'
import  Blogs  from './pages/blogs/blogs'
import  Blog  from './pages/blogs/blog'
import  Projects  from './pages/projects/projects'
import  data  from './data'

const home = Home()
const blogs = Blogs(data.blogs) // data.blogs sets initial value for module
const projects = Projects(data.projects)

const state = {
  location: location.state,
  home: home.state, // router module
  blogs: blogs.state,
  projects: projects.state
}

const actions = {
  location: location.actions,
  home: home.actions,
  blogs: blogs.actions,
  projects: projects.actions
}

const view = ( state, actions ) => {
  const index = {
    home: home.view(state.home, actions.home),
    blogs: blogs.view(state.blogs, actions.blogs),
    projects: projects.view(state.projects, actions.projects)
  };
  
  return (
    <div class="relative">
      <Switch>    
        <Route path="/" render={ index.home } />   
        <Route parent path="/projects" render={ index.projects } /> 
        <Route parent path="/blogs" render={ index.blogs } />               
      </Switch>
      { !state.home.audioPlaying ? "": 
          <button onclick={actions.home.pauseAudio} class="fixed bottom-0 left-0 w-8 m-3 class w-10 h-10 bg-reddish rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"><img class="p-1" src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Mute_Icon.svg"/></button>   
      }
    </div>
  )
}

const main = app(state, actions, view, document.body)

const unsubscribe = location.subscribe(main.location)