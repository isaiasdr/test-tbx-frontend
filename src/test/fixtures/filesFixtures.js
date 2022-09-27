export const initialState = {
    isLoading: false,
    fileList: [],
    search: '',
};

export const loadingFilesState = {
    isLoading: true,
    fileList: [],
    search: '',
};

export const loadedFilesState = {
    isLoading: false,
    fileList: [
        {
            file: 'testing.csv',
            lines: [
                {
                    text: 'skdakhdjhjfsa',
                    number: 1376217461,
                    hex: 'asdvysiudyasd'
                },
                {
                    text: 'ndkagduagdgasieq',
                    number: 8417361746,
                    hex: 'mzkmfvqjkhrqhkfhqkd'
                },
                {
                    text: 'isafgjssjdhJGDHGE',
                    number: 89471586417,
                    hex: 'asjflakhhrqhbvxnzbmfk'
                }
            ]
        }
    ],
    search: '',
};

export const searchFilesState = {
    isLoading: false,
    fileList: [
        {
            file: 'testing.csv',
            lines: [
                {
                    text: 'skdakhdjhjfsa',
                    number: 1376217461,
                    hex: 'asdvysiudyasd'
                },
                {
                    text: 'ndkagduagdgasieq',
                    number: 8417361746,
                    hex: 'mzkmfvqjkhrqhkfhqkd'
                },
                {
                    text: 'isafgjssjdhJGDHGE',
                    number: 89471586417,
                    hex: 'asjflakhhrqhbvxnzbmfk'
                }
            ]
        }
    ],
    search: 'test3.csv',
};

export const testFileName = 'test3.csv';

export const fileDataTest = [
    {
        file: 'testing.csv',
        lines: [
            {
                text: 'skdakhdjhjfsa',
                number: 1376217461,
                hex: 'asdvysiudyasd'
            },
            {
                text: 'ndkagduagdgasieq',
                number: 8417361746,
                hex: 'mzkmfvqjkhrqhkfhqkd'
            },
            {
                text: 'isafgjssjdhJGDHGE',
                number: 89471586417,
                hex: 'asjflakhhrqhbvxnzbmfk'
            }
        ]
    }
];