import { h } from 'hyperapp';
import { Link, Route, location } from "@hyperapp/router"
import Blog from './blog.js'

// Blogs Module
// initial: data.blogs
export default initial => ({
  state: {
    blogs: initial
  },
  actions: {
    increment: (evt) => state => ({ cat: 'meow' }),
  },
  view: (state, actions) => ({match}) => {
    return (
      <div>
      {
        match.params
        ?
        (<Route parent path={`${match.path}/:blog_id`} render={ Blog(state.blogs, actions) } />)
        :
        (
        <div class="container mx-auto min-h-screen">
          <section class="leading-tight py-6 px-4">
            <div class="bg-gray-700 text-white py-2 sm:w-5/6 sm:mx-auto">
              <header class="bg-cyan-300">
                <div class="container">
                    <div class="text-white font-serif text-center">
                        <h1 class="font-serif font-black text-5xl mb-2">Blog</h1>
                        <h2 class="font-light">The Communist Soapbox.</h2>
                    </div>
                </div>
              </header>     
            </div>
          </section>


    
          <Link to={`${match.path}/1`} class="mx-auto mb-8 bg-reddish rounded-lg shadow block flex-wrap flex w-full text-white" href="/updating-to-babel-7.4/">
            <div class="w-full md:w-1/2 shadow bg-dark-100 rounded-lg rounded-r-none min-h-featured-item bg-center bg-no-repeat"
            style="background-image: url(https://cdnb.artstation.com/p/assets/images/images/007/027/571/large/greg-rutkowski-dragon-cave-1920.jpg?1503141992);
                    background-size: 1100px;">
            </div>
            <div class="w-full md:w-1/2 p-4">
              <div class="border-b border-gray-700">
                <h3 class="font-bold text-3xl mb-4 inline-block ">Dungeons & Developers </h3>   
                <span class="pl-2 text-sm text-gray-800 font-semibold">
                  - June 12, 2019
                </span>
              </div>
    
              <p class="text-gray-200 my-4 h-24 text-base trunc">Alright so Im not a crappy person. Sometimes I just think like one. 
              Like this afternoon when I got a message from someone "looking for help with web design". It was obvious the guy had messaged the wrong person. I'm a web developer (aka software developer/engineer). Not a web designer... 
              </p>
      
              <div class="text-gray-800 flex items-center justify-between pt-2">
                <div>
                <span class="inline-block text-xs py-1 px-2 mt-0 mr-2 rounded-sm mb-1 ml-0 text-grey-darker bg-yurp leading-none">
                #Design
              </span>
              <span class="inline-block text-xs py-1 px-2 mt-0 mr-2 rounded-sm mb-1 ml-0 text-grey-darker bg-yurp leading-none">
                #Devopment
              </span>
              <span class="inline-block text-xs py-1 px-2 mt-0 mr-2 rounded-sm mb-1 ml-0 text-grey-darker bg-yurp leading-none">
                #Javascript
              </span>
              <span class="inline-block text-xs py-1 px-2 mt-0 mr-2 rounded-sm mb-1 ml-0 text-grey-darker bg-yurp leading-none">
                #Mangos
              </span>
                </div>
                <p class="text-xs md:text-sm font-semibold">3 MIN READ</p>
              </div>       
            </div>
          </Link>
        </div>
        )       
        }     
      </div>
      )
  }
});
/*
{
  state.cart.filter(res => res.id )
  .map( res => res)}
var blog = (state, actions) => ({match}) => {}*/




