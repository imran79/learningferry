export interface Read<T> {

    findAll: (callback: (results: any, error: any) => void) => void;
    findById: (id: string, callback: (results: any, error: any) => void) => void;


}

export default Read;