import React from "react";
import { Typography } from '@mui/material';
import { Button } from '@mui/material';

const Test = () => {
    return (
        <div>
            <Button onClick={() => alert('buttong clicked')} color='success' sx={{ margin: 3 }} size="large" variant="outlined">First</Button>
            <Button color='error' size="small" variant="contained">Second</Button>
            <Button size="medium" variant="text">Third</Button>
            {/* <Typography sx={{ color: "red", border: '1px solid black', borderRadius: 10 }}>Hello World</Typography> */}
        </div>
    )
}

export default Test