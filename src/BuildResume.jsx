import React from "react";
import Data from "./Data";

const BuildResume = () => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
    //TODO getTime()
    return (
        Data.map((candidate, index) => {
            return (
                <p>
                    <h1 style={{ color: 'green' }}>Name: {candidate.contact_info.name.formatted_name}</h1>
                    {candidate.experience[0] ? <h4>worked as: {candidate.experience[0].title}
                        <h4> from: {candidate.experience[0] ? candidate.experience[0].start_date : ' no information'}   to: {candidate.experience[0] ? candidate.experience[0].end_date : ' no information'}  in {candidate.experience[0] ? candidate.experience[0].location.municipality : ' no information'}</h4>
                    </h4> : 'no information'}
                    <br />
                    {candidate.experience[1] ? <h4>worked as: {candidate.experience[1].title}
                        <h4> from: {candidate.experience[1] ? candidate.experience[1].start_date : ' no information'}  to: {candidate.experience[1] ? candidate.experience[1].end_date : ' no information'}  in {candidate.experience[1] ? candidate.experience[1].location.municipality : ' no information'}</h4>
                        <h4> {candidate.experience[1].end_date.slice(7, 11) == candidate.experience[0].start_date.slice(7, 11) ? "no work gap here" :
                            (monthNames.indexOf((candidate.experience[1].end_date.slice(0, 3))) + 1) + (candidate.experience[1].end_date.slice(3, 11)).toString() + "-" +
                            (monthNames.indexOf((candidate.experience[0].start_date.slice(0, 3))) + 1) + (candidate.experience[0].start_date.slice(3, 11)).toString() + "  year gap:" +
                            ((parseInt(candidate.experience[0].start_date.slice(7, 11))) - (parseInt(candidate.experience[1].end_date.slice(7, 11))))
                            // (typeof(date1))
                        }
                        </h4>
                    </h4>
                        : ''}
                    <br />
                </p>)
        })
    )
}
export default BuildResume;
