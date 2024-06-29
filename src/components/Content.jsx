import { Container } from "@mui/material";
import Cards from "./Cards";

function Content() {
    return(
        <Container sx={{ display: 'flex', marginTop: '100px', flexWrap: 'wrap', gap: '10px' }}>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
        </Container>
    )
}

export default Content;