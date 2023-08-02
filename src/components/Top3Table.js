

export default function Top3Table() {
    return (
        <table className="table table-striped mt-2">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Brand Name</th>
                <th scope="col">No. of votes</th>
                <th scope="col">Link to site</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Fender Guitars</td>
                <td>55</td>
                <td><a href="https://www.fender.com/">www.fender.com</a></td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Ibanez Guitars</td>
                <td>47</td>
                <td><a href="https://www.ibanez.com/">www.ibanez.com</a></td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Martin Guitars</td>
                <td>42</td>
                <td><a href="https://www.martinguitar.com/">www.martinguitar.com</a></td>
                </tr>
            </tbody>
        </table>
    )
}