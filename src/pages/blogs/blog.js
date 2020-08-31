import { h } from 'hyperapp';
import { Enter } from "hyperapp-transitions"

export default {
  state: {
    showAnnotation: false,
    annotation: {}
  },

  actions: {
    showAnnotation: (annotation) => state => ({ showAnnotation: true, annotation: annotation}),
    hideAnnotation: () => state => ({ showAnnotation: false})
  },

  view: (state, actions) => ({match}) => { 
    
    var blog = state.blogs.filter(blog => blog.id == match.params.blog_id )[0]

    const compile = element => { // add highlight onclick handlers to show annotation    
      var highlightedTextEls = document.getElementsByClassName("highlight");
      for (var i = 0; i < highlightedTextEls.length; i++) 
        highlightedTextEls[i].addEventListener('click', showAnnotation, false); // memory leak
    
      function showAnnotation(e) {
        if( window.innerWidth < 768){
          actions.hideAnnotation()
          let id = this.id.slice(5)
          let rect = this.getBoundingClientRect()
          let annotation = {
            ...blog.annotations.find((a) => a.id == id),
            posTopM: 0 + 'px',
            rectTop: rect.top,
          }
          actions.showAnnotation(annotation)
        } else {
          actions.hideAnnotation()
          let id = this.id.slice(5)
          let rect = this.getBoundingClientRect()
          var bodyRect = document.getElementById('markdown-body').getBoundingClientRect()
          var parentRect = document.getElementById('annotations').getBoundingClientRect()
          
          let annotation = {
            ...blog.annotations.find((a) => a.id == id),
            posTop: rect.top - parentRect.top + 'px',
            //posTopFixed: rect.top - 24 + 'px',
            posLeft: (bodyRect.width + 10) +'px'
          }
          actions.showAnnotation(annotation)
        }
          //document.body.style.overflow = "hidden"; 
      }
    };

    function showAnnotation(e){
      var mparentRect = document.getElementById('annotations1').getBoundingClientRect()
      actions.showAnnotation({
        ...state.annotation,
        posTopM: state.annotation.rectTop - mparentRect.top + 'px',
      })
    }

    function cleanup(){
      actions.hideAnnotation()
      window.scrollTo(0, 0)
    }

    function close(){
      //document.body.style.overflow = "auto";
      actions.hideAnnotation()
    }

    //change section tag to article?
    return (      
      <section oncreate={cleanup}>

        <Enter time={200} easing="ease-in-out" css={{ transform: "translateY(-100%)", opacity: "0", }}>
          <div class="hidden lg:block w-full bg-center bg-no-repeat" style={`background-size: ${blog.imgSizes[1]}; height:80vh; background-image:url(${blog.image});`}></div> 
          <div class="block lg:hidden w-full bg-no-repeat" style={`background-size: 850px; background-position: 50% 0%; height:60vh; background-image:url(${blog.image});`}></div>
        </Enter>

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
  
            {/* Blog Text */}
            <div id="markdown-body" class="py-6 markdown-body text-gray-900" oncreate={compile} innerHTML={blog.text}></div>

            {/* Annotations */}        
            
            <div id="annotations" class="hidden md:flex relative w-1/2">    
             
              { (!state.showAnnotation) ? '' :
              
                <div id={state.annotation.id} style={`top:${state.annotation.posTop}; left:${state.annotation.posLeft}`} class='annotation absolute flex w-64 shadow-2xl bg-reddish mx-6 my-5 p-5 text-gray-700 rounded-sm'>
                  <Enter time={250} css={{opacity: "0", transform: "translateX(100%)"}}>
                    <div innerHTML={state.annotation.html} class='markdown-body bg-gray-300 p-4 rounded-sm'></div>
                  </Enter>
                </div> 

              }   
            </div>       
            
          </div>    
        </div> 
        { (!state.showAnnotation) ? '' :
        <div onclick={actions.hideAnnotation} class="block md:hidden absolute w-full h-full left-0 top-0" style="background-color: rgb(0,0,255,0.5);">
          <div oncreate={showAnnotation} id="annotations1" class="relative flex w-4/6  ml-auto">             
                        
              <div onclick={(e)=>e.stopPropagation()} id={state.annotation.id} style={`top:${state.annotation.posTopM}; right:0px`} class=' opacity-100 annotation absolute flex w-64 shadow-2xl bg-reddish my-5 p-5 text-gray-700 rounded-sm'>
                <svg onclick={close} class="absolute top-0 left-0" viewBox="0 0 30 30" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
                <Enter time={250} css={{opacity: "0", transform: "translateX(100%)"}}>
                  <div innerHTML={state.annotation.html} class='markdown-body bg-gray-300 p-4 rounded-sm'></div>
                </Enter>
              </div> 
            
          </div>
        </div>  
        }
      </section>
    )
  }
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
