import { useState, useEffect } from "react";
import style from "./postForm.css";

function PostForm () {
    const [nameData, setNameData] = useState("");
    const [emailData, setEmailData] = useState("");
    const [destinationData, setDestData] = useState("");
    const [travelData, setTravelData] = useState("");
    const [budgetData, setBudgetData] = useState("");

    const baseURL = "https://planmytrip-a6j5.onrender.com";

    function formCheck(obj) {
        let check = false;
        if(obj.name != "" && obj.email != "" && obj.destination != "" && obj.no_of_travellers != "" && obj.budget_per_person != ""){
            check = true;
        }
        return check;
    }

    function formSubmit(e) {
        e.preventDefault();

        let obj = {
            name : nameData,
            email : emailData,
            destination : destinationData,
            no_of_travellers : travelData,
            budget_per_person : budgetData
        }
        let formChecking = formCheck(obj);
        if(formChecking){
            fetch(`${baseURL}/post`,{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(obj)
            })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if(data.message === "New Destination Posted"){
                    alert(data.message);
                    window.location.reload();
                }
                else{
                    alert("Something Went Wrong");
                    window.location.reload();
                }
            })
            .catch((err) => {
                console.log(err.message);
            })
        }
        else{
            alert("Some fields are missing");
        }

    }

   

    return <>

        <div className="main">
            <form onSubmit={(e) => {
                formSubmit(e);
            }}>
                <input type="text" placeholder="Enter Name" value={nameData} onChange={(e) => setNameData(e.target.value)} />
                <input type="email" placeholder="Enter Email" value={emailData} onChange={(e) => setEmailData(e.target.value)} />
                <select value={destinationData} onChange={(e) => setDestData(e.target.value)}>
                    <option value="">Select Destination</option>
                    <option value="India">India</option>
                    <option value="Africa">Africa</option>
                    <option value="Europe">Europe</option>
                    <option value="America">America</option>
                </select>
                <input type="number" placeholder="Enter Number of Travellers" value={travelData} onChange={(e) => setTravelData(e.target.value)} />
                <input type="number" placeholder="Enter Budget Per Person" value={budgetData} onChange={(e) => setBudgetData(e.target.value)} />
                <input id="postBtn" type="submit" value="Post" />
            </form>
        </div>
    
    </>
}

export default PostForm;