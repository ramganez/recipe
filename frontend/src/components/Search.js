import TextField from '@material-ui/core/TextField';

const axios = require('axios').default;

export default function SearchComponent(props) {

  const handleChange = (event) => {
    event.preventDefault();
    axios.post('/api/recipe/search', {
      query: event.target.value,
    })
      .then(function (response) {
        props.setRows(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <TextField onChange={handleChange} className='Search-Input' align="center" id="outlined-basic" label="Search recipes..." variant="outlined" />
  );
}
