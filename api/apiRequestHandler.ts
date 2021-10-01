// Lets make a generic api handler that can be invoked instead of
// importing axios in every file where we need to make a call.
// We'll also use the singleton pattern here to avoid unnecessary overhead when instantiating classes
// The singleton pattern makes one class and that class is used everytime, as opposed to creating a
// new one everytime we need to make an api call

class ImagesApi {

    get = async (url: string, queryString: string): Promise<String | undefined> => {
        try {
            // ...code goes here
            // ex...
            const res = await fetch(url + queryString);
            // I'm using javascripts built in fetch api. Either this or axios will work
            return res.json();
        } catch (err: any) {
            // Error handling in case something goes wrong during the call
            if (err instanceof Error) {
                throw new Error(err.message);
            }
        }
    }

    post = async (): Promise<String | undefined> => {
        try {
            // ...code goes here
            return "";
        } catch (err: any) {
            if (err instanceof Error) {
                throw new Error(err.message);
            }
        }
    }

    put = async () => { return "" }

    delete = async (url: string): Promise<any> => {
        try {
            const res = await fetch(url, { method: 'DELETE' })
            return res.json();
        } catch (err: any) {
            if (err instanceof Error) {
                throw new Error(err.message);
            }
        }
    }

}

const singleton = new ImagesApi();
Object.freeze(singleton);
export default singleton;