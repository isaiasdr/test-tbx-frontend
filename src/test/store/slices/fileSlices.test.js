import { filesSlice, startLoadingFiles, setFiles, setSearchTerm } from "../../../store/slices";
import { fileDataTest, initialState, loadingFilesState, loadedFilesState, searchFilesState, testFileName } from "../../fixtures/filesFixtures";


describe('Tests in filesSlice', () => {
    test('filesSlice should be called "files" and return the initial state', () => {
       
        expect( filesSlice.name ).toBe( 'files' );
        const state = filesSlice.reducer( initialState, {} );
    
        expect( state ).toEqual( initialState );
    });

    test('Must perform the startLoading action', () => {

        const state = filesSlice.reducer( initialState, startLoadingFiles() );

        expect( state ).toEqual( loadingFilesState );
    });

    test('Must perform the setFiles action', () => {
        const state = filesSlice.reducer( loadingFilesState, setFiles(fileDataTest) );

        expect( state ).toEqual( loadedFilesState );
    });

    test('Must perform the setSearchTerm action', () => {

        const state = filesSlice.reducer( loadedFilesState, setSearchTerm( testFileName ) );

        expect( state ).toEqual( searchFilesState );
    })
});