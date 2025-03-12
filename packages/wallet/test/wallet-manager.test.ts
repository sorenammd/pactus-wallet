import { initWasm, WalletCore } from '@trustwallet/wallet-core';
import { MnemonicStrength, NetworkType, Wallet, WalletData } from '../src/wallet';
import { WalletManager } from '../src/wallet-manager';
import { MemoryStorage } from '../src/storage';
import { StorageError } from '../src/error';

describe('WalletManager Tests', () => {
    let core: WalletCore;
    let storage: MemoryStorage;
    let walletManager: WalletManager;
    const testPassword = 'test-password';
    const testMnemonic =
        'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about';

    beforeEach(async () => {
        core = await initWasm();
        storage = new MemoryStorage();
        walletManager = new WalletManager(core, storage);
    });

    describe('Wallet Creation', () => {
        it('should create a new wallet with default settings', async () => {
            const wallet = await walletManager.createWallet(testPassword);

            expect(wallet).toBeTruthy();
            expect(wallet.getMnemonicWordCount()).toBe(12); // Default strength is Normal (12 words)
            expect(wallet.getNetworkType()).toBe(NetworkType.Mainnet); // Default network is Mainnet
            expect(wallet.getName()).toBe('My Wallet'); // Default name

            // Verify that the wallet is set as current wallet
            const currentWallet = walletManager.getCurrentWallet();
            expect(currentWallet).toBe(wallet);

            // Verify wallet was saved to storage
            const hasWallet = await walletManager.hasWallet();
            expect(hasWallet).toBe(true);
        });

        it('should create a wallet with custom settings', async () => {
            const customName = 'Custom Wallet';
            const wallet = await walletManager.createWallet(
                testPassword,
                MnemonicStrength.High,
                NetworkType.Testnet,
                customName
            );

            expect(wallet).toBeTruthy();
            expect(wallet.getMnemonicWordCount()).toBe(24); // High strength (24 words)
            expect(wallet.getNetworkType()).toBe(NetworkType.Testnet);
            expect(wallet.getName()).toBe(customName);
        });
    });

    describe('Wallet Restoration', () => {
        it('should restore a wallet from mnemonic with default settings', async () => {
            const wallet = await walletManager.restoreWallet(testMnemonic, testPassword);

            expect(wallet).toBeTruthy();
            expect(wallet.getMnemonic()).toBe(testMnemonic);
            expect(wallet.getNetworkType()).toBe(NetworkType.Mainnet); // Default network is Mainnet
            expect(wallet.getName()).toBe('My Wallet'); // Default name

            // Verify that the wallet is set as current wallet
            const currentWallet = walletManager.getCurrentWallet();
            expect(currentWallet).toBe(wallet);

            // Verify wallet was saved to storage
            const hasWallet = await walletManager.hasWallet();
            expect(hasWallet).toBe(true);
        });

        it('should restore a wallet with custom settings', async () => {
            const customName = 'Restored Wallet';
            const wallet = await walletManager.restoreWallet(
                testMnemonic,
                testPassword,
                NetworkType.Testnet,
                customName
            );

            expect(wallet).toBeTruthy();
            expect(wallet.getMnemonic()).toBe(testMnemonic);
            expect(wallet.getNetworkType()).toBe(NetworkType.Testnet);
            expect(wallet.getName()).toBe(customName);
        });

        it('should throw an error when restoring with invalid mnemonic', async () => {
            const invalidMnemonic = 'invalid mnemonic phrase';
            await expect(
                walletManager.restoreWallet(invalidMnemonic, testPassword)
            ).rejects.toThrow();
        });
    });

    describe('Wallet Saving', () => {
        it('should save the current wallet to storage', async () => {
            // Create a wallet
            const wallet = await walletManager.createWallet(testPassword);
            wallet.createAddress('Address 1');

            // Modify wallet (add an address)
            wallet.createAddress('Address 2');

            // Detailed logging before save
            const walletToSave = walletManager.getCurrentWallet();
            console.log('Wallet Before Save:', {
                mnemonic: walletToSave?.getMnemonic(),
                addresses: walletToSave?.getAddresses().map(addr => ({
                    path: addr.path,
                    address: addr.address,
                    label: addr.label,
                    publicKey: addr.publicKey
                })),
                nextEd25519Index: (walletToSave as any)?.nextEd25519Index
            });

            // Attempt to save with comprehensive error handling
            let savedData;
            try {
                // Verify storage methods are working
                const testKey = 'test_storage_check';
                const testValue = 'test_value';

                console.log('Checking storage availability...');
                await storage.set(testKey, testValue);
                const retrievedValue = await storage.get(testKey);
                console.log('Storage test:', { testKey, testValue, retrievedValue });

                if (retrievedValue !== testValue) {
                    throw new Error('Storage get/set test failed');
                }

                await storage.delete(testKey);

                // Now save the wallet
                savedData = await walletManager.saveWallet(testPassword);
                console.log('Saved Data:', savedData);
            } catch (error) {
                console.error('Comprehensive save error:', {
                    error,
                    errorName: error instanceof Error ? error.name : 'Unknown Error',
                    errorMessage: error instanceof Error ? error.message : 'No error message',
                    errorStack: error instanceof Error ? error.stack : 'No stack trace'
                });

                // If storage methods are not working, log the storage object
                console.log('Storage object:', {
                    storageType: storage.constructor.name,
                    storageKeys: Object.keys(storage),
                    storagePrototype: Object.getPrototypeOf(storage)
                });

                throw error;
            }

            // Verify saved data
            expect(savedData).toBeTruthy();
            if (savedData) {
                expect(savedData.addresses.length).toBe(2);
                expect(savedData.addresses[0].label).toBe('Address 1');
                expect(savedData.addresses[1].label).toBe('Address 2');
            }

            // Reload wallet to verify changes were saved
            walletManager = new WalletManager(core, storage);
            const loadedWallet = await walletManager.loadWallet(testPassword);
            const addresses = loadedWallet?.getAddresses() || [];
            expect(addresses.length).toBe(2);
        });

        it('should return null when no wallet is loaded', async () => {
            const result = await walletManager.saveWallet(testPassword);
            expect(result).toBeNull();
        });
    });

    describe('Wallet Deletion', () => {
        it('should delete wallet from storage', async () => {
            // Create a wallet
            await walletManager.createWallet(testPassword);

            // Verify wallet exists
            expect(await walletManager.hasWallet()).toBe(true);
            expect(walletManager.getCurrentWallet()).toBeDefined();

            // Delete wallet
            const result = await walletManager.deleteWallet();
            expect(result).toBe(true);

            // Verify wallet no longer exists
            expect(await walletManager.hasWallet()).toBe(false);
            expect(walletManager.getCurrentWallet()).toBeUndefined();
        });
    });

    describe('Wallet Detection', () => {
        it('should correctly detect if a wallet exists in storage', async () => {
            // Initially no wallet
            expect(await walletManager.hasWallet()).toBe(false);

            // Create a wallet
            await walletManager.createWallet(testPassword);

            // Now wallet exists
            expect(await walletManager.hasWallet()).toBe(true);

            // Delete wallet
            await walletManager.deleteWallet();

            // Wallet no longer exists
            expect(await walletManager.hasWallet()).toBe(false);
        });
    });

    describe('Error Handling', () => {
        it('should handle storage errors when saving', async () => {
            // Create a wallet
            await walletManager.createWallet(testPassword);

            // Mock storage.set to throw an error
            jest.spyOn(storage, 'set').mockImplementation(() => {
                throw new Error('Storage error');
            });

            // Attempt to save should throw StorageError
            await expect(walletManager.saveWallet(testPassword)).rejects.toThrow(StorageError);
        });

        it('should handle storage errors when deleting', async () => {
            // Create a wallet
            await walletManager.createWallet(testPassword);

            // Mock storage.delete to throw an error
            jest.spyOn(storage, 'delete').mockImplementation(() => {
                throw new Error('Storage error');
            });

            // Attempt to delete should throw StorageError
            await expect(walletManager.deleteWallet()).rejects.toThrow(StorageError);
        });
    });

    describe('Wallet Manager without Storage', () => {
        it('should create a wallet without storage', async () => {
            const walletManager = new WalletManager(core);
            const wallet = await walletManager.createWallet(testPassword);
            expect(wallet).toBeTruthy();
            expect(walletManager.getCurrentWallet()).toBe(wallet);
        });

        it('should not save wallet to storage when no storage is provided', async () => {
            const walletManager = new WalletManager(core);
            const wallet = await walletManager.createWallet(testPassword);

            const savedData = await walletManager.saveWallet(testPassword);
            expect(savedData).toBeTruthy();
            expect(savedData?.mnemonic).toBe(wallet.getMnemonic());
        });

        it('should return null when loading wallet without storage', async () => {
            const walletManager = new WalletManager(core);
            const wallet = await walletManager.createWallet(testPassword);

            const loadedWallet = await walletManager.loadWallet(testPassword);
            expect(loadedWallet).toBeNull();
        });

        it('should return false for hasWallet when no storage is provided', async () => {
            const walletManager = new WalletManager(core);
            await walletManager.createWallet(testPassword);

            const hasWallet = await walletManager.hasWallet();
            expect(hasWallet).toBe(false);
        });

        it('should delete current wallet when no storage is provided', async () => {
            const walletManager = new WalletManager(core);
            await walletManager.createWallet(testPassword);

            const result = await walletManager.deleteWallet();
            expect(result).toBe(true);
            expect(walletManager.getCurrentWallet()).toBeUndefined();
        });
    });
});
