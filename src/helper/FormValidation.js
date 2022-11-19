class FormValidation {
  static IsEmpty(value) {
    return value.length <= 0;
  }
  static IsEmail(value) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regexEmail.test(value);
  }
  static IsMobile(value) {
    let regexMobile = /(^(\+88|0088|88)?(01){1}[3456789]{1}(\d){8})$/;
    return regexMobile.test(value);
  }
  static getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
}

export default FormValidation;
