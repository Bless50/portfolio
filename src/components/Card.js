


const Card = ({ projects }) => {

return (
   
      <div class="card" >
         <img src={projects.image} class="card-img-top" alt={projects.title}
          style={{width:'auto', height:'auto', }}
          />

         <div class="card-body">
            <h5 class="card-title">{projects.title}</h5>
            <p class="card-text lead ">{projects.description}</p>
            <h5>  {projects.languages}</h5>
            <a href={projects.link} class="btn btn-primary">see Project</a>
         </div>
      </div>
   );

}

export default Card;