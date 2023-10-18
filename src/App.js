import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { AgGridReact } from 'ag-grid-react';
import { Button, Container,Row, Col } from 'react-bootstrap'
import { fetchPosts } from './features/posts/thunks'
import {selectorAllPosts, selectorPostsStatus} from './features/posts/selectors'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'


const Table = () => {
  
}

const App = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectorAllPosts)
  const status = useSelector(selectorPostsStatus)
  const [columnDefs, setColumnDefs] = useState([
    {field: 'id', filter: true},
    {field: 'title', filter: true},
    {field: 'body'}
  ]);

  useEffect(() => {
    console.log('render')
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <Container fluid="md">
      <Row>
        <Col><Button>Add row</Button></Col>
      </Row>
      <Row>
        <Col>
          <div className="ag-theme-alpine" style={{width: '100%', height: 500}}>
            <AgGridReact
              rowData={posts}
              columnDefs={columnDefs}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
