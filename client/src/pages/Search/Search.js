import React from 'react'
import SearchBox from '../../components/Search/SearchBox'
import Card from '../../components/Search/Card'

const Search = props => {
  return (
    <>
      <SearchBox
        clickHandler={props.clickHandler}
        handleSearchClear={props.handleSearchClear}
      />
      {props.title &&
        <Card
          title={props.title}
          author={props.author}
          image={props.image}
          description={props.description}
          link={props.link}
        />
      }
    </>
  )
}

export default Search
