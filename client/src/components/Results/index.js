import React, { Component } from "react";
import API from "../../utils/API";

class Results extends Component {

    state = {
        savedBooks: [],
    }

    componentDidMount() {
        API.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
            .catch(err => console.error(err));
    }

    handleSave = book => {
            API.saveBook(book)
                .then(()=> this.setState({ savedBooks: this.state.savedBooks}))
                .catch(err => console.error(err));
        }
    
    render() {
        return (
            <div>
                {!this.props.books.length ? (
                    <h1 className="text-center text-warning">No Results to Display</h1>
                ) : (
                        <div>
                            {this.props.books.map(result => (
                                <div className="card shadow-sm p-3 mb-5 bg-white rounded" key={result.googleId}>
                                    <div className="row">
                                        <div className="col-md-10">
                                            <div className="card-body">
                                                <h5 className="card-title font-weight-bold">{result.title} by {result.authors}</h5>
                                                <p className="card-text">{result.description}</p>
                                                <div>
                                                    <a href={result.link} className="btn btn-dark" target="_blank" rel="noopener noreferrer">View</a>
                                                    <button onClick={() => this.handleSave(result)} className="btn btn-success" >
                                                        SAVE
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <img alt={result.title} className="img-fluid" src={result.image} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
            </div>
        )
    }
}

export default Results;
