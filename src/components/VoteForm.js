import React from "react";
import { Form } from "react-bootstrap";

export default function VoteForm({addVote, handleName, handleBrand}) {
    

    return(
        <Form className="mt-4" onSubmit={addVote}>
            <input id="input1" className="mb-1" placeholder="Your name" onChange={(e) => handleName(e.target.value)} /><br></br>
            <input className="mb-1" placeholder="Brand choice" onChange={(e) => handleBrand(e.target.value)} /><br></br>
            <button>Submit</button>
        </Form>
    )
}