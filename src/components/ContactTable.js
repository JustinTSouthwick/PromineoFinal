import React from "react";
import { Table } from 'react-bootstrap';

export default function ContactTable() {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Social</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Guitar Fans</td>
                    <td>GF@email.com</td>
                    <td>
                        <img src={require('../assets/igicon.png')}/>
                        <img src={require('../assets/twittericon.png')}/>
                        <img src={require('../assets/discordicon.png')}/>
                    </td>
                </tr>
            </tbody>
        </Table>
  );
}