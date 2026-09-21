
export const convertToEnglishDigits = (str = "") => {
  if (!str) return "";
  return str
    .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
    .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d));
};

export const hasPersianCharacters = (str = "") => {
  return /[\u0600-\u06FF]/.test(str);
};


export const validatePhoneLive = (phone = "") => {
  if (hasPersianCharacters(phone)) {
    return "⚠️ صفحه کلید شما فارسی است! لطفاً شماره را با صقحه کلید انگلیسی وارد کنید.";
  }

  const cleanPhone = convertToEnglishDigits(phone).trim();

  if (cleanPhone.length >= 2 && !cleanPhone.startsWith("09")) {
    return "شماره تلفن باید حتماً با ۰۹ شروع شود.";
  }

  if (cleanPhone.length > 11) {
    return "شماره تلفن نمی‌تواند بیشتر از ۱۱ رقم باشد.";
  }

  return "";
};


export const checkPasswordCriteria = (password = "") => {
  const hasPersian = hasPersianCharacters(password);
  const minLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  const isValid = minLength && hasUpper && hasLower && hasNumber && !hasPersian;

  return {
    hasPersian,
    minLength,
    hasUpper,
    hasLower,
    hasNumber,
    isValid,
  };
};


export const validatePasswordLive = (password = "") => {
  if (!password) return "لطفاً رمز عبور را وارد کنید.";

  if (hasPersianCharacters(password)) {
    return "⚠️ زبان صفحه کلید شما فارسی است! رمز عبور باید فقط شامل حروف و اعداد انگلیسی باشد.";
  }

  const criteria = checkPasswordCriteria(password);

  if (!criteria.minLength) {
    return "رمز عبور باید حداقل 8 کاراکتر باشد.";
  }
  if (!criteria.hasUpper) {
    return "رمز عبور باید حداقل شامل یک حرف بزرگ انگلیسی (A-Z) باشد.";
  }
  if (!criteria.hasLower) {
    return "رمز عبور باید حداقل شامل یک حرف کوچک انگلیسی (a-z) باشد.";
  }
  if (!criteria.hasNumber) {
    return "رمز عبور باید حداقل شامل یک عدد (0-9) باشد.";
  }

  return "";
};

// ۴. اعتبارسنجی نام و نام خانوادگی
export const validateFullName = (name = "") => {
  const trimmedName = name.trim();
  const persianRegex = /^[\u0600-\u06FF\s]+$/;

  if (!trimmedName) {
    return "لطفاً نام و نام خانوادگی خود را وارد کنید.";
  }
  if (trimmedName.length < 3) {
    return "نام و نام خانوادگی باید حداقل ۳ حرف باشد.";
  }
  if (!persianRegex.test(trimmedName)) {
    return "نام و نام خانوادگی فقط باید شامل حروف فارسی باشد.";
  }
  return "";
};

// ۵. اعتبارسنجی تکرار رمز عبور
export const validateConfirmPassword = (
  password = "",
  confirmPassword = "",
) => {
  if (!confirmPassword) {
    return "لطفاً تکرار رمز عبور را وارد کنید.";
  }
  if (password !== confirmPassword) {
    return "رمز عبور و تکرار آن با هم مطابقت ندارند.";
  }
  return "";
};



export const validateLoginForm = (values = {}) => {
  const errors = {};

  const phoneErr = validatePhoneLive(values.phone);
  if (phoneErr) errors.phone = phoneErr;

  const passErr = validatePasswordLive(values.password);
  if (passErr) errors.password = passErr;

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateRegisterForm = (values = {}) => {
  const errors = {};

  const nameErr = validateFullName(values.fullName);
  if (nameErr) errors.fullName = nameErr;

  const phoneErr = validatePhoneLive(values.phone);
  if (phoneErr) errors.phone = phoneErr;

  const passErr = validatePasswordLive(values.password);
  if (passErr) errors.password = passErr;

  const confirmErr = validateConfirmPassword(
    values.password,
    values.confirmPassword,
  );
  if (confirmErr) errors.confirmPassword = confirmErr;

  if (!values.acceptTerms) {
    errors.acceptTerms = "لطفاً قوانین و مقررات کنکورینو را بپذیرید.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
