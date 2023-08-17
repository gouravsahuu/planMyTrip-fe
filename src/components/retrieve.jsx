import { useState, useEffect } from "react";
import style from "./retrieve.css";

function Retrieve() {

    const [destinationData, setDestinationData] = useState(null);
    const baseURL = "https://planmytrip-a6j5.onrender.com";

    useEffect(() => {

        fetch(`${baseURL}/post`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setDestinationData(data);
        })
        .catch((err) => {
            console.log(err.message);
        })
        
    },[]);


    return <>
        <div className="mainDiv">
            {
                destinationData?.map((element) => {
                    return <div>
                        <h3>Name : {element.name}</h3>
                        <p>Email : {element.email}</p>
                        <p>Destination : {element.destination}</p>
                        <p>Number of Travellers : {element.no_of_travellers}</p>
                        <p>Budget per person : {element.budget_per_person}</p>
                        <button id="deleteBtn" onClick={() => {
                            fetch(`${baseURL}/post/${element._id}`,{
                                method : "DELETE"
                            })
                            .then((res) => {
                                return res.json();
                            })
                            .then((data) => {
                                if(data.message === "Post deleted"){
                                    alert(data.message);
                                    window.location.reload();
                                }
                                else{
                                    alert(data.message);
                                    window.location.reload();
                                }
                            })

                        }}>Delete</button>
                    </div>
                })
            }
        </div>
    </>
}

export default Retrieve;