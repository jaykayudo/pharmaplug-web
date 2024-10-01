export default {
    home:"/",
    drugStore:"/drug-store",
    drugStoreFull:"/drug-store-all",
    drugs: (id)=> `/sickness/${id}/drugs`,
    drugDetails: (id)=> `/drugs/${id}`,
    doctorPortal:"/doctor-portal",
    doctorPortalCategory: (id)=>`/doctor-portal/${id}`,
    scheduleConsultation: (id)=>`/schedule-consultation/${id}`,
    login:"/login",
    doctorRegister:"/doctor/register",
    register:"/register",
    registerPreview:"/choose-user",
    cart:"/cart",
    checkout:"/checkout",
    blogs:"/blogs",
    partners:"/partners",
    forgotPassword:"/forgot-password",
    forgotPasswordVerify:"/forgot-password-verify",
    resetPassword:"/reset-password",

    // Doctors paths
    doctorDashboard: "/doctor/dashboard",
    doctorWallet: "/doctor/wallet",
    doctorSettings:"/doctor/settings",
    doctorConsultations:"/doctor/consultations",
    doctorReferral:"/doctor/referral",
    doctorSupport:"/doctor/support",

    // User paths
    userDashboard:"/account/dashboard",
    userHistory:"/account/history",
    userSettings:"/account/settings",
    userReferral:"/account/referral",
    userSupport:"/account/support",

}