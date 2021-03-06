import {greenTruck} from '../comps/firstComp'
import {recycle} from '../comps/secondComp'
import {chatChat} from '../comps/bubble'
import {globe} from '../comps/Globe'
export default 
{
    title: "Animated Components"
}

export const myTruck = () => greenTruck;
export const myBin= () => recycle;
export const myChat= () => chatChat;
export const myLogo = () => globe;