import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Fetching from './Fetching';

var originalArr = [];

export default function DataMapped() {

    var [meals, setMeals] = useState([]);
    const [paymentcash, setPaymentcash] = useState([]);
    const [paymentjcb, setPaymentjcb] = useState([])
    const [paymentmastercard, setPaymentmastercard] = useState([]);
    const [rating, setRating] = useState("");
    const [costone, setCostone] = useState("")

    useEffect(() => {
        async function getData() {
            const data = await fetch("http://localhost:8080/meals").then((d) => d.json());
            // console.log(data);
            setMeals(data);
        }
        getData()
    }, [])
    // console.log(meals)



    if (!originalArr.length) {
        originalArr = [...meals]
    }

    let newArr = meals.slice(0);
    console.log(newArr)

    //for payemnet method
    const filterItem = (payment) => {
        const updatedItems = originalArr.filter((elem) => {
            return payment == elem.payment_method
        })
        setMeals(updatedItems);
    }
    //for rating method
    const filterItemrating = (votes) => {
        const updatedItems = originalArr.filter((elem) => {
            return votes == elem.total_votes
        })
        setMeals(updatedItems);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">320 Blossom'</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            {/* //filtering by payment method */}
                            <li className="nav-item dropdown">

                                <select className="form-select form-select mx-2"

                                    onChange={(e) => {
                                        // setMeals(newArr);
                                        filterItem(e.target.value)

                                    }}
                                   aria-label=".form-select-lg example">
                                    <option selected>By Payment Method</option>
                                    <option value="cash">Cash</option>
                                    <option value="jcb">Jcb</option>
                                    <option value="mastercard">Mastercard</option>
                                </select>
                            </li>
                            {/* //sorting by rating */}

                            <li className="nav-item dropdown">
                                <select className="form-select form-select mx-2"
                                    onChange={(e) => {
                                        filterItemrating(e.target.value)

                                    }}


                                    // if(e.target.value == "1"){
                                    //     let highsort=meals; 
                                    //      highsort = highsort.filter(function (a) {return a.target.value == 1})
                                    //     console.log(e.target.value)
                                    //     highsort.map(e => (
                                    //      <div className="card mappedCard" style={{ width: "18rem" }}>
                                    //          <img src={e.Image} className="card-img-top" alt="..." />
                                    //          <div className="card-body">
                                    //              <h5 className="card-text">Payment Method : {e.payment_method}</h5>
                                    //              <h5 className="card-text">Total Votes : {e.total_votes}</h5>
                                    //              <h5 className="card-text">Cost For One : {e.costForOne}</h5>
                                    //              <h5 className="card-text">Reviews : {e.reviews}</h5>
                                    //              <h5 className="card-text">Categories : {e.Categories}</h5>

                                    //          </div>
                                    //      </div>
                                    //  ))
                                    //  }

                                    //         var newArr = meals.filter(elem=>{
                                    //            return e.target.value == elem.total_votes
                                    //             })
                                    //             console.log(newArr)
                                    //             newArr.map(e => (
                                    //                 <div className="card mappedCard" style={{ width: "18rem" }}>
                                    //                     <img src={e.Image} className="card-img-top" alt="..." />
                                    //                     <div className="card-body">
                                    //                         <h5 className="card-text">Payment Method : {e.payment_method}</h5>
                                    //                         <h5 className="card-text">Total Votes : {e.total_votes}</h5>
                                    //                         <h5 className="card-text">Cost For One : {e.costForOne}</h5>
                                    //                         <h5 className="card-text">Reviews : {e.reviews}</h5>
                                    //                         <h5 className="card-text">Categories : {e.Categories}</h5>

                                    //                     </div>
                                    //                 </div>
                                    //                   ))
                                    //  if(e.target.value == "1"){
                                    //     meals = meals.filter()
                                    //  }else if(e.target.value == "2"){

                                    //  }else if(e.target.value == "3"){

                                    //  }else if(e.target.value == "4"){

                                    //  }else if(e.target.value == "5"){

                                    //  }
                                    aria-label=".form-select-lg example">
                                    <option selected>By Rating</option>
                                    <option value="1">One Star</option>
                                    <option value="2">Two Star</option>
                                    <option value="3">Three Star</option>
                                    <option value="4">Four Star</option>
                                    <option value="5">Five Star</option>
                                </select>
                            </li>

                            {/* //sorting by cost by one */}

                            <li className="nav-item dropdown">
                                <select className="form-select form-select mx-2" onChange={(e) => {
                                    setCostone(e.target.value)
                                    if (e.target.value == "h-l") {
                                        let highsort = meals;
                                        highsort = highsort.sort(function (a, b) { return b.costForOne - a.costForOne })
                                        console.log(e.target.value)
                                        highsort.map(e => (
                                            <div className="card mappedCard" style={{ width: "18rem" }}>
                                                <img src={e.Image} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-text">Payment Method : {e.payment_method}</h5>
                                                    <h5 className="card-text">Total Votes : {e.total_votes}</h5>
                                                    <h5 className="card-text">Cost For One : {e.costForOne}</h5>
                                                    <h5 className="card-text">Reviews : {e.reviews}</h5>
                                                    <h5 className="card-text">Categories : {e.Categories}</h5>

                                                </div>
                                            </div>
                                        ))
                                    } else {
                                        let lowsort = meals;
                                        lowsort = lowsort.sort(function (a, b) { return a.costForOne - b.costForOne })
                                        lowsort.map(e => (
                                            <div className="card mappedCard" style={{ width: "18rem" }}>
                                                <img src={e.Image} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-text">Payment Method : {e.payment_method}</h5>
                                                    <h5 className="card-text">Total Votes : {e.total_votes}</h5>
                                                    <h5 className="card-text">Cost For One : {e.costForOne}</h5>
                                                    <h5 className="card-text">Reviews : {e.reviews}</h5>
                                                    <h5 className="card-text">Categories : {e.Categories}</h5>

                                                </div>
                                            </div>
                                        ))
                                    }
                                }} aria-label=".form-select-lg example">
                                    <option selected>By Cost For One</option>
                                    <option value="h-l">High to Low</option>
                                    <option value="l-h">Low to High</option>

                                </select>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <Link to="/form">
                                <button className="btn btn-outline-success" type="submit">Go To Form Page</button>
                            </Link>

                        </form>
                    </div>
                </div>
            </nav>

            <div className=' row mappedData'>

                {


                    meals.map(e => (
                        <div className="card mappedCard" style={{ width: "18rem" }}>
                            <img src={e.Image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-text">Payment Method : {e.payment_method}</h5>
                                <h5 className="card-text">Total Votes : {e.total_votes}</h5>
                                <h5 className="card-text">Cost For One : {e.costForOne}</h5>
                                <h5 className="card-text">Reviews : {e.reviews}</h5>
                                <h5 className="card-text">Categories : {e.Categories}</h5>

                            </div>
                        </div>
                    ))



                }


            </div>
        </div>

    )
}
