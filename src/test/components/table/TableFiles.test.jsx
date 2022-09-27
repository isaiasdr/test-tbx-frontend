import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { TableFiles } from '../../../components/table';
import { filesSlice } from '../../../store/slices';
import { loadingFilesState } from '../../fixtures/filesFixtures';

const store = configureStore({
    reducer: {
        files: filesSlice.reducer
    },
    preloadedState: {
        files: loadingFilesState
    }
});

describe('Tests in TableFiles', () => {
    test('Should show the Loading Spinner', () => {

        render(
            <Provider store={ store }>
                <TableFiles />
            </Provider>
        );

        expect( screen.getAllByText('Loading...').length ).toBe(1);
    });

    test('Should show the search input', () => {
        render(
            <Provider store={ store }>
                <TableFiles />
            </Provider>
        );

        expect( screen.getByLabelText('input-search-file') ).toBeTruthy();
    });
});
