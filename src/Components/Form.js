import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Form.css"

export default function Form() {
  const [payment, setPayment] = useState("");
  const [votes, setVotes] = useState(0);
  const [reviews, setReviews] = useState("");
  const [cost, setCost] = useState(0);
  const [categories, setCategories] = useState("");
  const [image, setImage] = useState(0);
  const [meals, setMeals] = useState([])
  const getData = async () => {
    const data = await fetch("http://localhost:8080/meals").then((d) => d.json());
    console.log(data);
    setMeals(data);
  }
  // console.log(payment,votes,reviews,cost,categories,image,meals)

  return (
    <div>
      {/* //Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">320 Blossom's</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


            </ul>
            <form className="d-flex">
              <Link to="/data">
                <button className="btn btn-outline-success" type="submit">Go To Card Page</button>
              </Link>



            </form>
          </div>
        </div>
      </nav>
      <div className='OuterBlackborder'>
        <div className='container restaurent_inputFields'>
          <h1>320 Blossom's</h1>
          <h3>Enter Form Details Here</h3>

          <div className="input-group my-3">
            <span className="input-group-text">Card Payment Methods</span>
            <input type="text" aria-label="First name"
              onChange={(e) => {
                setPayment(e.target.value)

              }} className="form-control" />


          </div>
          <div className="input-group my-3">
            <span className="input-group-text">Total Votes</span>
            <input type="text" aria-label="First name"
              onChange={(e) => {
                setVotes(e.target.value)
              }}
              className="form-control" />

          </div>
          <div className="input-group my-3">
            <span className="input-group-text">Reviews</span>
            <input type="text" aria-label="First name"
              onChange={(e) => {
                setReviews(e.target.value)
              }}
              className="form-control" />

          </div>
          <div className="input-group my-3">
            <span className="input-group-text">Cost For One</span>
            <input type="text" aria-label="First name"
              onChange={(e) => {
                setCost(e.target.value)
              }}
              className="form-control" />

          </div>
          <div className="input-group my-3">
            <span className="input-group-text">Categories</span>
            <input type="text" aria-label="First name"
              onChange={(e) => {
                setCategories(e.target.value)
              }}
              className="form-control" />

          </div>
          <div className="input-group my-3">
            <span className="input-group-text">Image Url</span>
            <input type="text" aria-label="First name"
              onChange={(e) => {
                setImage(e.target.value)
              }}
              className="form-control" />

          </div>
          <button type="button" className="btn btn-light"
            onClick={() => {
         
              const payload = {
                "payment_method": payment,
                "total_votes": votes,
                "costForOne": cost,
                "reviews": reviews,
                "Categories": categories,
                "Image": image,

              };
              console.log(payload)
              fetch("http://localhost:8080/meals", {
                method: "POST",
                headers: {
                  "content-type": "application/json"
                },
                body: JSON.stringify(payload),
              }).then(() => {
                getData();
              })
            }}
          >Submit</button>

        </div>
      </div>
    </div>


  )
}

//  {"payment_method":"jcb","total_votes":10,"costForOne":826,"reviews":"good", "Categories":"Baking Soda"}