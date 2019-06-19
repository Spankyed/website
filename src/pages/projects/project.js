import { h } from 'hyperapp';

// Projects Module
// initial: data.projects
export default initial => ({
  state: {
    value: initial
  },
  actions: {
    //decrement: by => (state, actions) => { return { value: state.value - by } },
    increment: (evt) => state => ({ value: state.value + evt.value }),
  },
  view: (state, actions) => _ => (
    <div class="container mx-auto min-h-screen">
      <section class="leading-tight py-6 px-4">
        <div class="bg-gray-700 text-white py-2 sm:w-5/6 sm:mx-auto">
          <header class="bg-cyan-300">
            <div class="container">
                <div class="text-white font-serif text-center">
                    <h1 class="font-serif font-black text-5xl mb-2">Projects</h1>
                    <h2 class="font-light">Applications I've designed and developed.</h2>
                </div>
            </div>
          </header>   
        </div>
      </section>

      <section class="project-list px-4 sm:flex sm:justify-around sm:flex-wrap">

        <div class="project bg-reddish shadow-lg border border-yellow mb-8 sm:w-45">
          <a href="./my-task-grid" class="project-link no-underline text-grey-80">
            <header class="relative project-thumbnail h-64 border-b-4 border-yellow bg-cover bg-center" style="background-image: url('https://res.cloudinary.com/duua3lsu1/image/upload/v1557590908/blog/task-grid-thumbnail.png');">
              <div class="overlay flex items-end justify-center px-2 absolute h-full w-full bg-black-alpha-30">
                <h2 class="bg-yellow text-xl text-black p-4">My Task Grid</h2>
              </div>
            </header>
            <div class="project-summary text-grey-80 p-4 text-center leading-normal">
              <div>
                <span class="border-b-2 border-grey-60">Javascript | React | Sass</span>
              </div>  
              <p class="my-3">Task management app built with Reacts</p>
            </div>
          </a>
        </div>

      </section>

    </div>
  )
});

//class={`font-light bg-${theme}-dark text-${theme}-darker hover:bg-${theme}-lighter`}
/*
{
  state.cart.filter(res => res.id )
  .map( res => 

      <CartItems movie_id={res.id}
      title={res.movie_title}
      price={res.price}
      quantity= {res.quantity}
      total= {res.quantity * res.price }
      poster= {res.movie_poster}
      />

  )
}
 <Enter time={200} easing="ease-in-out" 
        css={{opacity: "0", transform: "scale(1,1)"}}>

        import { Enter } from "@hyperapp/transitions"

<Link to={`/details/${movie_id}`} ></Link>*/