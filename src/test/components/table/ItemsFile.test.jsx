import { render, screen } from '@testing-library/react';

import { ItemsFile } from '../../../components/table';
import { filesSlice } from '../../../store/slices';
import { loadedFilesState } from '../../fixtures/filesFixtures';


describe('Tests in ItemsFile Component', () => {
    
    test('Should print 3 lines in the table', () => {
        
        const state = filesSlice.reducer( loadedFilesState, {} );

        render( <table><tbody><ItemsFile filename={ state.fileList[0].file } lines={ state.fileList[0].lines } /></tbody></table> );

        expect( screen.getAllByText( state.fileList[0].file ).length ).toBe( state.fileList[0].lines.length );
        expect( screen.getByText( state.fileList[0].lines[1].text ).innerHTML ).toBe( state.fileList[0].lines[1].text );
    });
});
