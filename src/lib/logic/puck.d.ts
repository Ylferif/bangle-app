export interface IPuckConnection {
    on(event: string, cb: (...args: unknown[]) => void): void;
    emit(event: string, data: unknown): void;
    close(): void;
    write(data: String, cb: () => void): void;
    reconnect(cb: () => void): void;
    isOpen: boolean;
    isOpening: boolean;
    txInProgress: boolean
}

declare interface IPuck {
    connect(connectCallback: (connection: IPuckConnection | null) => void, disconnectCallback: () => void): IPuckConnection;
    test: number;
}

declare const Puck: IPuck;
export default Puck;