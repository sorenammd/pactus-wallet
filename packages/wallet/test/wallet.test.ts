import { initWasm } from '@trustwallet/wallet-core';
import { Wallet, MnemonicStrength } from '../src/wallet';
import { WalletCore } from '@trustwallet/wallet-core';

describe('Wallet Tests', () => {
    let core: WalletCore;

    beforeEach(async () => {
        core = await initWasm();
    });

    describe('Wallet Creation with Different Mnemonic Strengths', () => {
        it('should create a wallet with 12-word mnemonic and validate it', async () => {
            // Create wallet with 12-word mnemonic
            const wallet = Wallet.create(core, MnemonicStrength.Normal, '');
            // Get and validate the mnemonic
            const mnemonic = wallet.getMnemonic();
            const wordCount = mnemonic.split(' ').length;
            // Verify we have 12 words
            expect(wordCount).toBe(12);

            // Validate the mnemonic
            const validation = Wallet.validateMnemonic(mnemonic);
            expect(validation.isValid).toBe(true);

            // Create addresses using the wallet
            const address1 = wallet.newEd25519Address('Address 1');
            const address2 = wallet.newEd25519Address('Address 2');

            // Verify addresses were created correctly
            expect(address1).toBeTruthy();
            expect(address2).toBeTruthy();
            expect(address1.startsWith('pc1')).toBe(true);
            expect(address2.startsWith('pc1')).toBe(true);
            expect(address1).not.toBe(address2); // Addresses should be different

            // Verify address info is stored correctly
            const addresses = wallet.getAddresses();
            expect(addresses.length).toBe(2);
            expect(addresses[0].address).toBe(address1);
            expect(addresses[0].label).toBe('Address 1');
            expect(addresses[1].address).toBe(address2);
            expect(addresses[1].label).toBe('Address 2');
        });

        it('should create a wallet with 24-word mnemonic and validate it', async () => {
            // Create wallet with 24-word mnemonic
            const wallet = Wallet.create(core, MnemonicStrength.High, '');

            // Get and validate the mnemonic
            const mnemonic = wallet.getMnemonic();
            const wordCount = mnemonic.split(' ').length;

            // Verify we have 24 words
            expect(wordCount).toBe(24);

            // Validate the mnemonic
            const validation = Wallet.validateMnemonic(mnemonic);
            expect(validation.isValid).toBe(true);

            // Create addresses using the wallet
            const address1 = wallet.newEd25519Address('High Security 1');
            const address2 = wallet.newEd25519Address('High Security 2');

            // Verify addresses were created correctly
            expect(address1).toBeTruthy();
            expect(address2).toBeTruthy();
            expect(address1.startsWith('pc1')).toBe(true);
            expect(address2.startsWith('pc1')).toBe(true);
            expect(address1).not.toBe(address2); // Addresses should be different

            // Verify address info is stored correctly
            const addresses = wallet.getAddresses();
            expect(addresses.length).toBe(2);
            expect(addresses[0].address).toBe(address1);
            expect(addresses[0].label).toBe('High Security 1');
            expect(addresses[1].address).toBe(address2);
            expect(addresses[1].label).toBe('High Security 2');
        });
    });

    describe('Wallet Recovery and Validation', () => {
        it('should restore a wallet from 12-word mnemonic and create addresses', async () => {
            // First create a wallet to get a valid mnemonic
            const originalWallet = Wallet.create(core, MnemonicStrength.Normal, '');
            const mnemonic = originalWallet.getMnemonic();

            // Restore wallet using the mnemonic
            const restoredWallet = Wallet.restore(core, mnemonic, '');

            // Verify the restored wallet has the correct mnemonic
            expect(restoredWallet.getMnemonic()).toBe(mnemonic);
            expect(restoredWallet.getMnemonicWordCount()).toBe(12);

            // Create addresses using the restored wallet
            const address = restoredWallet.newEd25519Address('Restored Address');

            // Verify address creation works
            expect(address).toBeTruthy();
            expect(address.startsWith('pc1')).toBe(true);
        });

        it('should restore a wallet from 24-word mnemonic and create addresses', async () => {
            // First create a wallet to get a valid mnemonic
            const originalWallet = Wallet.create(core, MnemonicStrength.High, '');
            const mnemonic = originalWallet.getMnemonic();

            // Restore wallet using the mnemonic
            const restoredWallet = Wallet.restore(core, mnemonic, '');

            // Verify the restored wallet has the correct mnemonic
            expect(restoredWallet.getMnemonic()).toBe(mnemonic);
            expect(restoredWallet.getMnemonicWordCount()).toBe(24);

            // Create addresses using the restored wallet
            const address = restoredWallet.newEd25519Address('Restored High Security');

            // Verify address creation works
            expect(address).toBeTruthy();
            expect(address.startsWith('pc1')).toBe(true);
        });

        it('should validate mnemonics correctly', () => {
            // Valid 12-word mnemonic (example)
            const valid12Word =
                'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon cactus';
            const validation12 = Wallet.validateMnemonic(valid12Word);
            expect(validation12.isValid).toBe(true);

            // Invalid mnemonic (too short)
            const tooShort = 'abandon abandon abandon';
            const validationShort = Wallet.validateMnemonic(tooShort);
            expect(validationShort.isValid).toBe(false);
            expect(validationShort.error).toContain('expected 12 or 24 words');

            // Invalid mnemonic (contains invalid characters)
            const invalidChars =
                'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon 123';
            const validationInvalid = Wallet.validateMnemonic(invalidChars);
            expect(validationInvalid.isValid).toBe(false);
            expect(validationInvalid.error).toContain('contains non-alphabet characters');
        });
    });
});
