import React, { Component } from "react";
import API from "../utils/API";
import SavedResults from "../components/SavedResults";

class Saved extends Component {
    state = {
        savedBooks: [],
    }

    componentDidMount() {
        API.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-warning">Saved books</h2>
                <SavedResults books={this.state.savedBooks} />
            </div>
        )
    }
}

export default Saved;