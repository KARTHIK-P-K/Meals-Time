import chef from './chef.png'

const Header = ()=>{
  return (
    <div className="heading-container">
    <img src={chef} className="heading-img"/>
    <h2 className="main-title">Meals Time</h2>
    </div>
  )
     
}
export default Header