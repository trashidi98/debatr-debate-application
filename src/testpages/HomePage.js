import '../App.css';
import './HomePage.css'; 
import '../components/Room'
import Grid from '@mui/material/Grid';
import Room from '../components/Room';

function HomePage() {
    
    return (
        <div className="home-main-div">
            <h1>Tabish</h1>
            <Grid container spacing={4} direction="row" justifyContent="space-between">
                <Room/>
                <Room/>
                <Room/>
                <Room/>
                <Room/>
                <Room/>
            </Grid>

        </div>
    );
  }
  
  export default HomePage;