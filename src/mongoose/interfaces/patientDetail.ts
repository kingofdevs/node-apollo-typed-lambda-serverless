export interface IPatientDetail {
  PatientId?: string
  address?: string
  mobileNumber?: string
  email?: string
  dateOfBirth?: string
  ssn?: string
  gender?: string
  otp?: number
  otpVerified?: boolean
  otpTTL?: string
  emailCode?: string
  isEmailVerified?: boolean
  emailCodeTTL?: string
  inviteCode?: string
  referralCode?: string
  securityQuestion1?: string
  securityQuestion1_answer?: string
  securityQuestion2?: string
  securityQuestion2_answer?: string
  securityQuestion3?: string
  securityQuestion3_answer?: string
  secretQuestion?: string
  secretQuestion_answer?: string
  isTcAccepted?: boolean
  isHIPPAAPrivacyAccepted?: boolean
  isPermissionToShare?: boolean
  maritalStatus?: string
  occupation?: string
  designation?: string
  employersName?: string
  employersAddress?: string
  employeeNumber?: string
  annualIncome?: number
  yearsWorkedInCurrentCompany?: string
  monthsWorkedInCurrentCompany?: string
  govtIdPic?: string
  isRequestIdUpdate?: boolean
  isIdNotMatch?: boolean
  prePay?: number
  prePayInstallment?: number
  ppi?: number
  ppiInstallment?: number
  isPpiPaymentSplit?: boolean
  isPrePayPaymentSplit?: boolean
  paymentFrequencyPrePay?: number
  paymentFrequencyPpi?: number
  assuredPaymentsToProviders?: number
  stripeKey?: string
}
