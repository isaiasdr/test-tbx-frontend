import propTypes from 'prop-types';

export const ItemsFile = ( { lines, filename } ) => {
  return (
    <>
      {
          lines.map( (line, index) => (
              <tr key={ `${line.hex} - ${ index }` }>
                  <td>{ filename }</td>
                  <td>{ line.text }</td>
                  <td>{ line.number }</td>
                  <td>{ line.hex }</td>
              </tr>
          ))
      }
    </>
  )
}

ItemsFile.propTypes = {
  lines: propTypes.arrayOf( propTypes.exact({
    text: propTypes.string,
    number: propTypes.number,
    hex: propTypes.string
  })).isRequired,
  filename: propTypes.string.isRequired
}