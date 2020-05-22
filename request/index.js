// const baseUrl = 'http://123.207.32.32:8000/api/m3'
const baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1'
export const request= (params) => {
    return new Promise((resolve,reject) => {
        wx.request({
            ...params,
            url:baseUrl+params.url,
            success: (res)=>{
                resolve(res)
            },
            fail:(err)=> {
                reject(err)
            }
            
        })
    })
}
