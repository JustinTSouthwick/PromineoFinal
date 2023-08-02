import React from "react";
import { Button } from 'react-bootstrap';


export default function VoteTable({votes, deleteVote, updateBrand, handleUpdatedBrand}) {
    return (  
        <table className="table table-striped mt-4">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Brand vote</th>
                    <th scope="col">Update brand choice</th>
                    <th scope="col">Delete entry</th>
                </tr>
            </thead>
            <tbody>
                {votes.map((vote, index) => (
                    <tr key={index}>
                        <td>{vote.name}</td>
                        <td>{vote.brand}</td>
                        <td>
                            <input onChange={(e) => handleUpdatedBrand(e.target.value)} placeholder="New brand choice" />
                            <button onClick={(e) => updateBrand(vote)}>Update</button>
                        </td>
                        <td>
                            <Button variant="danger" onClick={() => deleteVote(vote.id)}>Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

