import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "1909a996-577e-417f-8ed9-b0307898e20c"
    }
})

export const usersAPI = {
    // getUsers(currentPage = 1, pageSize = 10) {
    //     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    //         .then(response => response.data)
    // },
    getUsers(currentPage = 1, pageSize = 10, term?: string, friend?: boolean) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&term=${term}&friend=${friend}`)
            .then(response => response.data)
    },
    unFollow(id: string) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    follow(id: string) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId)
    },
}

export const profileAPI = {
    getProfile(userId: string) {
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

export const authAPI = {
    auth() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
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


