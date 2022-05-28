import * as Yup from 'yup';
import { TFunction } from 'i18next';

const emailAddressRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const isPhoneNumberValid = (phoneNumber: string | null | undefined): boolean => {
    return ((phoneNumber?.trim()?.length ?? 0) > 9 && (phoneNumber?.trim()?.length ?? 0) <12 );
};
const isEmailAddressValid = (emailAddress: string | null | undefined): boolean => {
    return (emailAddress?.trim()?.length ?? 0) <= 150 && emailAddressRegex.test(emailAddress ?? '');
};


export const validationSchema = (t: TFunction) => {
    return Yup.object().shape({
        emailAddress: Yup.string()
            .required(t('emailAddress.validation.required'))
            .test('format', t('emailAddress.validation.format'), (emailAddress) => isEmailAddressValid(emailAddress)),
        mobileNumber: Yup.string()
            .required(t('mobileNumber.validation.required'))
            .test('format', t('phoneNumbers.validation.format'), (phoneNumber) => isPhoneNumberValid(phoneNumber)),
        homePhoneNumber: Yup.string()
            .optional()
            .test('format', t('phoneNumbers.validation.format'), (phoneNumber) => isPhoneNumberValid(phoneNumber)),
        workPhoneNumber: Yup.string()
            .optional()
            .test('format', t('phoneNumbers.validation.format'), (phoneNumber) => isPhoneNumberValid(phoneNumber)),
    });
};