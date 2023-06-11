import card from "../../../public/icons/profile/card.svg";
import code from "../../../public/icons/profile/code.svg";
import favorite from "../../../public/icons/profile/favorite.svg";
import history from "../../../public/icons/profile/history.svg";
import payment from "../../../public/icons/profile/payment.svg";
import settings from "../../../public/icons/profile/settings.svg";
import support from "../../../public/icons/profile/support.svg";


export interface Profile {
    id: number;
    name: string;
    email: string;
}
export interface SubProfile {
    id: number;
    url: string;
    title: string;
}


export const profiles: SubProfile[] = [
    {
        id: 1,
        url: "",
        title: "Profile",
    },
    {
        id: 2,
        url: "",
        title: "Profile",
    },
    {
        id: 3,
        url: "",
        title: "Profile",
    },
];


export const testProfile: Profile = {
    id: 1,
    email: "random@gmail.com",
    name: "Test Profile",
}