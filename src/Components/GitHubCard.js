import Card from "react-bootstrap/Card"

const GitHubCard = () => {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/84686313?s=400&v=4" />
        <Card.Body>
          <Card.Title>Andrew Zimmerman</Card.Title>
          <Card.Text>
            Beginner software devoloper, who enjoys hockey, cycling, and golf
          </Card.Text>
  
        </Card.Body>
      </Card>
    )
}

export default GitHubCard