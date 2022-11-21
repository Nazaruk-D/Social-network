import {instance} from "./instance";

export const profileAPI = {
    getProfile(userId: number | string) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status})
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo/`, formData, {headers: {'Content-type': 'multipart/form-data'}})
    },
    updateProfileData(data: ProfileDataTypeServer) {
        return instance.put(`profile`, data)
    },
}


export type ProfileDataTypeServer = {
    userId: string | number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
}