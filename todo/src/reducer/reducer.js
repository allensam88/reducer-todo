export const initialState = [
    {
        task: 'laundry',
        completed: false,
        id: 1
    },
    {
        task: 'buy groceries',
        completed: false,
        id: 2
    },
    {
        task: 'wash car',
        completed: false,
        id: 3
    },
    {
        task: 'get oil change',
        completed: false,
        id: 4
    },
    {
        task: 'feed pet',
        completed: false,
        id: 5
    },
    {
        task: 'get haircut',
        completed: false,
        id: 6
    }
]

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, { task: action.payload, completed: false, id: Date.now() }]
        case 'TOGGLE_COMPLETE':
            return state.map(item => {
                return item.id === action.payload ? { ...item, completed: !item.completed } : item;
            });
        case 'CLEAR_ITEM':
            return state.filter(item => {
                return item.completed === false;
            });
        default:
            return state
    }
}