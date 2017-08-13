import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectBook} from '../actions/index'
import {bindActionCreators} from 'redux'

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title}
          onClick={() => this.props.selectBook(book)}>
          {book.title}</li>
      )
    })
  }
  render() {
    return (
      <ul>
      {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //whatever is returned will shown up as props inside of BookList
  return {
    books: state.books

  }
}

function mapDispatchToProps(dispatch) {
  //anything returned from this function will end up as props on the BookList container
  return bindActionCreators({selectBook: selectBook}, dispatch)
  //whenever selectBook is called, the result should be passed to all of our reducers
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
  //promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
