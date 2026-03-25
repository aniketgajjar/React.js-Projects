import Card from './Components/Card'

const App = () => {

  const jobOpenings = [
  {
    BrandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/500px-Google_%22G%22_logo.svg.png",
    nameOfCompany: "Google",
    datePosted: "5 Days Ago",
    post: "Frontend Developer",
    Tag1: "Full Time",
    Tag2: "Junior Level",
    Pay: "$42/hour",
    Location: "Mumbai, India"
  },
  {
    BrandLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    nameOfCompany: "Meta",
    datePosted: "2 Weeks Ago",
    post: "React Developer",
    Tag1: "Full Time",
    Tag2: "Mid Level",
    Pay: "$48/hour",
    Location: "Bengaluru, India"
  },
  {
    BrandLogo: "https://www.citypng.com/public/uploads/preview/official-hq-amazon-a-letter-symbol-logo-icon-70175169479214184uavt0v1m.png ",
    nameOfCompany: "Amazon",
    datePosted: "10 Days Ago",
    post: "Software Engineer",
    Tag1: "Full Time",
    Tag2: "Junior Level",
    Pay: "$40/hour",
    Location: "Hyderabad, India"
  },
  {
    BrandLogo: "https://cdn-icons-png.flaticon.com/512/0/747.png",
    nameOfCompany: "Apple",
    datePosted: "1 Week Ago",
    post: "UI Engineer",
    Tag1: "Part Time",
    Tag2: "Senior Level",
    Pay: "$55/hour",
    Location: "Pune, India"
  },
  {
    BrandLogo: "https://static.vecteezy.com/system/resources/previews/017/396/814/non_2x/netflix-mobile-application-logo-free-png.png",
    nameOfCompany: "Netflix",
    datePosted: "3 Days Ago",
    post: "Full Stack Developer",
    Tag1: "Full Time",
    Tag2: "Senior Level",
    Pay: "$60/hour",
    Location: "Remote, India"
  },
  {
    BrandLogo: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_512px.png",
    nameOfCompany: "Microsoft",
    datePosted: "4 Weeks Ago",
    post: "Backend Developer",
    Tag1: "Full Time",
    Tag2: "Mid Level",
    Pay: "$46/hour",
    Location: "Noida, India"
  },
  {
    BrandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXEEFRClIpSUjSUyHhKbVNSmBbD7i45ZTSVQ&s",
    nameOfCompany: "Adobe",
    datePosted: "6 Days Ago",
    post: "JavaScript Developer",
    Tag1: "Part Time",
    Tag2: "Junior Level",
    Pay: "$38/hour",
    Location: "Delhi, India"
  },
  {
    BrandLogo: "https://fabrikbrands.com/wp-content/uploads/Salesforce-Logo-History-1-1155x770.png",
    nameOfCompany: "Salesforce",
    datePosted: "2 Days Ago",
    post: "Frontend Engineer",
    Tag1: "Full Time",
    Tag2: "Mid Level",
    Pay: "$50/hour",
    Location: "Chennai, India"
  },
  {
    BrandLogo: "https://static.vecteezy.com/system/resources/thumbnails/050/816/820/small/uber-transparent-icon-free-png.png",
    nameOfCompany: "Uber",
    datePosted: "8 Weeks Ago",
    post: "Software Development Engineer",
    Tag1: "Full Time",
    Tag2: "Senior Level",
    Pay: "$58/hour",
    Location: "Bengaluru, India"
  },
  {
    BrandLogo: "https://1000logos.net/wp-content/uploads/2017/04/Oracle-Logo.jpg",
    nameOfCompany: "Oracle",
    datePosted: "12 Days Ago",
    post: "Web Developer",
    Tag1: "Part Time",
    Tag2: "Junior Level",
    Pay: "$37/hour",
    Location: "Ahmedabad, India"
  }
];

  return (
    <div className='perent'>
      {jobOpenings.map(function(elem, idx){
        return <div key={idx}>
          <Card 
        Logo = {elem.BrandLogo} 
        Company = {elem.nameOfCompany}
        Date = {elem.datePosted}
        Post = {elem.post}
        Tag1 = {elem.Tag1}
        Tag2 = {elem.Tag2}
        Pay = {elem.Pay}
        Location = {elem.Location}
        />
        </div>
      })}
    </div>
  )
}

export default App
