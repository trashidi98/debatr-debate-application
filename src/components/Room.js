import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Room() {

    return(
        <Card sx={{ minWidth: 500, paddingTop: "20px", paddingLeft: "50px", paddingRight: "50px", paddingBottom: "100px"}}>
                
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
                </Typography>
            </CardContent>
            
            <CardActions>
                <Button size="small">Enter Room</Button>
            </CardActions>

        </Card>
    );

}

export default Room; 