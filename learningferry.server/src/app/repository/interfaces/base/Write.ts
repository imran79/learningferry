import * as mongoose from 'mongoose';

interface Write<T> {
    create: (item: T, callback: (error: any, results: any) => void) => void;
    update: (id: mongoose.Types.ObjectId, item: T, callback: (error: any, results: any) => void) => void;
    delete: (id: string, callback: (error: any, results: any) => void) => void;

}
export default Write;