import { useRef, useState, useEffect } from 'react';
import { useDispatch, } from 'react-redux';
import { Form } from 'react-bootstrap';

import { setSearchTerm } from '../../store/slices/filesSlices';

export const SearchInput = () => {

    const dispatch = useDispatch();

    const [ search, setSearch ] = useState('');

    const debounceRef = useRef();

    const handleChangeInput = ( event ) => {
        event.preventDefault();

        setSearch( event.target.value );
    }

    useEffect(() => {
        if ( debounceRef.current )
            clearTimeout( debounceRef.current );

        debounceRef.current = setTimeout( () => {
            dispatch( setSearchTerm( search ) );
        }, 500 );
        
    }, [ search ])
    

    return (
        <Form.Control
            placeholder="Search file"
            aria-label="input-search-file"
            aria-describedby="basic-addon2"
            value={ search }
            name='search'
            onChange={ handleChangeInput }
        />
    )
}
