import { h } from 'hyperapp';

// Projects Module

export default (projects, actions) => ({match}) => {
  var project = projects.filter(project => project.id == match.params.project_id )[0]
  return (
    <section>
      <div class="hidden mx-auto lg:block w-full bg-center bg-no-repeat" style={`background-size: 1450px; height:80vh; background-image:url(${project.image});`}>
        <h1 class="title text-center align-bottom text-yellow pb-4 text-4xl md:text-6xl"  style ="line-height:60vh;">{project.title}</h1>             
      </div> 
      <div class="block lg:hidden w-full bg-no-repeat" style={`background-size: 850px; background-position: 50% 0%; height:60vh; background-image:url(${project.image});`}>
        <h1 class="title text-center align-bottom text-yellow pb-4 text-4xl md:text-6xl"  style ="line-height:60vh">{project.title}</h1>             

      </div>
      
      <div class="bg-reddish container w-full mx-auto max-w-5xl -mt-32 border-4 border-gray-700">       
        <div class="w-full px-4 md:px-6 text-xl text-gray-100 leading-normal" style="font-family:Georgia,serif;">
          <div class="font-sans">
            <span class="text-base md:text-sm text-teal-500 font-bold">
              <span>
              </span>
            </span>
          </div>
          <p class="py-6">{project.text}</p>
  
        </div>    
      </div> 
    </section>
  )
}

