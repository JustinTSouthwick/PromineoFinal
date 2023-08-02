import { useState, useEffect } from "react";
import VoteForm from "./VoteForm";
import VoteTable from "./VoteTable";

export default function DataAccess() {
    const API_URL = 'https://6496f73e83d4c69925a3490b.mockapi.io/vote';

    const [votes, setVotes] = useState([{
        name: '',
        brand: ''
    },]);

    const [newVote, setNewVote] = useState({
        name: '',
        brand: ''
    });

    const [updatedBrand, setUpdatedBrand] = useState('');

    function handleUpdatedBrand(updatedBrandValue) {
        setUpdatedBrand(updatedBrandValue)
    };

    function handleName(value) {
        setNewVote({
            ...newVote,
            name: value
        });
    };

    function handleBrand(value) {
        setNewVote({
            ...newVote,
            brand: value
        });
    };

    useEffect(() => {
        fetch(API_URL)
            .then((data) => data.json())
            .then((data) => setVotes(data))
    }, []);

    const getVotes = () => {
        fetch(API_URL)
            .then((data) => data.json())
            .then((data) => setVotes(data))
    };

    const addVote = (e) => {
        e.preventDefault();

        fetch(API_URL, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(newVote)
        }).then (() => getVotes())
    };

    const deleteVote = (id) => {
        fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        }).then (() => getVotes())
    };

    const updateBrand = (vote) => {
        let updatedVote = vote;
        updatedVote.brand = updatedBrand;

        fetch(`${API_URL}/${vote.id}`, {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(updatedVote)
        }).then (() => getVotes())
    };

    return (
        <div>
            <VoteForm 
                addVote={addVote}
                handleName={handleName}
                handleBrand={handleBrand}
            />
            <VoteTable 
                handleUpdatedBrand={handleUpdatedBrand}
                updateBrand={updateBrand}
                deleteVote={deleteVote}
                votes={votes}
            />
        </div>
    )
}