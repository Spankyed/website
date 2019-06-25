import { h } from 'hyperapp';

// Blogs Module
// initial: data.blogs
export default (blogs, actions) => ({match}) => {
  window.scrollTo(0, 0)
  var blog = blogs.filter(blog => blog.id == match.params.blog_id )[0]
  return (
    <section>
      <div class="hidden lg:block w-full bg-center bg-no-repeat" style={`background-size: ${blog.imgSizes[1]}; height:80vh; background-image:url(${blog.image});`}></div> 
      <div class="block lg:hidden w-full bg-no-repeat" style={`background-size: 850px; background-position: 50% 0%; height:60vh; background-image:url(${blog.image});`}></div>
      
      <div class="container w-full mx-auto md:max-w-3xl">       
        <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style="font-family:Georgia,serif;">

          <div class="text-base font-sans md:text-sm text-teal-500 font-bold mt-1">
            <span>         
              <p class="text-sm md:text-base inline-block font-normal text-gray-600 pt-5 pr-6">{blog.date}</p>
              {
                blog.tags
                .map( tag => (
                  <span class="inline-block rounded-sm text-xs text-grey-darker bg-yurp py-1 px-2 mr-2 mb-1 ml-0 leading-none">
                    #{tag}
                  </span>
                ))
              }               
            </span>
            <h1 class="font-bold font-sans break-normal text-gray-900 text-3xl md:text-4xl">{blog.title}</h1>  
          </div>

          <p class="py-6">{blog.text}</p>

        </div>    
      </div> 
    </section>
  )
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
