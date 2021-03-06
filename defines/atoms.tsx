import {atom} from "recoil";

export const createUserData = atom<{name: string;}>({
    key: "createUserData",
    default: {
        name: ""
    }
});

export const modalData_TodoReEditModal = atom<{
    show: boolean;
    id: string;
    name: string;
    description: string;
    deadlineAt: Date;
}>({
    key: "modalData_TodoReEditModal",
    default: {
        show: false,
        name: "",
        description: "",
        deadlineAt: new Date()
    }
});

export const modalData_YesNoModalDialog = atom<{
    show: boolean;
    processing: boolean,
    message: string;
    onSelectYes: () => void;
    onSelectNo: () => void;
}>({
    key: "modalData_YesNoModalDialog",
    default: {
        show: false,
        processing: false,
        message: "",
        onSelectYes: () => {return},
        onSelectNo: () => {return}
    }
});

export const modalData_NoticeModalDialog = atom<{
    show: boolean;
    message: string;
    onClose: () => void;
}>({
    key: "modalData_NoticeModalDialog",
    default: {
        show: false,
        message: "",
        onClose: () => {}
    }
});

export const modalShow_UserSettingsModal = atom<boolean>({
    key: "modalShow_UserSettingsModal",
    default: false
});

export const modalShow_TodoEditModal = atom<boolean>({
    key: "modalShow_TodoEditModal",
    default: false
});

export const modalData_TodoDetailModal = atom<{
    show: boolean;
    id: string;
    name: string;
    description: string;
    status: string;
    type: string;
    deadlineAt: Date;
    updatedAt: Date;
    createdAt: Date;
}>({
    key: "modalData_TodoDetailModal",
    default: {
        show: false,
        id: "",
        name: "",
        description: "",
        status: "yet",
        type: "normal",
        deadlineAt: new Date(),
        updatedAt: new Date(),
        createdAt: new Date()
    }
});

export const modalData_CheckListModal = atom<{
    show: boolean;
    id: string;
    name: string;
}>({
    key: "modalData_CheckListModal",
    default: {
        show: false,
        id: "",
        name: ""
    }
});

export const userInfo = atom<{
    name: string;
}>({
    key: "userInfo",
    default: {
        name: ""
    }
});
