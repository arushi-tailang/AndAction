import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import TVIcon from '@material-ui/icons/Tv';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    width: '100%' ,
    position: "fixed",
    bottom:0,
    backgroundColor: "rgb(32, 32, 32)" ,
    zIndex:100,
},
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() =>{
  if (value === 0) 
  history.push("/")
  else if (value === 1) history.push("/movies");
  else if (value === 2) history.push("/series");
  else if (value === 3) history.push("/search");
  },[value, history]);

  return (
    <BottomNavigation
    style={{ color :"white"}}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction style={{ color :"white"}} label="Trending" icon={<WhatshotIcon />} />
      <BottomNavigationAction style={{ color :"white"}} label="Movies" icon={<MovieIcon />} />
      <BottomNavigationAction style={{ color :"white"}} label="TV Series" icon={<TVIcon />} />
      <BottomNavigationAction style={{ color :"white"}} label="Search" icon={<SearchIcon />} />
    </BottomNavigation>
  );
}
