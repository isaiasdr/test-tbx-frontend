import { useEffect } from 'react';
import { Container, Table, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';


import { backendApi } from '../../helpers';
import { setFiles, startLoadingFiles } from '../../store/slices';
import { Loading } from '../ui';
import { ItemsFile, SearchInput } from './';

export const TableFiles = () => {

    const dispatch = useDispatch();
    const { isLoading, fileList, search } = useSelector( state => state.files )


    useEffect(() => {
        const abortController = new AbortController();

        const getFileList = async () => {
            dispatch( startLoadingFiles() );

            try {
                const { data } = await backendApi.get(`/data?fileName=${ search }`, {
                    signal: abortController.signal
                });

                dispatch( setFiles( data ) );
                
            } catch (error) {
                console.log(error);
                dispatch( setFiles( [] ) );
            }
        };

        getFileList();

        return () => {
            abortController.abort();
        };
    }, [ search ]);    

    return (
        <Container className='mt-4'>

            <Row className='d-flex justify-content-center mb-4'>
                <Col xs={ 12 } sm={ 6 } md={ 4 }>
                    <SearchInput />
                </Col>
            </Row>

            {
                isLoading
                ? (
                    <>
                        <Row className='d-flex justify-content-center mb-2'>
                            <Col xs={ 12 } sm={ 6 } md={ 4 } >
                                <Row className='d-flex justify-content-center mb-2'>
                                    <Loading />
                                </Row>
                            </Col>
                        </Row>
                    </>
                )
                : (
                    <Table striped bordered hover responsive >
                        <thead>
                            <tr>
                            <th>File Name</th>
                            <th>Text</th>
                            <th>Number</th>
                            <th>Hex</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                fileList.map( ({ file, lines } ) => (
                                    <ItemsFile key={ file } lines={ lines } filename={ file } />
                                ))
                            }        
                        </tbody>
                    </Table>
                )
            }
        </Container>
      );
}