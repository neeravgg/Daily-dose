
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import { Menu } from '@mui/icons-material';

const StyledApp = styled(AppBar)`
        background: #fff;
        height: 70px;
`;
    
const MenuIcon = styled(Menu)`
        color: #000;
`;
    
const Image = styled('img')({
        height: '10',
        width : 100,
        margin: 'auto',     
})

const Header = () => {
    const url = '/logo512.png';

    return (
        <StyledApp>
            <Toolbar>
                <MenuIcon />
                <Image src={url} alt="logo" />
            </Toolbar>
        </StyledApp>
    )
}

export default Header;