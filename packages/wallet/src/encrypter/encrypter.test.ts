import { DefaultMethod, Encrypter, ParameterKey, defaultEncrypter } from './encrypter';
import { Params } from './params';

describe('Encrypter Tests', () => {
    // testParams are designed to set encryption parameters to the minimum values for
    // faser and efficien tests
    let testParams = new Params()
    testParams.setNumber(ParameterKey.Iterations, 1)
    testParams.setNumber(ParameterKey.Memory, 8)
    testParams.setNumber(ParameterKey.Parallelism, 1)
    testParams.setNumber(ParameterKey.KeyLength, 48)

    it('should handle NopeEncrypter', async () => {
        // Create an Encrypter with no encryption method
        const enc = new Encrypter("", new Params());
        expect(enc.isEncrypted()).toBeFalsy();

        const msg = "foo";

        // Trying to encrypt with a non-empty password should fail
        await expect(enc.encrypt(msg, "password"))
            .rejects.toThrow("Invalid password");

        const cipher = await enc.encrypt(msg, "");

        // Trying to decrypt with a non-empty password should fail
        await expect(enc.decrypt(cipher, "password"))
            .rejects.toThrow("Invalid password");

        // Decrypt with empty password, should succeed.
        const decipher = await enc.decrypt(cipher, "");
        expect(decipher).toBe(msg);
    });

    it('should handle defaultEncrypter', () => {
        const enc = defaultEncrypter();

        expect(enc.method).toBe("ARGON2ID-AES_256_CTR-MACV1");
        expect(enc.params.getNumber("iterations")).toBe(3);
        expect(enc.params.getNumber("memory")).toBe(65536);
        expect(enc.params.getNumber("parallelism")).toBe(4);
        expect(enc.params.getNumber("keylen")).toBe(48);
        expect(enc.isEncrypted()).toBeTruthy();
    });

    it('should handle encryption and decryption', async () => {
        const enc = new Encrypter(DefaultMethod, testParams);
        expect(enc.isEncrypted()).toBeTruthy();

        const msg = "foo";
        const password = "cowboy";

        // Trying to encrypt with empty password should fail
        await expect(enc.encrypt(msg, ""))
            .rejects.toThrow("Invalid password");

        const cipher = await enc.encrypt(msg, password);

        await expect(enc.decrypt(cipher, ""))
            .rejects.toThrow("Invalid password");

        await expect(enc.decrypt(cipher, "invalid-password"))
            .rejects.toThrow("Invalid password");

        const decipher = await enc.decrypt(cipher, password);
        expect(decipher).toBe(msg);
    });

    it('should throw error for invalid encryption methods', async () => {
        const tests = [
            { method: "XXX-AES_256_CTR-MACV1" },
            { method: "ARGON2ID-XXX-MACV1" },
            { method: "ARGON2ID-AES_256_CTR-XXX" },
            { method: "XXX" },
        ];

        for (const tt of tests) {
            const enc = new Encrypter(tt.method, testParams);

            await expect(enc.encrypt("foo", "password"))
                .rejects.toThrow("Method not supported");

            await expect(enc.decrypt("AJFPsGu6bDMJ5iuMWDJS/87xVs7r", "password"))
                .rejects.toThrow("Method not supported");
        }
    });

    it('should handle invalid ciphers', async () => {
        const enc = new Encrypter(DefaultMethod, testParams);

        // Test decryption an empty ciphertext
        await expect(enc.decrypt("", "password"))
            .rejects.toThrow("Invalid cipher");

        // Test decryption with invalid base64 ciphertext
        await expect(enc.decrypt("invalid-base64", "password"))
            .rejects.toThrow("Invalid cipher");
    });

    it('Stream Cipher with keylen 48', async () => {
        const enc = new Encrypter(DefaultMethod, testParams);
        const msg = "foo"
        const password = "cowboy"
        const cipher = "8ADDJx3jXBQWKw3c7qwEkrTaZrBMrjQ="

        const decipher = await enc.decrypt(cipher, password);
        expect(decipher).toBe(msg);
    });
});
