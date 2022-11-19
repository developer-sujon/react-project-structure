class SessionHelper {
  static SetAccessToken(AccessToken) {
    localStorage.setItem("AccessToken", AccessToken);
  }
  static GetAccessToken() {
    return localStorage.getItem("AccessToken");
  }
  static RemoveAccessToken() {
    return localStorage.removeItem("AccessToken");
  }
  static SetUserDetails(User) {
    localStorage.setItem("User", JSON.stringify(User));
  }
  static GetUserDetails() {
    return JSON.parse(localStorage.getItem("User"));
  }
  static RemoveUserDetails() {
    return localStorage.removeItem("User");
  }
  static SetOtpEmail(Email) {
    return localStorage.setItem("OTPEmail", Email);
  }
  static GetOtpEmail() {
    return localStorage.getItem("OTPEmail");
  }
  static SetOtpCode(Otp) {
    return localStorage.setItem("OTPCode", Otp);
  }
  static GetOtpCode() {
    return localStorage.getItem("OTPCode");
  }

  static SetVerifyEmail(Email) {
    return localStorage.setItem("VerifyEmail", Email);
  }
  static GetVerifyEmail() {
    return localStorage.getItem("VerifyEmail");
  }
  static SetLanguage(Language) {
    localStorage.setItem("i18nextLng", Language);
  }
  static GetLanguage() {
    return localStorage.getItem("i18nextLng");
  }

  static ResetStorage() {
    localStorage.removeItem("AccessToken");
    localStorage.removeItem("User");
    localStorage.removeItem("OTPEmail");
    localStorage.removeItem("OTPCode");
  }
}

export default SessionHelper;
