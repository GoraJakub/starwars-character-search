import React, {useState} from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { SearchBarProps } from '../interfaces/interfaces'
import Spinner from 'react-bootstrap/Spinner';


const SearchBar = ({onSearch, pending}: SearchBarProps) => {
    const [searchTerm, setSearchTerm] = useState("")

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)

    }

    const handleSearchClick = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSearch(searchTerm)
    }

    return (
        <Form onSubmit={handleSearchClick}>
            <Container style={{maxWidth: '800px', marginTop: '15px'}}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Search for star wars characters..." value={searchTerm} onChange={handleInputChange}/>
                        </Form.Group>
                    </Col>
                    <Col xs="auto">
                            <Button variant="primary" type="submit">
                                {pending ? 
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                : 'Submit'}
                            </Button>
                    </Col>
                </Row>
            </Container>
        </Form>
    )
}

export default SearchBar