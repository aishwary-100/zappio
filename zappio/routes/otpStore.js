const otpStore = new Map();

export const saveOTP = (phone, otp) => otpStore.set(phone, otp);
export const getOTP = (phone) => otpStore.get(phone);
export const clearOTP = (phone) => otpStore.delete(phone);

export default otpStore;
