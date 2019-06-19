import { h } from 'hyperapp';

// Blogs Module
// initial: data.blogs
export default (state, actions) => ({match}) => {
  var blog = getBlogById(state,match.params.blog_id)[0]
  return (
    <div class="">
      <div class="hidden lg:block w-full bg-center bg-no-repeat" style={`background-size: 1450px; height:80vh; background-image:url(${blog.image});`}></div> 
      <div class="block lg:hidden w-full bg-no-repeat" style={`background-size: 850px; background-position: 50% 0%; height:60vh; background-image:url(${blog.image});`}></div>
      
      <div class="container w-full mx-auto md:max-w-3xl">
         
        <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style="font-family:Georgia,serif;">
          <div class="font-sans">
            <span class="text-base md:text-sm text-teal-500 font-bold">
              <span>
                <p class="text-sm md:text-base font-normal text-gray-600 pt-4">{blog.date}</p>
                <h1 class="font-bold font-sans break-normal text-gray-900 pb-4 text-3xl md:text-4xl">{blog.title}</h1>             
              </span>
            </span>
          </div>
          <p class="py-6">{blog.text}</p>
  
        </div>
      
      </div>
  
    </div>
  )
}

function getBlogById(blogs, id){
  return blogs.filter(blog => blog.id == id)
}

/*
export default {
  down: ({ id, value }) => state => ({
    counters: state.counters.map(
      counter =>
        counter.id === id
          ? { ...counter, count: counter.count - value }
          : counter
    )
  }),

  up: ({ id, value }) => state => ({
    counters: state.counters.map(
      counter =>
        counter.id === id
          ? { ...counter, count: counter.count + value }
          : counter
    )
  })
}*/
