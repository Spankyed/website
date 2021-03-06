import { h } from 'hyperapp';
import { Link, Route } from "@hyperapp/router"
import Blog from './blog.js'
import { Enter } from "hyperapp-transitions"

// Blogs Module

let BlogLink = ({match, blog, setBlog}) => {
  return (
    <Link to={`${match.path}/${blog.id}`} class="mx-auto mb-8 mx-8 bg-reddish rounded-lg shadow block flex-wrap flex w-11/12 text-white" href="/updating-to-babel-7.4/">
      <div class="w-full md:w-1/2 shadow bg-dark-100 rounded-lg rounded-r-none min-h-featured-item bg-center bg-no-repeat" style={`background-size: ${blog.imgSizes[0]};`}>
        <img src={blog.image} loading="lazy" alt="..." style="width:100%; height:100%;object-fit: cover;"/>
      </div>
      <div class="w-full md:w-1/2 p-4">
        <div class="border-b border-gray-700 text-center">
          <p class="text-sm md:text-base font-normal text-gray-800 -pt-1 -mb-1">
            {blog.date}
          </p>
          <h3 class="font-bold text-3xl mb-2 inline-block text-gray-200">{blog.title}</h3>   

        </div>

        <p class="text-gray-200 my-4 h-auto text-base overflow-hidden">{blog.description}</p>

        <div class="text-gray-800 flex items-center justify-between">
          <div>
          {
            blog.tags
            .map( tag => (
              <span class="inline-block rounded-sm text-xs text-grey-darker bg-yurp py-1 px-2 mr-2 mb-1 ml-0 leading-none">
              #{tag}
              </span>
            ))
          }
          </div>
          <p class="text-xs md:text-sm font-semibold">{blog.readTime} MIN READ</p>
        </div>       
      </div>
    </Link>
  )
}

// initial: data.blogs
export default initial => ({
  state: {
    blogs: initial,
    ...Blog.state,
  },
  actions: {
    ...Blog.actions,
  },
  view: (state, actions) => ({match}) => {
    const BlogView = Blog.view

    return (
      <div>
      {
        match.params
        ?
        (<Route parent path={`${match.path}/:blog_id`} render={ BlogView(state, actions) } />)
        :
        (
          <Enter css={{opacity: "0", transform: "translateX(100%)"}}>
            <div class="container mx-auto min-h-screen">
              <section class="leading-tight py-6 px-4">
                <div class="bg-gray-700 text-white py-2 sm:w-5/6 sm:mx-auto">
                  <header class="bg-cyan-300">
                    <div class="container">
                        <div class="text-white font-serif text-center">
                            <h1 class="font-serif font-black text-5xl mb-2">Blog</h1>
                            <h2 class="font-light">The Web Developer Soapbox.</h2>
                        </div>
                    </div>
                  </header>     
                </div>
              </section>
              {
                state.blogs.map( blog => ( <BlogLink blog={blog} match={match} setBlog={actions.setBlog}/> ))
              }
            </div>
          </Enter>
        )       
      }     
      </div>
    )
  }
});
/* switch might eliminate coniditional
<Switch></Switch>
*/
