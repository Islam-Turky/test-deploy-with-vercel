import { AppBar, Box, Container, CssBaseline, Toolbar, Typography } from '@mui/material';
import ReorderSharpIcon from '@mui/icons-material/ReorderSharp';
import './styles/Header.css';
function Header() {
    return(
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar sx={{ ml: '240px', background: '#0f1214cc' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" noWrap component="div">
                        @ElTURKY
                    </Typography>
                    <Container sx={{ display: 'flex', justifyContent: 'space-around'}}>
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Contact</a>
                    </Container>
                    <Typography variant="h6" noWrap component="div">
                        <ReorderSharpIcon />
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;