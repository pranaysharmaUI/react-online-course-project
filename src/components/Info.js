import { useCallback, useContext, useState } from "react";
import GoalContext from "../context/GoalContext";

function Info(props)
{
    const [goalName,setGoalName]=useState('');
    const {goals,setGoalData}=useContext(GoalContext);

    const setGoal=useCallback((e) =>
    {
        setGoalName(e.target.value);

    },[setGoalName])
    return(
        <div className="profile-info-container">
            <h3>Name: your name</h3>
            <h4>Role: UI developer</h4>
            <div className="goal-box-container">
                <div className="goal-input-box">
                    <input type="text" value={goalName} onChange={(e) => {setGoal(e)}} className="form-control" name="goal" placeholder="Goal name" />
                    <button type="button" onClick={() => {setGoalData(goalName)}} className="btn btn-primary">Add Goal</button>
                </div>
            </div>
            <p>My Learning goals</p>
            <ol>
                {
                    goals && goals.length > 0 ?
                    goals.map((item,index) =>
                    (
                        <li key={index}>{item}</li>
                    ))
                    : null
                }
            </ol>
        </div>
    )
}


export default Info;