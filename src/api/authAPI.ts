import {instance} from "./instance";

export const authAPI = {
    auth() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string) {
        debugger
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}


