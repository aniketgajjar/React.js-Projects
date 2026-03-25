import {Bookmark} from 'lucide-react'
const Card = (props) => {


  return (
    <div className="card">
        <div className="top">
          <img src= {props.Logo} alt="Logo" />
          <button>Save <Bookmark size={15} /> </button>
        </div>

        <div className="center">
          <h3>{props.Company} <span>{props.Date}</span></h3>
          <h2>{props.Post}</h2>
          <div className='tag'>
            <h4>{props.Tag1}</h4>
            <h4>{props.Tag2}</h4>
          </div>
        </div>

        <div className="bottum">
          <div>
              <h3>{props.Pay}</h3>
              <p>{props.Location}</p>
          </div>
            <button>Applu Now</button>
        </div>
      </div>
  )
}

export default Card
