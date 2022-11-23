import {instance} from "./instance";

export const securityAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
    }
}
