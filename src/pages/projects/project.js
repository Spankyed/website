import { h } from 'hyperapp';

// Projects Module
const dangerouslySetInnerHTML = html => element => {
  element.innerHTML = html;
};

export default (projects, actions) => ({match}) => {
  window.scrollTo(0, 0)
  var project = projects.filter(project => project.id == match.params.project_id )[0]
  const compile = dangerouslySetInnerHTML(project.text)

  return (
    <section>
      <div class="hidden mx-auto lg:block w-full bg-center bg-no-repeat" style={`background-size: 1450px; height:80vh; background-image:url(${project.image});`}>
        {/* <h1 class="title text-center align-bottom text-yellow pb-4 text-4xl md:text-6xl"  style ="line-height:60vh;">{project.title}</h1>              */}
      </div> 
      <div class="block lg:hidden w-full bg-no-repeat" style={`background-size: 850px; background-position: 50% 0%; height:60vh; background-image:url(${project.image});`}>
        {/* <h1 class="title text-center align-bottom text-yellow pb-4 text-4xl md:text-6xl"  style ="line-height:60vh">{project.title}</h1>              */}
      </div>
      
      <div class="bg-reddish container rounded w-full mx-auto max-w-5xl -mt-32 mb-6 border-4 border-gray-700">  
        <h1 class="title text-center align-left text-yellow pt-3 text-4xl " >{project.title}</h1>       
        <div class="w-full px-4 md:px-6 text-xl text-gray-100 leading-normal" style="font-family:Georgia,serif;">
          <div class="font-sans">
            <span class="text-base md:text-sm text-teal-500 font-bold">
              <span>
              </span>
            </span>
          </div>

          {/* Project Markdown */}
          <div class="py-6 markdown-body text-grey-100" oncreate={compile}></div> 
        </div>    
      </div> 
    </section>
  )
}

