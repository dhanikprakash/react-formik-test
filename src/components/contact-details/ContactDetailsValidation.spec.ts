import { validationSchema } from './ContactDetailsValidation';
import { TFunction } from 'i18next';


describe('Change Contact Details Validation', () => {
     const mockedT: TFunction = (key: string): string => key;

    it('should not return any validation errors when object is valid', async () => {
        const defaultContactDetails = {
            emailAddress: 'sample@domain.com',
            mobileNumber: '1234567891',
            homePhoneNumber: '1234567891',
            workPhoneNumber: '1234567891',
        };
    
        const result = validationSchema(mockedT).isValidSync(defaultContactDetails)
        await expect(result).toEqual(true);
    });

    it('should return validation errors when object is invalid', async () => {
        const defaultContactDetails = {
            emailAddress: 'invalid',
            mobileNumber: '',
        };
    
        const result = validationSchema(mockedT).isValidSync(defaultContactDetails)
        await expect(result).toEqual(false);
    });

    const defaultContactDetails = {
        emailAddress: 'sample@domain.com',
        mobileNumber: '1234567891',
        homePhoneNumber: '1234567891',
        workPhoneNumber: '1234567891',
    };

    const testCases: [string, {}, string][] = [
        ['email address is undefined', { emailAddress: undefined }, 'emailAddress.validation.required'],
        ['email address is blank', { emailAddress: '' }, 'emailAddress.validation.required'],
        ['email address is invalid', { emailAddress: 'invalid' }, 'emailAddress.validation.format'],
        ['mobile number is undefined', { mobileNumber: undefined }, 'mobileNumber.validation.required'],
        ['mobile number is blank', { mobileNumber: '' }, 'mobileNumber.validation.required'],
        ['mobile number is invalid', { mobileNumber: 'invalid' }, 'phoneNumbers.validation.format'],
    ];

    it.each(testCases)('should return expected validation error message for %s', async (_name, props, expected) => {
        const contactDetails = {
            ...defaultContactDetails,
            ...props,
        };

        const {errors} = await validationSchema(mockedT).validate(contactDetails).catch((error) => error);

        expect(errors[0]).toBe(expected);
    });
});