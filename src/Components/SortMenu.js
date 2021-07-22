import React from 'react';
import { Menu, MenuItem, Fab } from '@material-ui/core';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const sortOptions = [
    'TYPE',
    'NAME',
    'CREATED',
    'LAST USE'
]

function SortMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [selectedIndex, setSelectedIndex] = React.useState(0)

    const OpenMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index)
        setAnchorEl(null)
        props.changeState(sortOptions[index])
    }

    const CloseMenu = () => {
        setAnchorEl(null);
    }

    return (
        <div style={{backgroundColor: "white", paddingRight: "3%"}}>
            <Fab variant="extended" style={{backgroundColor: "white", width: 150, fontSize: 14}} onClick={OpenMenu}>
                <SortByAlphaIcon style={{position: "absolute", left: 10, opacity: 0.7}} />
                <p style={{textAlign: "center"}}>{sortOptions[selectedIndex]}</p>
                <ArrowLeftIcon style={{position: 'absolute', right: 10, opacity: 0.7}} />
            </Fab>
            <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={CloseMenu}>
                {sortOptions.map((option, index) => (
                    <MenuItem key={option} style={{width: 150, fontSize: 14}} onClick={(event) => handleMenuItemClick(event, index)}>
                        {option}
                        {(index === 0) && <ArrowDropDownIcon style={{position: 'absolute', right: 10}} />}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export default SortMenu;
