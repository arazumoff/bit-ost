import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { AgGridReact } from 'ag-grid-react'
import { Container,Row, Col } from 'react-bootstrap'
import { addPost, fetchPosts } from './features/posts/thunks'
import { selectorAllPosts } from './features/posts/selectors'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import ModalPost from './modal'


const Table = () => {
  const posts = useSelector(selectorAllPosts)
  const [columnDefs, setColumnDefs] = useState([
    {field: 'id', filter: true},
    {field: 'title', filter: true},
    {field: 'body'}
  ])
  return(
    <div className="ag-theme-alpine" style={{width: 600, height: 500}}>
      <AgGridReact
        rowData={posts}
        columnDefs={columnDefs}
      />
    </div>
  )
}

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <Container fluid="md">
      <Row className="justify-content-md-center">
        <Col className="p-2">
          <ModalPost onSave={(data)=>dispatch(addPost(data))}/>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col>
          <Table />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
