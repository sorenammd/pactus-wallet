export class Params {
    private data: Map<string, string>;

    constructor() {
        this.data = new Map<string, string>();
    }

    setNumber(key: string, val: number): void {
        this.data.set(key, val.toString());
    }

    setBytes(key: string, val: Uint8Array): void {
        const base64 = Buffer.from(val).toString('base64');
        this.data.set(key, base64);
    }

    setString(key: string, val: string): void {
        this.data.set(key, val);
    }

    getNumber(key: string, defaultValue: number): number {
        const val = this.data.get(key);
        if (!val)
            return defaultValue;

        return parseInt(val, 10);
    }

    getBytes(key: string): Uint8Array {
        const val = this.data.get(key);
        if (val === undefined) throw new Error(`Key "${key}" not found`);
        return new Uint8Array(Buffer.from(val, 'base64'));
    }

    getString(key: string): string {
        const val = this.data.get(key);
        if (val === undefined) throw new Error(`Key "${key}" not found`);
        return val;
    }
}
