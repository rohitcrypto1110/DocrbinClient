import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    backgroundColor: 'pink',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'rgba(92,64,51,1)',
    fontWeight:'bold',
    fontFamily: ['Roboto:700, 700, 700', 'sans-serif'],
  },
  mainContent: {
    color: 'black',
    backgroundColor: 'black',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'black',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
