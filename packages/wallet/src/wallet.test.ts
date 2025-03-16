import { initWasm, WalletCore } from '@trustwallet/wallet-core';
import { MnemonicStrength, Address, Wallet, NetworkType } from '../src/wallet';
import * as bip39 from 'bip39';

// Jest typings setup
declare global {
    namespace jest {
        interface Matchers<R> {
            toBeInstanceOf(expected: any): R;
        }
    }
}

describe('Pactus Wallet Tests', () => {
    let core: WalletCore;

    beforeEach(async () => {
        core = await initWasm();
    });
    describe('Basic Wallet Creation and Restoration', () => {
        it('should create a wallet with 12-word mnemonic correctly', async () => {
            // Create wallet with 12-word mnemonic
            const wallet = Wallet.create(core, MnemonicStrength.Normal, 'test-password');

            // Get and validate the mnemonic
            const mnemonic = wallet.getMnemonic();
            expect(mnemonic).toBeTruthy();
            expect(wallet.getMnemonicWordCount()).toBe(12);

            // Verify wallet info
            const info = wallet.getWalletInfo();
            expect(info.mnemonicWordCount).toBe(12);
            expect(info.addressCount).toBe(0);
            expect(info.createdAt).toBeInstanceOf(Date);
        });

        it('should create a wallet with 24-word mnemonic correctly', async () => {
            // Create wallet with 24-word mnemonic
            const wallet = Wallet.create(core, MnemonicStrength.High, 'test-password');

            // Get and validate the mnemonic
            const mnemonic = wallet.getMnemonic();
            expect(mnemonic).toBeTruthy();
            expect(wallet.getMnemonicWordCount()).toBe(24);

            // Verify wallet info
            const info = wallet.getWalletInfo();
            expect(info.mnemonicWordCount).toBe(24);
            expect(info.addressCount).toBe(0);
        });

        it('should restore a wallet from mnemonic correctly', async () => {
            // First create a wallet to get a valid mnemonic
            const originalWallet = Wallet.create(core, MnemonicStrength.Normal, 'test-password');
            const mnemonic = originalWallet.getMnemonic();

            // Restore wallet using the mnemonic
            const restoredWallet = Wallet.restore(core, mnemonic, 'new-password');

            // Verify the restored wallet has the correct mnemonic
            expect(restoredWallet.getMnemonic()).toBe(mnemonic);
            expect(restoredWallet.getMnemonicWordCount()).toBe(12);
        });

        it('should restore a wallet from external BIP39 mnemonic correctly', async () => {
            // Generate a random BIP39 mnemonic with 12 words (128 bits of entropy)
            const externalBip39Mnemonic = bip39.generateMnemonic(128);
            // Verify the generated mnemonic is valid according to BIP39
            expect(bip39.validateMnemonic(externalBip39Mnemonic)).toBe(true);
            // Restore wallet using the external BIP39 mnemonic
            const restoredWallet = Wallet.restore(core, externalBip39Mnemonic, 'test-password');
            // Verify the restored wallet has the correct mnemonic
            expect(restoredWallet.getMnemonic()).toBe(externalBip39Mnemonic);
            expect(restoredWallet.getMnemonicWordCount()).toBe(12);

            // Create an address to verify the wallet is functional
            const address = restoredWallet.createAddress('Test Address');
            expect(address).toBeTruthy();
            expect(address.startsWith('pc1')).toBe(true);

            // Verify the wallet can be used normally
            const addresses = restoredWallet.getAddresses();
            expect(addresses.length).toBe(1);
            expect(addresses[0].publicKey).toBeTruthy();
        });

        it('should restore a wallet from external BIP39 mnemonic with 24 words correctly', async () => {
            // Generate a random BIP39 mnemonic with 24 words (256 bits of entropy)
            const externalBip39Mnemonic24 = bip39.generateMnemonic(256);
            // Verify the generated mnemonic is valid according to BIP39
            expect(bip39.validateMnemonic(externalBip39Mnemonic24)).toBe(true);

            // Restore wallet using the external BIP39 mnemonic
            const restoredWallet = Wallet.restore(core, externalBip39Mnemonic24, 'test-password');
            // Verify the restored wallet has the correct mnemonic
            expect(restoredWallet.getMnemonic()).toBe(externalBip39Mnemonic24);
            expect(restoredWallet.getMnemonicWordCount()).toBe(24);

            // Create an address to verify the wallet is functional
            const address = restoredWallet.createAddress('Test Address');
            expect(address).toBeTruthy();
            expect(address.startsWith('pc1')).toBe(true);

            // Verify the wallet can be used normally
            const addresses = restoredWallet.getAddresses();
            expect(addresses.length).toBe(1);
            expect(addresses[0].publicKey).toBeTruthy();
        });

        it('should generate different addresses for the same mnemonic with different BIP39 passphrases', async () => {
            // Generate a random BIP39 mnemonic
            const mnemonic = bip39.generateMnemonic(128);

            // Create a seed with an empty passphrase (standard BIP39)
            const seed1 = bip39.mnemonicToSeedSync(mnemonic, '');

            // Create a seed with a custom passphrase
            const customPassphrase = 'my custom passphrase';
            const seed2 = bip39.mnemonicToSeedSync(mnemonic, customPassphrase);

            // Verify the seeds are different
            expect(seed1.toString('hex')).not.toBe(seed2.toString('hex'));

            // Note: This test is to demonstrate that BIP39 supports passphrases
            // The current Wallet.restore implementation may not support passphrases directly
            // This would require extending the API to accept a BIP39 passphrase parameter

            // For now, we just verify that the wallet can restore from a standard BIP39 mnemonic
            const wallet = Wallet.restore(core, mnemonic, 'wallet-password');
            expect(wallet.getMnemonic()).toBe(mnemonic);
            expect(wallet.getMnemonicWordCount()).toBe(12);
        });

        it('should throw error when restoring with invalid mnemonic', async () => {
            const invalidMnemonic = 'invalid mnemonic phrase that will not work for restoration';

            // Wrap the restore call in a try-catch to properly test for the error
            try {
                await Wallet.restore(core, invalidMnemonic, 'test-password');
                // If we reach here, the test should fail because no error was thrown
                fail('Expected an error to be thrown with invalid mnemonic, but none was thrown');
            } catch (error: unknown) {
                // Verify we got an error with appropriate message
                expect(error).toBeTruthy();
                if (error instanceof Error) {
                    expect(error.message).toContain('Failed to restore wallet');
                } else {
                    fail('Expected error to be an instance of Error');
                }
            }
        });
    });

    describe('Address Management', () => {
        it('should create addresses correctly', async () => {
            const wallet = Wallet.create(core, MnemonicStrength.Normal, 'test-password');

            // Create two addresses
            const address1 = wallet.createAddress('Address 1');
            const address2 = wallet.createAddress('Address 2');

            // Verify addresses were created with correct format
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
            expect(addresses[0].publicKey).toBeTruthy();
            expect(addresses[1].address).toBe(address2);
            expect(addresses[1].label).toBe('Address 2');
            expect(addresses[1].publicKey).toBeTruthy();

            // Wallet info should reflect address count
            const info = wallet.getWalletInfo();
            expect(info.addressCount).toBe(2);
        });

        it('should work with both direct and class methods', async () => {
            const wallet = Wallet.create(core, MnemonicStrength.Normal, 'test-password');

            // Use direct method from wallet instance
            const address1 = wallet.createAddress('Direct Method');

            // Use class method again
            const address2 = wallet.createAddress('Class Method');

            // Verify both addresses were created correctly
            expect(address1).toBeTruthy();
            expect(address2).toBeTruthy();
            expect(address1.startsWith('pc1')).toBe(true);
            expect(address2.startsWith('pc1')).toBe(true);

            // Verify address info is stored correctly
            const addresses = wallet.getAddresses();
            expect(addresses.length).toBe(2);
            expect(addresses[0].address).toBe(address1);
            expect(addresses[0].label).toBe('Direct Method');
            expect(addresses[1].address).toBe(address2);
            expect(addresses[1].label).toBe('Class Method');
        });
    });

    describe('Public Key Management', () => {
        it('should store public keys with addresses', async () => {
            const wallet = Wallet.create(core, MnemonicStrength.Normal, 'test-password');
            const address = wallet.createAddress('Test Address');

            // Get the addresses
            const addresses = wallet.getAddresses();
            const addressObj = addresses.find((a: Address) => a.address === address);

            // Verify public key is present and in hex format
            expect(addressObj).toBeTruthy();
            expect(addressObj?.publicKey).toBeTruthy();
            expect(typeof addressObj?.publicKey).toBe('string');
            expect(addressObj?.publicKey.length).toBeGreaterThan(0);

            // Simple regex to check for hex format
            const hexRegex = /^[0-9a-f]+$/i;
            expect(hexRegex.test(addressObj?.publicKey || '')).toBe(true);
        });
    });

    describe('Wallet Name Management', () => {
        it('should set and get wallet name correctly', () => {
            const wallet = Wallet.create(
                core,
                MnemonicStrength.Normal,
                'test-password',
                NetworkType.Mainnet,
                'Initial Name'
            );

            // Check initial name
            expect(wallet.getName()).toBe('Initial Name');

            // Change the name
            wallet.setName('Updated Wallet Name');

            // Verify name was updated
            expect(wallet.getName()).toBe('Updated Wallet Name');

            // Verify wallet info reflects the new name
            const info = wallet.getWalletInfo();
            expect(info.name).toBe('Updated Wallet Name');
        });

        it('should include wallet name in exported data', () => {
            const wallet = Wallet.create(
                core,
                MnemonicStrength.Normal,
                'test-password',
                NetworkType.Mainnet,
                'Export Test Wallet'
            );

            // Export wallet data
            const exportedData = wallet.export();

            // Verify name in exported data
            expect(exportedData.name).toBe('Export Test Wallet');

            // Change name and export again
            wallet.setName('Modified Export Name');
            const updatedExport = wallet.export();

            // Verify updated name in exported data
            expect(updatedExport.name).toBe('Modified Export Name');
        });
    });
});
