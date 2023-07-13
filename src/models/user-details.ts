export interface UserDetails {
    Fname: string,
    Lname: string,
    Email: string,
    Password: string,
    cPassword: string,
    Radiobtn: string,
    dealership: string,
    DealershipNum: number,
    City: string,
    State: string,
    GSTNum: number
    isLogged: boolean,
    cart: any[]
}
export interface Admin {
    email: string,
    password: string,
    isLogged:boolean
}