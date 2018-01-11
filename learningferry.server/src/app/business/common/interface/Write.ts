export interface Write<T> {

    create: (item: T, callback: (results: any, error: any) => void) => void;
    update: (id: string, item: T, callback: (results: any, error: any) => void) => void
    delete: (id: string, callback: (results: any, error: any) => void) => void
}

export default Write