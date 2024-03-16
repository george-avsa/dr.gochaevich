import { createSlice } from '@reduxjs/toolkit';

import chestImage from './../assets/images/services/png/chest.png';
import bodyImage from './../assets/images/services/png/body.png';
import stomachImage from './../assets/images/services/png/stomach.png';
import blefaroplastyImage from './../assets/images/services/png/blefaroplasty.png';

export type ServiceImage = {
    type: string,
    image: string,
}

export type Service = {
    active: boolean, 
    title: string,
    description: string,
    image: ServiceImage,
}

const initialState: Service[] = [
    {active: true, title: 'Маммопластика', 
        image: {
            type: "chest", 
            image: chestImage,
        },
        description: 'Каждое тело уникально, и именно поэтому мы подбираем наши решения  индивидуально. Мы подчеркиваем вашу уникальность, создавая гармоничные формы, которые лучше всего подходят именно вам.'},
    {active: false, title: 'Блефаропластика', 
        image: {
            type: "blefaroplasty", 
            image: blefaroplastyImage,
        },
        description: 'Каждое тело уникально, и именно поэтому мы подбираем наши решения  индивидуально. Мы подчеркиваем вашу уникальность, создавая гармоничные формы, которые лучше всего подходят именно вам.'},
    {active: false, title: 'Липосакция', 
        image: {
            type: "body", 
            image: bodyImage,
        },
        description: 'Каждое тело уникально, и именно поэтому мы подбираем наши решения  индивидуально. Мы подчеркиваем вашу уникальность, создавая гармоничные формы, которые лучше всего подходят именно вам.'},
    {active: false, title: 'Абдоминопластика', 
        image: {
            type: "stomach", 
            image: stomachImage,
        },
        description: 'Каждое тело уникально, и именно поэтому мы подбираем наши решения  индивидуально. Мы подчеркиваем вашу уникальность, создавая гармоничные формы, которые лучше всего подходят именно вам.'},
];

export const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        changeActive: (state, {payload}) => {
            return state.map(service => {
                if (payload === service.title) {
                    return {...service, active: true};
                }
                return {...service, active: false};
            });
        }
    },
});

export const { changeActive } = servicesSlice.actions

export const servicesReducer =  servicesSlice.reducer