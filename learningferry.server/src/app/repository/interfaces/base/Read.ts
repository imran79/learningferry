interface Read<T> {
    findAll: (callback: (er: any, reuslts: any) => void) => void;
    findById: (id: string, callback: (er: any, results: T) => void) => void;

}
export default Read;