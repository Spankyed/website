import { h } from 'hyperapp';


export default {
  state: {
    blog:{},
    showAnnotation: false,
    annotation: {},
    annotations: []
  },
  actions: {
    //setHtml: (html) => state => ({ html: html }),
    setAnnotations: (annotations) => state => ({ annotations: annotations }),
    showAnnotation: (annotation) => state => ({ showAnnotation: true, annotation: annotation}),
    hideAnnotation: () => state => ({ showAnnotation: false}),
    saveAnnotation: (annotation) => state => ({ annotations: [...state.annotations, annotation] }),
    input: e => state => ({ annotation:{...state.annotation, value: e.target.value}})
  },
  view: (state, actions) => ({match}) => { 
    var blog = state.blogs.filter(blog => blog.id == match.params.blog_id )[0]
    if(state.blog.id != blog.id) {
      actions.setBlog(blog)
      window.scrollTo(0, 0)
    }
    
    //actions.setAnnotations(blog.annotations)
    const dangerouslySetInnerHTML = html => element => { //only dangerous if user can somehow change data file on webserver
      element.innerHTML = html;

      var annotatedTextEls = document.getElementsByClassName("highlight");
      //annotatedTextEls.map((textEl)=>{ textEl.addEventListener('click', showAnnotation, false) })
      for (var i = 0; i < annotatedTextEls.length; i++) 
        annotatedTextEls[i].addEventListener('click', showAnnotation, false); // memory leak
    
      function showAnnotation(e) {
        let id = this.id.slice(5)
        let rect = this.getBoundingClientRect()
        var bodyRect = document.getElementById('markdown-body').getBoundingClientRect()
        var parentRect = document.getElementById('uhgr').getBoundingClientRect()
        
        let annotation = {
          ...blog.annotations.find((a) => a.id == id),
          //posTop: rect.top + 'px',
          posTop: (parentRect.top - bodyRect.top) - (bodyRect.top - rect.top) + (rect.bottom - rect.top) +'px',
          posLeft: (parentRect.left) +'px'
        }
        console.log(blog.annotations.find((a) => a.id == id))
        actions.showAnnotation(annotation)
      }

    };

    const compile = dangerouslySetInnerHTML(blog.text)
    const compileAnnotationHtml = annotationHtml => element => { console.log('arg',annotationHtml);element.innerHTML = annotationHtml}

    //change section tag to article?
    return (
      <section>
        <div class="hidden lg:block w-full bg-center bg-no-repeat" style={`background-size: ${blog.imgSizes[1]}; height:80vh; background-image:url(${blog.image});`}></div> 
        <div class="block lg:hidden w-full bg-no-repeat" style={`background-size: 850px; background-position: 50% 0%; height:60vh; background-image:url(${blog.image});`}></div>
        <div class="container w-full mx-auto md:max-w-3xl">       
          <div id='uhgr' class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style="font-family:Georgia,serif;">  
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
  
            {/* Annotations */}
            { (!state.showAnnotation) ? '' :
              <div id="annotations" class="relative flex w-1/2">        
                <div id={state.annotation.id} style={`top:${state.annotation.posTop}; right:${state.annotation.posLeft}`} class='annotation absolute flex w-64 shadow-2xl bg-reddish mx-6 p-5 rounded-sm'>
                  <div innerHTML={state.annotation.html}></div>
                </div>     
              </div>
            }
            {/* Blog Text */}
            <div id="markdown-body" class="py-6 markdown-body text-gray-900" oncreate={compile}></div>

          </div>    
        </div> 

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
