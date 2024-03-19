import { createSlice } from '@reduxjs/toolkit';

type UIStates = {
    mobileMenu: boolean
}

const initialState: UIStates = {
    mobileMenu: false
};

export const uiStatesSlice = createSlice({
    name: 'uiStates',
    initialState,
    reducers: {
        toggleMobileMenu: (state) => {
            return state = {...state, mobileMenu: !state.mobileMenu}; 
        }
    },
});

export const { toggleMobileMenu } = uiStatesSlice.actions

export const uiStatesReducer =  uiStatesSlice.reducer